import prisma from "@referrer/prisma";

export async function getAllPosts() {
  return await prisma.posts.findMany();
}

export async function getPostBySlug(slug: string) {
  return await prisma.posts.findFirst({
    where: {
      id: slug,
    },
    include: {
      user: true,
    },
  });
}
