export const types = `#graphql
  type User {
    id: ID!
    email: String!
    userName:String!
    name:String
    emailVerified: DateTime
    image:String
    overlayImage:String
    bio:String
    locale:String
    location:String
    createdAt: DateTime
    updatedAt: DateTime
    stars:Int
    stripeCustomerId:String
    workingAt:String
    post: [Post]
  }

  type UserProfile {
    id: ID!
    email: String!
    userName: String!
    name: String
    image: String
    overlayImage: String
    bio: String
    location: String
    workingAt: String
    createdAt: String
  }

  input CreateUserData {
    email: String!
    userName:String!
    name: String!
    image:String
  }
`;
