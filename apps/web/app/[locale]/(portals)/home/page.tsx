import { Metadata } from "next";

import { unstable_setRequestLocale } from "next-intl/server";

import { PostCard } from "@/components/custom-components";

export const metadata: Metadata = {
  title: "Home",
  description: "Get job referrals to the top best companies of the world",
};
const skills = ["JavaScript", "React"];

const location = "Bangalore";
const experience = "1-5 Years";
const jobType = "Full Time";
const salary = "150-250k";
const role = "Front-End Developer";

const Home = async ({ children, params: { locale } }) => {
  unstable_setRequestLocale(locale);
  // const posts = await getAllPosts();
  const posts: any[] = [];
  return (
    <>
      {[...new Array(20)].map((_, i) => (
        <PostCard key={i}>
          <PostCard.Image src="/images/avatar/avatar.png" />
          <PostCard.Content>
            <PostCard.Header name="Full Name" userName="@username" time="1h ago" timeLeft="2d Left" />
            <PostCard.Description>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse, beatae vitae repellendus saepe
              laudantium totam asperiores, nisi, repudiandae hic tenetur porro dolore consequuntur est. Beatae
              ipsa nesciunt itaque expedita tempora?
            </PostCard.Description>
            <PostCard.Tags
              location={location}
              experience={experience}
              jobType={jobType}
              role={role}
              salary={salary}
              skills={skills}
            />
            <PostCard.Footer />
          </PostCard.Content>
        </PostCard>
      ))}
      {/* {posts.map((post) => (
        <PostCard key={post.id}>
          <PostCard.Image src={post.user.image ?? AltImage} />
          <PostCard.Content>
            <PostCard.Header
              name={post.user.name}
              userName={post.user.userName}
              time="1h ago"
              timeLeft="2d Left"
            />
            <PostCard.Description>
              {post.description.length > 250
                ? post.description.slice(0, 250) + "..."
                : post.description ?? ""}
            </PostCard.Description>
            <PostCard.Tags
              location={post.location}
              experience={"" + post.experience}
              jobType={post.jobType}
              role={post.role}
              salary={post.startingRange + "-" + post.endingRange}
              skills={post.tags}
            />
            <PostCard.Footer />
          </PostCard.Content>
        </PostCard>
      ))} */}
    </>
  );
};

export default Home;
