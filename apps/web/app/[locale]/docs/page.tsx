import { Metadata } from "next";

import { unstable_setRequestLocale } from "next-intl/server";

// import { Example } from "@/graphql/queries/posts";

// import { getClient } from "@/lib/apollo-client/client";

export const metadata: Metadata = {
  title: "Docs",
  description: "Docs of Refhired.com",
};

const Docs = ({ params: { locale } }) => {
  unstable_setRequestLocale(locale);
  // const client = getClient();
  // const { data, loading, error, errors } = await client.query({
  //   query: Example,
  // });

  // errors && <h1>errors.............</h1>;
  // error && <h1>error.............</h1>;
  return (
    <section className="py-14">
      {/* {loading ? (
        <h1>Loading.............</h1>
      ) : (
        data?.getTodos.map(({ title }, i) => <h2 key={i}>{title}</h2>)
      )} */}

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
