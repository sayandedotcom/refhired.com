import { logger } from "@repo/lib";
import { type UserGetOutputType } from "@repo/models";
import { type NextFunction, type Request, type RequestHandler, type Response } from "express";

import { cookieService } from "../services/cookie.service";
import { userService } from "../services/user.service";

class UserController {
  getUserById: RequestHandler = async (
    req: Request,
    res: Response<UserGetOutputType>,
    next: NextFunction
  ) => {
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

  deleteUserById: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      await userService.deleteUser(user.id);
      cookieService.clearTokenCookie({ res });
      res.status(204);
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };

  getUserPosts: RequestHandler = async (
    req: Request,
    res: Response<UserGetOutputType>,
    next: NextFunction
  ) => {
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

  getUserApplies: RequestHandler = async (
    req: Request,
    res: Response<UserGetOutputType>,
    next: NextFunction
  ) => {
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

  getUserBookmarks: RequestHandler = async (
    req: Request,
    res: Response<UserGetOutputType>,
    next: NextFunction
  ) => {
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

  getUserRequests: RequestHandler = async (
    req: Request,
    res: Response<UserGetOutputType>,
    next: NextFunction
  ) => {
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

  getUserByUsername: RequestHandler = async (
    req: Request,
    res: Response<UserGetOutputType>,
    next: NextFunction
  ) => {
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

export const userController = new UserController();
