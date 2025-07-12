// import { generateEncryptedToken, logger } from "@repo/lib";
// import { type UserCreateInputType, type UserCreateOutputType, type UserGetOutputType } from "@repo/models";
import { type NextFunction, type Request, type RequestHandler, type Response } from "express";

import { logger } from "@referrer/lib";

class ApplyController {
  createApply: RequestHandler = async (
    req: Request<object, object, UserCreateInputType["body"]>,
    res: Response<UserCreateOutputType>,
    next: NextFunction
  ) => {
    try {
      const user = await userService.createUser(req.body);
      const { token } = await generateEncryptedToken({
        uid: user.id,
      });
      cookieService.setTokenCookie({ res, token });
      res.status(201).json({ user });
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };

  deleteApplyById: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
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

  getApplysByPostId: RequestHandler = async (
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

export const applyController = new ApplyController();
