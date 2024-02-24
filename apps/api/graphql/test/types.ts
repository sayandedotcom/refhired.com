export const testTypes = `#graphql
    type ToDo {
      id:ID!
      title:String!
    }
    type User {
      email: String!
      name: String!
    }
    type Query {
      getTodos:[ToDo],
    }
`;
