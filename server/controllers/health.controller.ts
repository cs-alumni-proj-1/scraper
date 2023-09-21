/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import Logger from "../utils/logger";
import { StatusCodes } from "http-status-codes";
import { assertIsError } from "../utils/guards";

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
}
