import { graphql } from "gql.tada";

export const Example = graphql(`
  query getQuery {
    getTodos {
      id
      title
    }
  }
`);
