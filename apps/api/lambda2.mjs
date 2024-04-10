import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import http from "http";

// The GraphQL schema
const typeDefs = `#graphql
  type Query {
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => "world",
  },
};

const app = express();
const httpServer = http.createServer(app);

// Set up Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use("/graphql", cors(), bodyParser.json(), expressMiddleware(server));

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);

// import { ApolloServer } from "apollo-server-lambda";

// import resolvers from "./graphql/resolvers.js";
// import typeDefs from "./graphql/typeDefs.js";
// import { startStandaloneServer } from "@apollo/server/standalone";

// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   introspection: !!process.env.IS_LOCAL,
// });
// const { url } = await startStandaloneServer(server);
// console.log(`🚀 Server ready at ${url}`);

// export const handler = server.createHandler();
