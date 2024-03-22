export const types = `#graphql
  type Post {
    id:ID!
    postType:PostType
    content:Json
    accept:Json
    expiresAt:DateTime
    role:String
    jobType:String
    experience:Int
    location:String
    startingRange:Int
    endingRange:Int
    userId:String
    stars:String
    acceptLimit:Int
  }

  type UserNotAuthenticatedError {
    message:String!
  }

  union PostResult = Post | UserNotAuthenticatedError

  input CreatePost {
    postType:PostType!
    content:Json!
    accept:Json
    expiresAt:DateTime
    role:String
    jobType:String
    experience:Int
    location:String
    startingRange:Int
    endingRange:Int
    userId:String
    stars:String
    acceptLimit:Int
  }

  type Todo {
    id:ID!
    title:String!
    compleated:Boolean
  }

  union TodoResult = Todo | UserNotAuthenticatedError

  enum PostType {
    REFERRALPOST
    FINDREFERRER
    POST
  }
`;

// ! watch https://youtu.be/R0A2TE0bMes?si=8IWvg0IK_lIt-bAm  https://youtu.be/ltdVXR-ke7k?si=lVnDTmBM1Ysqk_kt
