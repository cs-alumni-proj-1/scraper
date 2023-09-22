import dotenv from "dotenv";

dotenv.config();

const { DBNAME, DBPASS, DBUSER, ENV, HOST, PORT } = process.env;

export const databaseConfig = {
  host: HOST ?? "localhost",
  database: DBNAME,
  user: DBUSER,
  password: DBPASS,
  port: Number(PORT) || 5432,
  max: 2,
  idleTimeoutMillis: 120000
};

const config = {
  ...databaseConfig,
  env: ENV
};

export default config;
