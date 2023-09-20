import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import Logger from "./utils/logger";

import healthRouter from "./routes/health.route";

dotenv.config();

const PORT = 3000;
const app = express();

//cross-origin access
app.use(cors());

//parse body request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/health", healthRouter);

//catch-all route handler for requests to unknown route
app.use((req: Request, res: Response) =>
  res.status(404).send("Error: Page not found")
);

//server errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: err.message,
  };
  const errorObj = Object.assign({}, defaultErr, err);
  Logger.error(errorObj.log);
  return res.status(errorObj.status).send({ message: errorObj.message });
});

app.listen(PORT, () => {
  Logger.info(`Server listening on port: ${PORT}`);
});

export default app;
