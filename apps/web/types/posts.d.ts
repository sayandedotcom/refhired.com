import type { Applied, Posts, User } from "@prisma/client";

export type TReturnedPostsData = Posts & { user: User };

export type TPosts = {
  data: {
    data: TReturnedPostsData[];
  };
};

export type TPostsData = {
  data: Posts & { user: User; tags: Tags[] };
};

export type TDashboardPostsData = {
  data: {
    data: {
      posts: {
        id: Posts["id"];
        description: Posts["description"];
        stars: Posts["stars"];
        createdAt: Posts["createdAt"];
        totalApplied: Posts["totalApplied"];
        acceptLimit: Posts["acceptLimit"];
        expiresAt: Posts["expiresAt"];
      }[];
    };
  };
};

export type TDashboardRequestsData = {
  data: {
    data: {
      applied: {
        id: Applied["id"];
        applyInfo: sny;
        appliedAt: Applied["appliedAt"];
        reply: Applied["reply"];
        status: Applied["status"];
        visibility: Applied["visibility"];
        user: {
          name: User["name"];
          userName: User["userName"];
          image: User["image"];
          email: User["email"];
        };
      }[];
    };
  };
};

export type TDashboardDisplayRequestsData = {
  id: Applied["id"];
  applyInfo: sny;
  appliedAt: Applied["appliedAt"];
  reply: Applied["reply"];
  status: Applied["status"];
  visibility: Applied["visibility"];
  user: {
    name: User["name"];
    userName: User["userName"];
    image: User["image"];
    email: User["email"];
  };
};
