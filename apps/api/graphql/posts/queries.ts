export const queries = `#graphql
    getAllPosts: [Post]
    getPostBySlug(id: ID!): Post
    getAllAppliedPosts: [Post]
    getAllRequests: [Post]
    getAllBookmarkedPosts: [Post]
    getSignedURLForPost(imageName: String!, imageType: String!): String
    getTodos(id:ID): ReturnedTodo
    test(id:ID): TodoResult
`;
