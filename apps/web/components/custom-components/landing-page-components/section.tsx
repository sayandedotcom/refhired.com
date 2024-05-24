"use client";

import { Star } from "lucide-react";

import { BentoGrid, BentoGridItem } from "@/components/ui";

export const Section = () => {
  return (
    <div className="flex flex-col gap-3 py-11">
      <h3
        className="font-heading bg-gradient-to-r from-[#fc00ff] to-[#00dbde] bg-clip-text text-center text-2xl text-[30px]
        font-semibold text-transparent sm:text-4xl md:text-[50px]">
        Features
      </h3>
      <BentoGrid className="mix-w-4xl mx-auto w-full md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
};
const Skeleton = () => (
  <div className="dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex h-full min-h-[6rem] w-full   flex-1 rounded-xl border  border-transparent bg-neutral-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:border-white/[0.2] dark:bg-black"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <Star className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <Star className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1",
    icon: <Star className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2",
    icon: <Star className="h-4 w-4 text-neutral-500" />,
  },
];

// export const Section = () => {
//   return (
// <>

{
  /* <section className="py-14">
        <div className="mx-auto max-w-screen-xl px-4 text-center md:px-8">
          <div className="mx-auto max-w-2xl">
            <h3
              className="font-heading bg-gradient-to-r from-[#fc00ff] to-[#00dbde] bg-clip-text px-2 text-center text-2xl text-[30px]
              font-semibold text-transparent sm:text-4xl md:text-[50px]">
              Why to use refhired ?
            </h3>
            <p className="mt-3 font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie
              varius, enim ex faucibus purus.
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => (
                <li key={idx} className="space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold ">{item.title}</h4>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section> */
}
{
  /* </>
  );
}; */
}

// <section className="font-heading flex items-center justify-center">
//   <div className="w-11/12 rounded-3xl px-4 py-8 sm:px-6 sm:py-12 md:w-10/12 lg:px-8 lg:py-16">
//     <div className="w-full">
//       <h2 className="text-center text-[30px] md:text-[50px]">
//         Why{" "}
//         <span className="bg-gradient-to-r from-[#fc00ff] to-[#00dbde] bg-clip-text px-2 text-center text-[30px] text-transparent md:text-[50px]">
//           referrer
//         </span>{" "}
//         ?
//       </h2>
//       <h5 className="mt-4 text-center text-[16px] md:text-[20px]">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit totam iste
//         obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id tenetur quibusdam, quos
//         fuga minima.
//       </h5>
//     </div>

//     <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
//       <div className="flex items-start gap-4">
//         <span className="shrink-0 rounded-lg bg-gray-800 p-4">
//           <svg
//             className="h-5 w-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg">
//             <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
//             <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
//           </svg>
//         </span>

//         <div>
//           <h4 className="text-[24px] md:text-[28px]">Lorem, dolor.</h4>
//           <p className="text-foreground mt-1 text-base md:text-lg">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
//             possimus quisquam reiciendis tempora animi! Quaerat, saepe?
//           </p>
//         </div>
//       </div>

//       <div className="flex items-start gap-4">
//         <span className="shrink-0 rounded-lg bg-gray-800 p-4">
//           <svg
//             className="h-5 w-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg">
//             <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
//             <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
//           </svg>
//         </span>

//         <div>
//           <h4 className="text-[20px] md:text-[28px]">Lorem, ipsum dolor.</h4>

//           <p className="mt-1 text-lg">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
//             possimus quisquam reiciendis tempora animi! Quaerat, saepe?
//           </p>
//         </div>
//       </div>

//       <div className="flex items-start gap-4">
//         <span className="shrink-0 rounded-lg bg-gray-800 p-4">
//           <svg
//             className="h-5 w-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg">
//             <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
//             <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
//           </svg>
//         </span>

//         <div>
//           <h4 className="text-[20px] md:text-[28px]">Lorem, ipsum dolor.</h4>

//           <p className="mt-1 text-base md:text-lg">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
//             possimus quisquam reiciendis tempora animi! Quaerat, saepe?
//           </p>
//         </div>
//       </div>

//       <div className="flex items-start gap-4">
//         <span className="shrink-0 rounded-lg bg-gray-800 p-4">
//           <svg
//             className="h-5 w-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg">
//             <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
//             <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
//           </svg>
//         </span>

//         <div>
//           <h4 className="text-[20px] md:text-[28px]">Lorem, ipsum dolor.</h4>

//           <p className="mt-1 text-lg">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
//             possimus quisquam reiciendis tempora animi! Quaerat, saepe?
//           </p>
//         </div>
//       </div>

//       <div className="flex items-start gap-4">
//         <span className="shrink-0 rounded-lg bg-gray-800 p-4">
//           <svg
//             className="h-5 w-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg">
//             <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
//             <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
//           </svg>
//         </span>

//         <div>
//           <h4 className="text-[20px] md:text-[28px]">Lorem, ipsum dolor.</h4>

//           <p className="mt-1 text-lg">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
//             possimus quisquam reiciendis tempora animi! Quaerat, saepe?
//           </p>
//         </div>
//       </div>

//       <div className="flex items-start gap-4">
//         <span className="shrink-0 rounded-lg bg-gray-800 p-4">
//           <svg
//             className="h-5 w-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg">
//             <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
//             <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path>
//           </svg>
//         </span>

//         <div>
//           <h4 className="text-[20px] md:text-[28px]">Lorem, ipsum dolor.</h4>

//           <p className="mt-1 text-lg">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
//             possimus quisquam reiciendis tempora animi! Quaerat, saepe?
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>;
