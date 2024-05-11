import { graphql } from "gql.tada";

export const GET_POSTS_BY_SLUG = graphql(`
  query GetPostBySlug($getPostBySlugId: String!) {
    getPostBySlug(id: $getPostBySlugId) {
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
      tags {
        name
      }
      totalApplied
      totalComments
      hashtags
    }
  }
`);
