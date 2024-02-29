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
  }
`;
