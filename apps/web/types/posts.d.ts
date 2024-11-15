export type TReturnedPostsData = Posts & { user: User };

export type TPosts = {
  data: {
    data: TReturnedPostsData[];
  };
};

export type TPostsData = {
  data: Posts & { user: User; tags: Tags[] };
};
