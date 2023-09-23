import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

import { BaseError, ValidationError } from "../errors";

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ValidationError) {
    const description = `Could not validate field: ${err.payload.field}`;
    console.error(err.stack);
    return res.status(err.statusCode).send({
      message: err.message,
      description,
      httpStatusCode: err.statusCode,
      statusMessage: err.statusMessage,
      stack: err.stack,
    });
  } else if (err instanceof BaseError) {
    console.error(err.stack);
    return res.status(err.statusCode).send({
      message: err.message,
      httpStatusCode: err.statusCode,
      statusMessage: err.statusMessage,
      payload: err.payload || {},
      stack: err.stack,
    });
  } else {
    const description = "Express error handler caught unknown middleware error";
    console.error(description);
    console.error(err.stack);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({
      message: err.message,
      description,
      stack: err.stack,
    });
  }
};

export default errorHandler;
