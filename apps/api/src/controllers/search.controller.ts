import { logger } from "@repo/lib";
import { type UserGetOutputType } from "@repo/models";
import { type NextFunction, type Request, type RequestHandler, type Response } from "express";

class SearchController {
  search: RequestHandler = async (req: Request, res: Response<UserGetOutputType>, next: NextFunction) => {
    try {
      const user = req.user;
      res.status(200).json({
        user,
      });
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };
}

export const searchController = new SearchController();
