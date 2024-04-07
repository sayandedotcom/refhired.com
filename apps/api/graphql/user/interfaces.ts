import type { User } from "@prisma/client";

export type Id = User["id"];

export type UserProfile = {
  id: User["id"];
  email: User["email"];
  userName: User["userName"];
  image: User["image"];
  overlayImage: User["overlayImage"];
  name: User["name"];
  bio: User["bio"];
  workingAt: User["workingAt"];
  location: User["location"];
  createdAt: User["createdAt"];
};
