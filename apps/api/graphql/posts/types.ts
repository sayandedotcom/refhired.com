export const types = `#graphql
  type UserFromPost {
    id: String
    userName: String
    name: String
    image: String
    bio: String
    workingAt: String
  }

  type Tag {
    name: String
  }

  type Post {
    id: ID!
    postType: PostType
    accept: JSON
    description: String
    createdAt: DateTime
    expiresAt: DateTime
    jobRole: String
    jobType: String
    jobExperience: String
    jobLocation: String
    jobCompensation: String
    userId: String
    stars: Int
    acceptLimit: Int
    companyName: String
    jobCode: String
    user: UserFromPost
    totalApplied: Int
    totalComments: Int
    tags: [Tag]
    hashtags: [String]
  }

  type CreatePost {
    postType: PostType
    accept: JSON
    description: String
    expiresAt: DateTime
    jobRole: String
    jobType: String
    jobExperience: String
    jobLocation: String
    jobCompensation: String
    userId: String
    stars: Int
    acceptLimit: Int
    companyName: String
    jobCode: String
    tags: [String]
    hashtags: [String]
  }

  type ApplyPost {
    userId: String
    postId: String
    applyInfo: JSON
  }

  type PostResult {
    code: Int
    success: Boolean
    message: String
    post: CreatePost
  }

  type ApplyPostResult {
    code: Int
    success: Boolean
    message: String
    post: ApplyPost
  }

  input CreatePostType {
    postType: PostType
    accept: JSON
    description: String
    expiresAt: DateTime
    jobRole: String
    jobType: String
    jobExperience: String
    jobLocation: String
    jobCompensation: String
    userId: String
    stars: Int
    acceptLimit: Int
    companyName: String
    jobCode: String
    tags: [String]
    hashtags: [String]
  }

  input CreateApplyPost {
    userId: String
    postId: String
    applyInfo: JSON
  }

  enum PostType {
    REFERRALPOST
    FINDREFERRER
    POST
  }

  type AppliedUser {
    email: String
  }

  type AppliedInfo {
    applyInfo: JSON,
    appliedAt: DateTime,
    userId: String
    user: AppliedUser
  }

  type AppliedPost {
    id: String
    description: String
    stars: Int
    appliedInfo: [AppliedInfo]
  }

  type AllRequests {
    id: String
    Posts: [AppliedPost]
  }

  type Todo {
    id: ID
    title: String
    compleated: Boolean
  }

  type ReturnedTodo {
    todo: String
  }

  interface Error {
    message: String!
  }

  type UserNotAuthenticatedError implements Error {
    message: String!
  }

  type NotFound implements Error {
    message: String!
  }


  union TodoResult = ReturnedTodo | UserNotAuthenticatedError | NotFound
`;
