/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import Logger from "../utils/logger";
import { StatusCodes } from "http-status-codes";
import { assertIsError } from "../utils/guards";
import { chromium, devices } from "playwright";

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

      await page.goto(req.body.link);

      const href = await page.$$eval('a', (links: any[]) => links.map(link => link.href))

      console.log(href);

      await browser.close()

      res.status(StatusCodes.OK).json(href);
    } catch(e) {
      Logger.error("Error retrieving");
      assertIsError(e);
      throw new Error(e.message);
    }
  }
}
