import { graphql } from "gql.tada";

export const GET_ALL_REQUESTS = graphql(`
  query GetAllRequests($getAllRequestsId: String!) {
    getAllRequests(id: $getAllRequestsId) {
      id
      Posts {
        id
        description
        stars
        appliedInfo {
          applyInfo
          appliedAt
          userId
          user {
            email
          }
        }
      }
    }
  }
`);
