"use client";

import Image from "next/image";

import { Button } from "@referrer/ui";

import AltImage from "../../../public/avatar/avatar.png";

export const Usecases = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-7 py-16">
      <h2 className="text-center text-[30px] md:text-[50px]">Who will be benefited</h2>
      <section className="overflow-hidden sm:grid sm:grid-cols-2">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold md:text-3xl">Job Seekers</h2>

            <h5 className="text-[16px] text-gray-500 md:mt-4 md:block md:text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed.
              Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque
              ut interdum tincidunt duis.
            </h5>

            <div className="mt-4 md:mt-8">
              <Button className="inline-block rounded px-12 py-3 text-sm font-medium transition focus:outline-none">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto flex w-11/12 items-center justify-center">
          <Image
            alt="Student"
            src={AltImage}
            height={100}
            width={100}
            className="aspect-square w-96 rounded-2xl object-cover opacity-0 transition-opacity duration-[2s]"
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          />
        </div>
      </section>

      <section className="overflow-hidden sm:grid sm:grid-cols-2">
        <div className="mx-auto flex w-11/12 items-center justify-center">
          <Image
            alt="Student"
            src={AltImage}
            height={100}
            width={100}
            className="aspect-square w-96 rounded-2xl object-cover opacity-0 transition-opacity duration-[2s]"
            onLoadingComplete={(image) => image.classList.remove("opacity-0")}
          />
        </div>
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-2xl font-bold md:text-3xl">For Referrers</h2>

            <h5 className="text-[16px] text-gray-500 md:mt-4 md:block md:text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed.
              Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque
              ut interdum tincidunt duis.
            </h5>

            <div className="mt-4 md:mt-8">
              <Button className="inline-block rounded px-12 py-3 text-sm font-medium transition focus:outline-none">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
