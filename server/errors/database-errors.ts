import { StatusCodes } from "http-status-codes";

import { BaseError } from ".";

export class DbError extends BaseError {
  constructor(message: string, payload?: Record<any, any>) {
    super(message, payload);
    Object.setPrototypeOf(this, new.target.prototype);

    this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
    this.statusMessage = "DATABASE_ERROR";
    this.payload = payload;
  }
}
