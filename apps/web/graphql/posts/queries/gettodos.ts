import { graphql } from "gql.tada";

export const htgh = graphql(`
  mutation CreateFindReferralPost($payload: CreatePostType!) {
    createReferralPost(payload: $payload) {
      __typename
    }
  }
`);
