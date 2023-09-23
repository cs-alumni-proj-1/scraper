import { ReasonPhrases, StatusCodes } from "http-status-codes";

import { BaseError } from ".";

interface NotFoundErrorPayload {
  resourceNames: string[];
}

export class NotFoundError extends BaseError {
  constructor(message: string, payload: NotFoundErrorPayload) {
    super(message, payload);
    Object.setPrototypeOf(this, new.target.prototype);

    this.statusCode = StatusCodes.NOT_FOUND;
    this.statusMessage = ReasonPhrases.NOT_FOUND;
    this.payload = payload;
  }
}
