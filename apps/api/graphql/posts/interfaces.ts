import type { Applied, Comments, Posts, User } from "@prisma/client";

export type Id = User["id"];

export type applyInfo = Applied["applyInfo"];

export type commentText = Comments["text"];

export type createPost = {
  userId: Posts["userId"];
  postType: Posts["postType"];
  description: Posts["description"];
  hashtags: string[];
};

export type createReferralPost = {
  userId: Posts["userId"];
  postType: Posts["postType"];
  description: Posts["description"];
  accept: Posts["accept"];
  expiresAt: Posts["expiresAt"];
  jobRole: Posts["jobRole"];
  jobType: Posts["jobType"];
  jobExperience: Posts["jobExperience"];
  jobCompensation: Posts["jobCompensation"];
  jobLocation: Posts["jobLocation"];
  stars: Posts["stars"];
  acceptLimit: Posts["acceptLimit"];
  companyName: Posts["companyName"];
  jobCode: Posts["jobCode"];
  tags: string[];
  hashtags: string[];
};

export type createFindReferralPost = {
  userId: Posts["userId"];
  postType: Posts["postType"];
  description: Posts["description"];
  accept: Posts["accept"];
  expiresAt: Posts["expiresAt"];
  jobRole: Posts["jobRole"];
  jobType: Posts["jobType"];
  jobExperience: Posts["jobExperience"];
  jobCompensation: Posts["jobCompensation"];
  jobLocation: Posts["jobLocation"];
  stars: Posts["stars"];
  acceptLimit: Posts["acceptLimit"];
  companyName: Posts["companyName"];
  jobCode: Posts["jobCode"];
  tags: string[];
  hashtags: string[];
};
