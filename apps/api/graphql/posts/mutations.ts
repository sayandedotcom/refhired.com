export const mutations = `#graphql
    createPost(payload: CreatePostType!): PostResult
    createReferralPost(payload: CreatePostType!): PostResult
    createFindReferralPost(payload: CreatePostType!): PostResult
    deletePost(id: ID!): PostResult
    bookmarkPost(id: ID!): PostResult
    applyPost(id: ID!): PostResult
    commentOnPost(id: ID!): PostResult
`;
