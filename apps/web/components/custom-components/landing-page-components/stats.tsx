"use client";

import NumberTicker from "@/components/ui/number-ticker";

export const Stats = () => {
  // <section>
  //   <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
  //     <div className="mx-auto max-w-3xl text-center">
  //       <h2 className="text-[30px]  font-bold md:text-[50px]">Trusted by eCommerce Businesses</h2>

  //       <p className="mt-4 text-gray-500 sm:text-xl">
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore provident
  //         impedit esse recusandae facere libero harum sequi.
  //       </p>
  //     </div>

  //     <div className="mt-8 sm:mt-12">
  //       <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
  //         <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
  //           <dt className="order-last text-lg font-medium text-gray-500">Total Sales</dt>

  //           <dd className="text-4xl font-extrabold md:text-5xl">$4.8m</dd>
  //         </div>

  //         <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
  //           <dt className="order-last text-lg font-medium text-gray-500">Official Addons</dt>

  //           <dd className="text-4xl font-extrabold md:text-5xl">24</dd>
  //         </div>

  //         <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
  //           <dt className="order-last text-lg font-medium text-gray-500">Total Addons</dt>

  //           <dd className="text-4xl font-extrabold md:text-5xl">86</dd>
  //         </div>
  //       </dl>
  //     </div>
  //   </div>
  // </section>

  const stats = [
    {
      data: 1000,
      title: "Visitors",
    },
    {
      data: 800,
      title: "Waitlisted",
    },
    {
      data: 40,
      title: "Countries",
    },
    {
      data: 100,
      title: "Reviews",
    },
  ];

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-14 md:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="font-heading text-xl font-semibold md:text-6xl">Beta Insights</h3>
        <p className="mt-3">Currently refhired.com have not publically launched</p>
      </div>
      <div className="mt-12">
        <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
          {stats.map((item, idx) => (
            <li key={idx} className="px-12 text-center text-4xl font-semibold md:px-16">
              <NumberTicker value={item.data} /> +<p className="mt-3 text-2xl font-medium">{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
