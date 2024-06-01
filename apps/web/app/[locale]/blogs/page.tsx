"use client";

// import { Metadata } from "next";
// import { Example } from "@/graphql/queries/posts";
// import { useQuery } from "@apollo/client";
import { AnimatedGradientText } from "@/components/ui";

// import { useSuspenseQuery } from "@apollo/client";

// import { unstable_setRequestLocale } from "next-intl/server";

// export const metadata: Metadata = {
//   title: "Blogs",
//   description: "Get job referrals to the top best companies of the world",
// };

const Blogs = () => {
  // unstable_setRequestLocale(locale);
  // const { data, error } = useQuery(Example);

  return (
    <>
      <section className="px-6 py-14">
        {/* {error ? <h1>{error?.message}</h1> : <h2>{data?.hello}</h2>} */}
        <div className="relative mx-auto max-w-xl sm:text-center">
          {/* <PagesHeading heading="Blogs" desc="" /> */}
          <h1 className="font-heading font-semibold">Temporary Notice</h1>
          <div className="mx-auto mt-3">
            <AnimatedGradientText className="font-heading flex flex-col text-2xl">
              <p>
                {" "}
                Initially, this website's backend was built with Next.js 14 server actions. However, due to
                scalability, security, and limited community support concerns, I've opted to migrate the
                entire backend to Node.js and Express.js, utilizing a GraphQL API. This migration process may
                take some time, during which all services will be unavailable.
              </p>
              <br />
              <p>
                {" "}
                Additionally, I am transitioning the deployment platform from Vercel to AWS to gain more
                control over resources and reduce costs, with the assistance of the Serverless Stack (SST)
                framework. I plan to fully redeploy this website by late June.
              </p>
              <br />
              <p> Thank you to all the visitors!</p>
            </AnimatedGradientText>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
