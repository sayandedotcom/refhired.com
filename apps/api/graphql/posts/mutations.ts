export const mutations = `#graphql
    createPost(payload: CreatePost!): PostResult
    createReferralPost(payload: CreatePost!): PostResult
    createFindReferralPost(payload: CreatePost!): PostResult
    deletePost(id: ID!): PostResult
    bookmarkPost(id: ID!): PostResult
    applyPost(id: ID!): PostResult
    commentOnPost(id: ID!): PostResult
`;
