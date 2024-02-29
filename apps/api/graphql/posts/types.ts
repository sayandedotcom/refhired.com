export const types = `#graphql
  type Post {
    id:ID!
    title:String!
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
  type Todo{
    id:ID!
    title:String!
    compleated:Boolean
  }
  enum PostType {
    REFERRALPOST
    FINDREFERRER
    POST
  }
`;
