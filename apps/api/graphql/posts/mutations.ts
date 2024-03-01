export const mutations = `#graphql
    createPost(payload: CreatePost!): Post
    createReferralPost(payload: CreatePost!): Post
    createFindReferralPost(payload: CreatePost!): Post
    deletePost(id: ID!): Post
    bookmarkPost(id: ID!): Post
    applyPost(id: ID!): Post
    commentOnPost(id: ID!): Post
`;
