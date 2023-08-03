import { Metadata } from "next";

import { PostCard } from "@/components/custom-components";

import AltImage from "../../../public/images/avatar/avatar.png";

export const metadata: Metadata = {
  title: "Home",
  description: "Get job referrals to the top best companies of the world",
};
const tag = ["1-5 Years", "Full Time", "Front-End Developer", "150-250k", "JavaScript", "React"];
const Home = () => {
  return (
    <>
      {[...new Array(30)].map((_, i) => (
        <PostCard key={i}>
          <PostCard.ProfileImage src={AltImage} />
          <PostCard.PostCardContent>
            <PostCard.PostCardHeader name="Full Name" userName="@username" time="1h ago" timeLeft="2d Left" />
            <PostCard.PostCardDescription>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, beatae vitae repellendus saepe
              laudantium totam asperiores, nisi, repudiandae hic tenetur porro dolore consequuntur est. Beatae
              ipsa nesciunt itaque expedita tempora?
            </PostCard.PostCardDescription>
            <PostCard.PostCardTags tag={tag} />
            <PostCard.PostCardFooter />
          </PostCard.PostCardContent>
        </PostCard>
      ))}
    </>
  );
};

export default Home;
