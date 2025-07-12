import { type Express, type NextFunction, type Request, type Response } from "express";

import { logger } from "@referrer/lib";

import { AppError } from "../errors/error.js";
import applyRouter from "./apply.route.js";
import authRouter from "./auth.route.js";
import bookmarksRouter from "./bookmarks.route.js";
import mailsRouter from "./mails.route.js";
import notificationsRouter from "./notifications.route.js";
import postsRouter from "./posts.route.js";
import profileRouter from "./profile.route.js";
import requestsRouter from "./requests.route.js";
import searchRouter from "./search.route.js";
import settingsRouter from "./settings.route.js";
import stripeRouter from "./stripe.route.js";
import testRouter from "./test.route.js";

export const createRouter = (app: Express) => {
  app.get("/health", (_req, res) => {
    res.json("healthy");
  });

  // app.use("/auth", authRouter);
  // app.use("/apply", applyRouter);
  // app.use("/bookmarks", bookmarksRouter);
  // app.use("/mails", mailsRouter);
  // app.use("/notifications", notificationsRouter);
  app.use("/posts", postsRouter);
  // app.use("/profile", profileRouter);
  // app.use("/requests", requestsRouter);
  // app.use("/search", searchRouter);
  // app.use("/settings", settingsRouter);
  // app.use("/stripe", stripeRouter);
  app.use("/test", testRouter);

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
