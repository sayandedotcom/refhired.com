import type { Posts, Tags, User } from "@prisma/client";
import { z } from "zod";

import {
  applyValidator,
  findReferrerValidator,
  postValidator,
  referralPostValidator,
} from "@/lib/validators";

export type TReferralPost = z.infer<typeof referralPostValidator>;

export type TFindReferralPost = z.infer<typeof findReferrerValidator>;

export type TPost = z.infer<typeof postValidator>;

export type TApplyPost = z.infer<typeof applyValidator>;

export type TPostReferralPost = {
  accept: Posts["accept"];
  acceptLimit: Posts["acceptLimit"];
  companyName: Posts["companyName"];
  description: Posts["description"];
  expiresAt: Posts["expiresAt"];
  jobCode: Posts["jobCode"];
  jobCompensation: Posts["jobCompensation"];
  jobExperience: Posts["jobExperience"];
  jobLocationType: Posts["jobLocationType"];
  jobLocation: Posts["jobLocation"];
  jobRole: Posts["jobRole"];
  jobType: Posts["jobType"];
  jobURL: Posts["jobURL"];
  postType: Posts["postType"];
  stars: Posts["stars"];
  tags: string[];
};

export type TReturnedPostsData = Posts & { user: User };

export type TPosts = {
  data: {
    data: TReturnedPostsData[];
  };
};

export type TPostsData = {
  data: { data: Posts & { user: User; tags: Tags[] } };
};

export type TProfile = { data: { data: User & { posts: Posts[] } } };

export type TSettingsProfile = { data: User };

export type TApply = { applyInfo: any; starsRequired?: number; authorId: string };
