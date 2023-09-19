import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description: "Get job referrals to the top best companies of the world",
};

const Blogs = () => {
  return (
    <section className="py-14">
      <div className="relative mx-auto max-w-xl sm:text-center">
        <h1 className="font-heading font-semibold">Our Blogs</h1>
        <div className="mt-3 max-w-xl">
          <h5 className="font-heading">Will be Updated soon</h5>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
