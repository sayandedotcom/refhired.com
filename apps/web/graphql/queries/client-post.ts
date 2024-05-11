import { graphql } from "gql.tada";

export const Example = graphql(`
  query getQuery($getTodosId: ID) {
    getTodos(id: $getTodosId) {
      id
      title
    }
  }
`);
