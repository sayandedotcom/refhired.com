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
                We are currently in the process of migrating our website's backend from a GraphQL API to a
                REST API. This transition is aimed at improving the scalability and performance of our
                services. As a result, certain features and services will be temporarily unavailable during
                this period. We expect the migration to be completed by late October.
              </p>
              <br />
              <p>
                {" "}
                We appreciate your patience and understanding as we work to enhance your experience with our
                platform. Thank you for your continued support!
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
