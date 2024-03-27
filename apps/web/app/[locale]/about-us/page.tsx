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
      <div className="relative mx-auto max-w-xl sm:text-center">
        <h1 className="font-heading font-semibold">About Us</h1>
        <div className="mt-3 max-w-xl">
          <h5 className="font-heading">Will be Updated soon</h5>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
