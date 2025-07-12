import { type TFindReferralPost, type TPost, type TPostReferralPost } from "@refhiredcom/types";
import { type NextFunction, type Request, type RequestHandler, type Response } from "express";

import { logger } from "@referrer/lib";

import { postsService } from "../services/posts.service.js";

class PostController {
  createNotmalPost: RequestHandler = async (
    req: Request<object, object, TPost>,
    res: Response<TPost>,
    next: NextFunction
  ) => {
    try {
      const post = await postsService.createRegularPost({
        user: " req.user",
        description: req.body.description,
      });
      res.status(201).json(post);
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };

  createReferralPost: RequestHandler = async (
    req: Request<object, object, TPostReferralPost>,
    res: Response<TPostReferralPost>,
    next: NextFunction
  ) => {
    try {
      const post = await postsService.createReferralPost({
        user: "req.user",
        description: req.body.description,
        accept: req.body.accept,
        acceptLimit: req.body.acceptLimit,
        companyName: req.body.companyName,
        expiresAt: req.body.expiresAt,
        jobCode: req.body.jobCode,
        jobCompensation: req.body.jobCompensation,
        jobExperience: req.body.jobExperience,
        jobLocationType: req.body.jobLocationType,
        jobURL: req.body.jobURL,
        jobLocation: req.body.jobLocation,
        jobRole: req.body.jobRole,
        jobType: req.body.jobType,
        stars: req.body.stars,
        tags: req.body.tags,
      });

      const responsePayload: TPostReferralPost = {
        ...post,
        tags: post.tags.map((tag) => tag.name),
      };

      res.status(201).json(responsePayload);
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };

  createFindReferrerPost: RequestHandler = async (
    req: Request<object, object, TFindReferralPost>,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const post = await postsService.createFindReferralPost({
        user: "req.user",
        description: req.body.description,
        jobCode: req.body.jobCode,
        companyName: req.body.companyName,
        jobURL: req.body.jobURL,
      });
      res.status(201).json(post);
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };

  deletePostById: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postId = req.params.id;
      const userId = req.params.id;
      await postsService.deletePostById(postId, userId);
      res.status(204).send();
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };

  pausePost: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const postId = req.params.id;
      const pause = req.body.pause;
      await postsService.pausePost(postId, pause);
      res.status(204).send();
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };

  getPostById: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId = req.params.id;
      const posts = await postsService.getPostById(userId);
      res.status(200).json({ posts });
    } catch (error) {
      logger.error(error);
      next(error);
    }
  };
}

export const postController = new PostController();
