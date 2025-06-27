import winston from "winston";

import { env } from "../env";

let level: "error" | "warn" | "info" | "http" | "verbose" | "debug" | "silly" = "silly";

switch (env.NODE_ENV) {
  case "production":
    level = "info";
    break;
  case "staging":
    level = "debug";
    break;
}

export const logger = winston.createLogger({
  level,
  transports: [
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  ],
});
