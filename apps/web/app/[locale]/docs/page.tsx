import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs",
  description: "Docs of Refhired.com",
};

const Docs = () => {
  return (
    <section className="py-14">
      <div className="relative mx-auto max-w-xl sm:text-center">
        <h1 className="font-heading font-semibold">Our Docs</h1>
        <div className="mt-3 max-w-xl">
          <h5 className="font-heading">Will be Updated soon</h5>
        </div>
      </div>
    </section>
  );
};

export default Docs;
