import { BaseError } from ".";

interface ValidationErrorPayload {
  field: string[];
}

export class ValidationError extends BaseError {
  payload: ValidationErrorPayload;

  constructor(message: string, payload: ValidationErrorPayload) {
    super(message, payload);
    Object.setPrototypeOf(this, ValidationError.prototype);

    this.payload = payload;
  }
}
