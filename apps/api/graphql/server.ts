import { ApolloServer } from "@apollo/server";
import express from "express";

import resolvers from "./resolvers.js";
import typeDefs from "./typeDefs.js";

const app = express();

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  introspection: true,
  allowBatchedHttpRequests: true,
});

export { app, server };

// const start = async () => {
//   const app = express();

//   const server = new ApolloServer({
//     typeDefs: typeDefs,
//     resolvers: resolvers,
//     introspection: true,
//     allowBatchedHttpRequests: true,
//   });

//   app.use(bodyParser.json());
//   app.use(cors());

//   await server.start();

//   app.use("/graphql", expressMiddleware(server));

//   app.listen(8000, () => console.log(`GraphQL server running at Port 🚀`));
// };

// start();
