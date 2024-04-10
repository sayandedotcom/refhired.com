import { Post } from "./posts/index.js";
import { User } from "./user/index.js";

const typeDefs = `#graphql

  scalar JSON
  scalar DateTime

  ${Post.types}
  ${User.types}

  type Query {
    ${User.queries}
    ${Post.queries}
    hello: String
  }

  type Mutation {
    ${User.mutations}
    ${Post.mutations}
  }
`;

export default typeDefs;
