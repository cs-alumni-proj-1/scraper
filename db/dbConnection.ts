/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pool, QueryResult } from "pg";
import config from "../server/config/config.ts";

const pool = new Pool(config);

module.exports = {
  query: (
    text: string,
    params: any[],
    callback: (err: Error, result: QueryResult<any>) => void
  ) => {
    console.log("Executed Query", text);
    return pool.query(text, params, callback);
  },
};
