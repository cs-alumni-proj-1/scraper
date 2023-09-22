import { Pool, QueryResult } from "pg";
import config from "../server/config/config";

const pool = new Pool(config);

module.exports = {
  query: (
    text: string,
    params: (string | number)[],
    callback: (
      err: Error,
      result: QueryResult<
        (string | number)[] | Record<string, string | number>[]
      >
    ) => void
  ) => {
    console.log("Executed Query", text);
    return pool.query(text, params, callback);
  }
};
