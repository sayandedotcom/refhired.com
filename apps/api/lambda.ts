const { ApolloServer, gql } = require("apollo-server-lambda");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => "Hello world!",
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

exports.handler = server.createHandler({
  expressGetMiddlewareOptions: {
    cors: {
      origin: "*",
      credentials: true,
    },
  },
});
