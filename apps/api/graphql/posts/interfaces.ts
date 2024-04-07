import type { Applied, Comments, Posts, User } from "@prisma/client";

export type Id = User["id"];

export type applyInfo = Applied["applyInfo"];

export type commentText = Comments["text"];

export type createPost = {
  userId: Posts["userId"];
  postType: Posts["postType"];
  content: Posts["content"];
  description: Posts["description"];
  hashtags: string[];
};

export type createReferralPost = {
  userId: Posts["userId"];
  postType: Posts["postType"];
  content: Posts["content"];
  description: Posts["description"];
  accept: Posts["accept"];
  expiresAt: Posts["expiresAt"];
  role: Posts["role"];
  jobType: Posts["jobType"];
  experience: Posts["experience"];
  location: Posts["location"];
  startingRange: Posts["startingRange"];
  endingRange: Posts["endingRange"];
  stars: Posts["stars"];
  acceptLimit: Posts["acceptLimit"];
  tags: string[];
  hashtags: string[];
};

export type createFindReferralPost = {
  userId: Posts["userId"];
  postType: Posts["postType"];
  content: Posts["content"];
  description: Posts["description"];
  accept: Posts["accept"];
  expiresAt: Posts["expiresAt"];
  role: Posts["role"];
  jobType: Posts["jobType"];
  experience: Posts["experience"];
  location: Posts["location"];
  startingRange: Posts["startingRange"];
  endingRange: Posts["endingRange"];
  stars: Posts["stars"];
  acceptLimit: Posts["acceptLimit"];
  tags: string[];
  hashtags: string[];
};
