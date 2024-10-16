"use client";

import { useRouter } from "next/navigation";

import { Button } from "@referrer/ui";

export default function NotFound() {
  const router = useRouter();
  return (
    <>
      <section className="flex h-screen items-center p-16">
        <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
          <div className="max-w-md text-center">
            <h2 className="mb-8 text-9xl font-extrabold dark:text-gray-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn&apos;t find this page.</p>
            <p className="mb-8 mt-4">But dont worry, you can find plenty of other things on our homepage.</p>
            <Button onClick={() => router.back()} className="rounded-full px-8 py-3 font-semibold">
              Go back !
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
