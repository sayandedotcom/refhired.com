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
  applyInfo: any;
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

export type TDashboardReplyRequests = {
  reply: Applied["reply"];
  status: Applied["status"];
};

export type TApplied = {
  // id: Applied["id"];
  // sent: Applied["appliedAt"];
  // status: Applied["status"];
  // post: Posts["description"];
  // amount: Posts["stars"];
  // message: any;
  // pdfs: any;
  // links: any;
  id: Applied["id"];
  sent: Applied["appliedAt"];
  applyInfo: any;
  status: Applied["status"];
  visibility: Applied["visibility"];
  post: Posts["description"]; // Truncate post description
  amount: Posts["stars"]; // Calculate amount
  message: string;
  pdfs: any;
  links: any;
  postId: Posts["id"];
  authorUsername: User["userName"];
};

export type TAllApplied = {
  data: {
    data: {
      id: Applied["id"];
      appliedAt: Applied["appliedAt"];
      applyInfo: any;
      status: Applied["status"];
      visibility: Applied["visibility"];
      posts: {
        id: Posts["id"];
        description: Posts["description"];
        stars: Posts["stars"];
        expiresAt: Posts["expiresAt"];
        user: {
          userName: User["userName"];
        };
      };
    }[];
  };
};

export type TAllApplied2 = {
  id: Applied["id"];
  appliedAt: Applied["appliedAt"];
  applyInfo: any;
  status: Applied["status"];
  visibility: Applied["visibility"];
  posts: {
    id: Posts["id"];
    description: Posts["description"];
    stars: Posts["stars"];
    expiresAt: Posts["expiresAt"];
    user: {
      userName: User["userName"];
    };
  };
};

export type TAllApplied3 = {
  id: Applied["id"];
  sent: aApplied["appliedAt"];
  status: Applied["status"];
  post: Posts["description"];
  amount: Posts["stars"];
  message: string;
  pdfs: any;
  links: any;
  postId: Posts["id"];
  authorUsername: User["userName"];
};
