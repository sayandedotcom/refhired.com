const resolvers = {
  Query: {
    getTodos: () => [{ id: 1, title: "Test" }],
  },
  // Mutation: {},
};

export default resolvers;
