import { graphql } from "gql.tada";

export const GET_ALL_POSTS_BY_USERS = graphql(`
  query GetAllPosts($userId: String) {
    getAllPosts(userId: $userId) {
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
`);
