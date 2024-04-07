export const types = `#graphql
  type UserFromPost {
    id: ID!
    userName:String!
    name:String
    image:String
    bio:String
    workingAt:String
  }

  type Post {
    id: ID!
    postType: PostType
    content: JSON
    accept: JSON
    description: String
    expiresAt: DateTime
    role: String
    jobType: String
    experience: Int
    location: String
    startingRange: Int
    endingRange: Int
    userId: String
    stars: String
    acceptLimit: Int
    user: UserFromPost
  }

  type CreatePost {
    postType: PostType
    content: JSON
    accept: JSON
    description: String
    expiresAt: DateTime
    role: String
    jobType: String
    experience: Int
    location: String
    startingRange: Int
    endingRange: Int
    userId: String
    stars: String
    acceptLimit: Int
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

  type PostResult {
    code: Int
    success: Boolean
    message: String
    post: CreatePost
  }

  input CreatePostType {
    postType: PostType
    content: JSON
    accept: JSON
    description: String
    expiresAt: DateTime
    role: String
    jobType: String
    experience: Int
    location: String
    startingRange: Int
    endingRange: Int
    userId: String
    stars: String
    acceptLimit: Int
  }

  type Todo {
    id: ID
    title: String
    compleated: Boolean
  }

  type ReturnedTodo {
    code: Int
    sucess: Boolean
    message: String
    todo: [Todo]
  }

  union TodoResult = ReturnedTodo | UserNotAuthenticatedError | NotFound

  enum PostType {
    REFERRALPOST
    FINDREFERRER
    POST
  }
`;
