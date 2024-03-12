import { ApolloServer } from "@apollo/server";
// import { handlers, startServerAndCreateLambdaHandler } from "@as-integrations/aws-lambda";
import express from "express";

import resolvers from "./graphql/resolvers.js";
import typeDefs from "./graphql/typeDefs.js";

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// export const graphqlHandler = startServerAndCreateLambdaHandler(
//   server as any,
//   // We will be using the Proxy V2 handler
//   handlers.createAPIGatewayProxyEventV2RequestHandler()
// );
export { app, server };

// introspection: true,
// allowBatchedHttpRequests: true,
