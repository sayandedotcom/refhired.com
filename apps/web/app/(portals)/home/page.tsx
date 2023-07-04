import { PostCard } from "@/components/custom-components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Get job referrals to the top best companies of the world",
};

const Home = () => {
  return (
    <>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </>
  );
};

export default Home;
