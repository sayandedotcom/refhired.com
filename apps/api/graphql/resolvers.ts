import GraphQLDateTime from "graphql-iso-date";
import GraphQLJSON from "graphql-type-json";

import { Post } from "./posts/index.js";
import { User } from "./user/index.js";

const resolvers = {
  JSON: GraphQLJSON,
  DateTime: GraphQLDateTime,

  Query: {
    ...User.resolvers.queries,
    ...Post.resolvers.queries,
  },

  Mutation: {
    ...User.resolvers.mutations,
    ...Post.resolvers.mutations,
  },

  ...User.resolvers.extraResolvers,
  ...Post.resolvers.extraResolvers,
};

export default resolvers;
