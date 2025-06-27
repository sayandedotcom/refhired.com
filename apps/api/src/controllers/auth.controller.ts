import { generateEncryptedToken, logger } from "@repo/lib";
import { type UserCreateInputType, type UserCreateOutputType, type UserGetOutputType } from "@repo/models";
import { type NextFunction, type Request, type RequestHandler, type Response } from "express";

import { cookieService } from "../services/cookie.service";
import { userService } from "../services/user.service";

class AuthController {
  upsertUser: RequestHandler = async (
    req: Request<object, object, UserCreateInputType["body"]>,
    res: Response<UserCreateOutputType>,
    next: NextFunction
  ) => {
    try {
      const user = await userService.upsertUser(req.body.email);

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

  createUser: RequestHandler = async (
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

  deleteCurrentUser: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
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

  getCurrentUser: RequestHandler = async (
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

export const authController = new AuthController();
