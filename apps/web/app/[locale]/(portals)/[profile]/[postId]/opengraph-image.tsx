import { getPostBySlug } from "@/actions/posts";

export const size = {
  width: 900,
  height: 450,
};

export const contentType = "image/png";

interface Props {
  params: {
    slug: number;
  };
}

export default async function og({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  return;
}
//  new ImageResponse(
//   (
//     <div tw="relative flex items-center justify-center">
//       <Image src={post?.image} alt="post" />
//       <div tw="absolute flex bg-black opacity-50 inset-0 " />
//       <div tw="absolute flex items-center top-2 w-full ">
//         <p tw="text-white text-4xl flex font-bold m-5">{post?.description}</p>
//         <p tw="text-indigo-200 text-xl flex font-bold m-5">{post?.user.userName}</p>
//         <p tw="text-purple-200 text-xl flex font-bold m-5">{post?.updatedAt?.toDateString()}</p>
//       </div>
//     </div>
//   ),
//   size
// );
