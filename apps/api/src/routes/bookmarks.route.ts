import { postValidator, referralPostValidator } from "@refhiredcom/validators";
import express from "express";

import { postController } from "../controllers/posts.controller.js";
import { requireAuth } from "../middlewares/require-auth.js";
import validate from "../middlewares/validate.middleware.js";

const bookmarksRouter = express.Router({ mergeParams: true });

/**
 * @method GET @url /posts/:id @desc fetch a single post by ID
 * @method DELETE @url /posts/:id @desc delete a post by ID
 */
bookmarksRouter
  .route("/:id")
  .get(requireAuth, postController.getPostById)
  .delete(requireAuth, postController.deletePostById);

/**
 * @method POST @url /posts @desc create a regular post
 * @desc This is used to create a regular post.
 * @desc It will create a post with the type "POST"
 */
bookmarksRouter.post("/", requireAuth, validate(postValidator), postController.createNotmalPost);

/**
 * @method POST @url /posts/referral @desc create a referral post
 * @desc This is used to create a post for a referral.
 * @desc It will create a post with the type "REFERRAL_POST"
 */
bookmarksRouter.post(
  "/referral",
  requireAuth,
  validate(referralPostValidator),
  postController.createReferralPost
);

/**
 * @method POST @url /posts/find-referrer @desc create a post to find a referrer
 * @desc This is used to create a post to find a referrer for a job.
 * @desc It will create a post with the type "FIND_REFERRER_POST"
 */
bookmarksRouter.post(
  "/find-referrer",
  requireAuth,
  validate(referralPostValidator),
  postController.createFindReferrerPost
);

/**
 * @method POST @url /posts/pause @desc pause a post
 * @desc This is used to pause a post, so that it doesn't show up in the
 * feed anymore. This is useful when a user wants to pause a post
 */
bookmarksRouter.post("/pause", requireAuth, postController.pausePost);

export default bookmarksRouter;
