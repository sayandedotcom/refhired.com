export const queries = `#graphql
    getAllPosts:[Post]
    getPostBySlug(id: ID!):Post
    getAllAppliedPosts:[Post]
    getAllRequests:[Post]
    getAllBookmarkedPosts:[Post]
    getTodos:[Todo!]
`;
