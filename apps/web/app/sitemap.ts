export default async function sitemap() {
  const baseUrl = "https://www.dummyblog.com";

  // const posts = await getAllPosts();
  // const postUrls = posts.map((post) => ({
  //   url: `${baseUrl}/post/${post.id}`,
  //   lastModified: post.updatedAt,
  // }));

  return [
    {
      url: "https://acme.com",
      lastModified: new Date(),
    },
    {
      url: "https://acme.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://acme.com/blog",
      lastModified: new Date(),
    },
    // ...postUrls,
  ];
}
