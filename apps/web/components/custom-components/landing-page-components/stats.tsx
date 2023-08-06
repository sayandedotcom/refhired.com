"use client";

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
      data: "35K",
      title: "Customers",
    },
    {
      data: "10K+",
      title: "Downloads",
    },
    {
      data: "40+",
      title: "Countries",
    },
    {
      data: "30M+",
      title: "Total revenue",
    },
  ];

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">Our customers are always happy</h3>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut
            tincidunt.
          </p>
        </div>
        <div className="mt-12">
          <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
            {stats.map((item, idx) => (
              <li key={idx} className="text-center px-12 md:px-16">
                <h4 className="text-4xl text-indigo-600 font-semibold">{item.data}</h4>
                <p className="mt-3 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
