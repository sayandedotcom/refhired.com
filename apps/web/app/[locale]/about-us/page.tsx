import { Metadata } from "next";

import { unstable_setRequestLocale } from "next-intl/server";

export const metadata: Metadata = {
  title: "About Us",
  description: "Get job referrals to the top best companies of the world",
};

const AboutUs = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  return (
    <section className="py-14">
      <div className="relative mx-auto max-w-3xl sm:text-center">
        <h1 className="font-heading font-semibold">About Us</h1>
        <div className="mx-auto mt-3">
          <h5 className="font-heading">
            [Temporary Notice] Initially, this website's backend was built with Next.js 13/14 server actions.
            However, due to scalability, security, and limited community support concerns, I've opted to
            migrate the entire backend to Node.js and Express.js, utilizing a GraphQL API. This migration
            process may take some time, during which certain services may be unavailable. Additionally, I am
            transitioning the deployment platform from Vercel to AWS to gain more control over resources and
            reduce costs, with the assistance of the Serverless Stack (SST) framework. I plan to fully
            redeploy this website by May 1st. Thank you to all the visitors!
          </h5>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
