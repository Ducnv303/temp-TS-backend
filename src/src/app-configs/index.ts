require("dotenv").config();


export const NODE_ENV = process.env.NODE_ENV || "local";
export const PORT = Number(process.env.PORT || 3000);

export const POSTGRES_URI = process.env.POSTGRES_URI || "";
export const POSTGRES_SLAVE_URI = process.env.POSTGRES_SLAVE_URI || "";
export const DB_TYPE = process.env.DB_TYPE || "postgres";
export const DB_TIMEZONE = process.env.DB_TIMEZONE || "+07:00";

export const PATH_LOG = process.env.PATH_LOG || "/app/logs";

export const REDIS_HOST = process.env.REDIS_HOST;
export const REDIS_PORT = Number(process.env.REDIS_PORT);
export const REDIS_PREFIX = process.env.REDIS_PREFIX;
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD;

export const ACCESS_TOKEN_PRIVATE_KEY = process.env.ACCESS_TOKEN_PRIVATE_KEY || '123123123';

export const KAFKA_HOST =  process.env.KAFKA_HOST || "";