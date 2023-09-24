/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import Logger from "../utils/logger";
import { StatusCodes } from "http-status-codes";
import { assertIsError } from "../utils/guards";
import { chromium, devices } from "playwright";
// import fs from 'fs';
import axios from 'axios';
import AWS from 'aws-sdk';
const lambda = new AWS.Lambda({region: 'us-east-1'});
AWS.config.update({region: 'us-east-1'});
console.log('AWS CONFIG?', AWS.config);

export class HealthController {
  constructor() {
    this.getHealthStatus = this.getHealthStatus.bind(this);
  }
  getHealthStatus(req: Request, res: Response, next: NextFunction) {
    try {
      Logger.info("Checking the API status: running");
      return res.status(StatusCodes.OK).send({
        status: "UP",
        message: "The API is running!",
      });
    } catch (e) {
      Logger.error("Unable to connect to remote server");
      assertIsError(e);
      throw new Error(e.message);
    }
  }

  async getCirculars(req: Request, res: Response, next: NextFunction) {
    try {
      const iPhone = devices['iPhone 11 Pro']
      const browser = await chromium.launch();
      const context = await browser.newContext({
        ...iPhone
      })

      const page = await context.newPage();

      await page.goto(req.body.link, { waitUntil: 'networkidle'});

      const pdfLinks = await page.$$('td.pdf_link > a');

      const circulars = [];

      // const folderPath = `../circulars`;

      for (let i = 0; i < pdfLinks.length; i++) {
        const link = await pdfLinks[i].getAttribute('href');
        const absoluteUrl = `https://centralbank.go.ke${link}`
        //@ts-ignore
        const file = await axios.get(absoluteUrl, { responseType: 'arraybuffer'});
        const base64file = await Buffer.from(file.data, 'binary').toString('base64');
        const pdfName = `circular${i}`;
        const lambdaPayload = {
          pdf_data: base64file,
          pdfName: pdfName
        }

        const params = {
          FunctionName: 'arn:aws:lambda:us-east-1:972214670213:function:writeOnlyS3',
          Payload: JSON.stringify(lambdaPayload)
        };

        console.log('INVOKING LAMBDA FUNCTION');
        // console.log('AWS CONFIG?', AWS.config);

        await lambda.invoke(params, (err: any, data: any) => {
          if(err) {
            console.error(err);
          } else {
            console.log('Lambda function executed')
          }
        });

        // console.log('WRITING FILE');
        // //@ts-ignore
        // await fs.writeFile(pdfPath, file.data, err => {
        //   if(err) throw err;
        //   console.log('SAVED!');
        // });

        console.log('WRITTEN TO S3 BUCKET')

        circulars.push(link);
      }

      await browser.close()

      res.status(StatusCodes.OK).json(circulars);
    } catch(e) {
      Logger.error("Error retrieving");
      assertIsError(e);
      throw new Error(e.message);
    }
  }
}

// async function getStreamBuffer(stream: any) {
//   console.log('GET BUFFER STREAM');
//   const chunks = [];
//   for await (const chunk of stream) {
//     if (typeof chunk === 'number') {
//       chunks.push(Buffer.alloc(chunk));
//     } else {
//       chunks.push(chunk);
//     }
//   }

//   return Buffer.concat(chunks);
// } 