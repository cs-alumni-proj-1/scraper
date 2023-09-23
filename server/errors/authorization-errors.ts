import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { BaseError } from ".";

export class AuthorizationError extends BaseError {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, new.target.prototype);

    this.statusCode = StatusCodes.UNAUTHORIZED;
    this.statusMessage = ReasonPhrases.UNAUTHORIZED;
  }
}
