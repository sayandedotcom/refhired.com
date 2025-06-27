import { logger } from "@repo/lib";
import { type Express, type NextFunction, type Request, type Response } from "express";

export const createRouter = (app: Express) => {
  app.get("/health", (_req, res) => {
    res.send("healthy");
  });

  app.use("/auth", authRouter);

  app.use((err: Error, _: Request, res: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return res.status(err.getStatusFromCode()).json({
        message: err.message,
      });
    }
    logger.error(err);
    return res.status(500).json({
      message: "Internal server error",
    });
  });

  app.use((_req, res) => {
    res.status(404).send("Not Found");
  });
};
