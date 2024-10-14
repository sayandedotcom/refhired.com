import { Metadata } from "next";

import { Separator } from "@referrer/ui";

import { PagesHeading, ShimmerButtonComponent, ThreeDCard } from "@/components/custom-components";
import { Icons } from "@/components/icons/icons";
import { AnimatedGradientText } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description: "Get job referrals to the top best companies of the world",
};

const AboutUs = () => {
  return (
    <section className="px-6 py-14">
      <div className="relative mx-auto flex max-w-4xl flex-col gap-10 sm:text-center">
        <PagesHeading heading="About Us" desc="" />
        <div className="text-left">
          <h2 className="font-bold">Our Mission</h2>
          <Separator />
          <p className="font-sans font-semibold">
            The current hiring and referral process is fundamentally flawed. Candidates face a barrage of
            applications, navigate thousands of websites, endure ghosting, and suffer from poor management.
            This results in a slow, painful experience for everyone involved.
          </p>
          <br />
          <p className="bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text font-sans font-semibold text-transparent">
            We are revolutionizing this process by creating a seamless, delightful referral experience. With
            just one click, we bring back the magic of referrals, transforming them into a swift and enjoyable
            journey.
          </p>
        </div>
        <div className="text-left">
          <h2 className="font-bold">Team</h2>
          <p className="font-sans font-semibold">
            Currently, refhired.com is independently operated by Sayan De.
          </p>

          <ThreeDCard />
          {/* <p className="py-6 font-sans font-normal">
              Sayan De is a passionate developer from India dedicated to building innovative, problem-solving
              products. He is currently pursuing a Master&apos;s in Computer Science and has expertise in
              full-stack development, DevOps, and cloud computing (AWS). With prior experience as a Founding
              Full-Stack Developer at a seed-funded startup, Sayan has participated in numerous hackathons.
              Now, he aims to leverage his skills and experience to contribute positively to society. He is
              also excited about making this project open-source in near future.
            </p> */}
        </div>
        <div className="text-left">
          <h2 className="font-bold">How do I come to this Idea?</h2>
          <p className="font-sans font-semibold">
            During my final year of bachelor’s, I stumbled upon the transformative power of job referrals and
            was truly amazed. It struck me that securing a referral from within a company could significantly
            enhance one’s interview prospects. However, I soon realized that obtaining referrals wasn’t as
            simple as it seemed. It involved tirelessly scouring through various social platforms to connect
            with employees and team members, enduring instances of being ghosted or receiving delayed
            responses, and encountering other obstacles. Driven to tackle this challenge head-on, I embarked
            on a mission to create a solution. This journey ultimately led me to establish refhired.com
          </p>
        </div>
        <div className="flex flex-col gap-2 text-left">
          <h2 className="font-bold">Tech Stack</h2>
          <p className="font-sans font-semibold">
            We generally use tech stacks that are open sourced and has large community support.
          </p>
          <AnimatedGradientText className="font-sans font-semibold">
            • Front-End --&gt; Next.js, TailwindCSS
          </AnimatedGradientText>
          <AnimatedGradientText className="font-sans font-semibold">
            • Back-End --&gt; Node.js, Express.js, Prisma, GraphQL, PostgreSQL, Redis
          </AnimatedGradientText>
          <AnimatedGradientText className="font-sans font-semibold">
            • DevOps --&gt; Git, Jira, GitHub Actions, Docker, Prometheus, Grafana
          </AnimatedGradientText>
          <AnimatedGradientText className="font-sans font-semibold">
            • Deployement Services (AWS) --&gt; S3, Lambda, Aurora, SES, CloudFormation, CloudFront, Route53,
            Elasticache
          </AnimatedGradientText>
          <AnimatedGradientText className="font-sans font-semibold">
            • Popular Libraries --&gt; Zod, Next-Auth, Apollo Server & Client, Stripe, Zustland, gql.tada,
            ioredis, next-intl, moment, framer-motion, TanStack Table
          </AnimatedGradientText>
        </div>
        <div className="mt-10 py-20 text-center">
          <Icons.largeLogo className="mx-auto" />
          <h2 className="animate-gradient bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 bg-clip-text font-bold text-transparent">
            Join the Waitlist
          </h2>
          <p className="my-6 font-sans font-semibold">
            Join the waitlist to be among the first to experience it!
          </p>
          <ShimmerButtonComponent href={"/"}>Join the Waitlist !</ShimmerButtonComponent>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
