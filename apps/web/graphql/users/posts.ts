import { graphql } from "gql.tada";

export const GET_USER_PROFILE = graphql(`
  query GetUserByUsername($userName: String!) {
    getUserByUsername(userName: $userName) {
      id
      email
      userName
      name
      emailVerified
      image
      overlayImage
      bio
      locale
      location
      createdAt
      updatedAt
      stars
      stripeCustomerId
      workingAt
      post {
        id
        postType
        accept
        description
        createdAt
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
        user {
          id
          userName
          name
          image
          bio
          workingAt
        }
        totalApplied
        totalComments
        tags {
          name
        }
        hashtags
      }
    }
  }
`);
