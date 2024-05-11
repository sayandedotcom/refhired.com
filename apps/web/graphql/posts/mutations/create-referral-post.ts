import { graphql } from "gql.tada";

export const CREATE_REFERRAL_POST = graphql(`
  mutation Mutation($payload: CreatePostType!) {
    createReferralPost(payload: $payload) {
      code
      message
      success
      post {
        postType
        accept
        description
        expiresAt
        jobRole
        jobType
        jobExperience
        jobLocation
        jobCompensation
        userId
        stars
        acceptLimit
        companyName
        jobCode
        tags
        hashtags
      }
    }
  }
`);
