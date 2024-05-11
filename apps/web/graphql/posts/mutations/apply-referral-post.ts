import { graphql } from "gql.tada";

export const APPLY_REFERRAL_POST = graphql(`
  mutation ApplyPost($payload: CreateApplyPost!) {
    applyPost(payload: $payload) {
      code
      success
      message
      post {
        applyInfo
        postId
        userId
      }
    }
  }
`);
