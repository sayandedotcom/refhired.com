import { generateEncryptedToken, logger } from "@repo/lib";
import { type NextFunction, type Request, type RequestHandler, type Response } from "express";

import { cookieService } from "../services/cookie.service";

class FeedController {
  getFeed: RequestHandler = async (
    req: Request<object, object, FeedCreateInputType["body"]>,
    res: Response<FeedCreateOutputType>,
    next: NextFunction
  ) => {
    try {
      const feed = await feedService.createFeed(req.body);
      const { token } = await generateEncryptedToken({
        uid: feed.id,
      });
      cookieService.setTokenCookie({ res, token });
      res.status(201).json({ feed });
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };
}

export const feedController = new FeedController();
