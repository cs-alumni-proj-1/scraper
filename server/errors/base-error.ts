import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { IBaseError } from "../types/error.types";

export class BaseError extends Error implements IBaseError {
  statusCode: number;
  statusMessage: string;
  payload?: Record<any, any>;

  constructor(message: string, payload?: Record<any, any>) {
    super(message);

    // https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-2.html#support-for-newtarget
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = this.constructor.name;
    this.statusCode = StatusCodes.BAD_REQUEST;
    this.statusMessage = ReasonPhrases.BAD_REQUEST;
    this.payload = payload;

    Error.captureStackTrace(this);
  }
}
