import { type NextFunction, type Request, type Response } from "express";
import { type AnyZodObject } from "zod";

import { logger } from "@referrer/lib";

import { AppError } from "../errors/error.js";

const validate = (schema: AnyZodObject) => (req: Request, _res: Response, next: NextFunction) => {
  try {
    const safeParse = schema.safeParse({
      query: req.query,
      params: req.params,
      body: req.body,
      headers: req.headers,
    });

    if (!safeParse.success) {
      const errorMessages = safeParse.error.issues.map((issue) => `${issue.path.join(".")} ${issue.message}`);
      logger.error(errorMessages.join(", "));
      // not really a meaningful error message for client, but these errors should ideally be caught on the client side, for forcefull server calls this is fine
      throw new AppError({
        code: "BAD_REQUEST",
        message: errorMessages.join(", "),
      });
    }

    next();
  } catch (e: unknown) {
    next(e);
  }
};

export default validate;
