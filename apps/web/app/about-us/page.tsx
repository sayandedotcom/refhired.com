import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Get job referrals to the top best companies of the world",
};

const AboutUs = () => {
  return (
    <section className="py-14">
      <div className="relative max-w-xl mx-auto sm:text-center">
        <h1 className="font-heading font-semibold">About Us</h1>
        <div className="mt-3 max-w-xl">
          <h5 className="font-heading">Will be Updated soon</h5>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
