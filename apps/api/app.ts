import { ApolloServer } from "@apollo/server";
import express from "express";

import resolvers from "./graphql/resolvers.js";
import typeDefs from "./graphql/typeDefs.js";

const app = express();

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  introspection: true,
  allowBatchedHttpRequests: true,
});

export { app, server };
