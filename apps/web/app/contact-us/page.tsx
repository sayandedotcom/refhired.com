import { Metadata } from "next";

import { unstable_setRequestLocale } from "next-intl/server";

import { Button, Input, Textarea } from "@referrer/ui";

import { contactMethods1, contactMethods2 } from "@/components/icons/icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get job referrals to the top best companies of the world",
};

export default function Contact({ params: { locale } }) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <main className="py-14 font-bold">
        <div className="text-foreground mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mx-auto max-w-lg justify-between gap-12 lg:flex lg:max-w-none">
            <div className="max-w-lg space-y-3">
              <h1 className="font-heading">Contact Us</h1>
              <p className="font-heading text-3xl font-semibold sm:text-4xl">Let us know how we can help</p>
              <p>
                We’re here to help and answer any question you might have, We look forward to hearing from
                you! Please fill out the form, or us the contact information bellow .
              </p>
              <div>
                <ul className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-6">
                  {contactMethods1.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-x-3">
                      <div className="flex-none text-gray-400">{item.icon}</div>
                      <p>{item.contact}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12 flex-1 sm:max-w-lg lg:max-w-md">
              <form className="space-y-5">
                <div>
                  <label className="font-medium">Full name</label>
                  <Input
                    type="text"
                    required
                    className="focus:from-foreground mt-2 w-full rounded-lg border bg-transparent px-3 py-2 shadow-sm outline-none"
                  />
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <Input
                    type="email"
                    required
                    className="focus:from-foreground mt-2 w-full rounded-lg border bg-transparent px-3 py-2 shadow-sm outline-none"
                  />
                </div>
                <div>
                  <label className="font-medium">Company</label>
                  <Input
                    type="text"
                    required
                    className="focus:from-foreground mt-2 w-full rounded-lg border bg-transparent px-3 py-2 shadow-sm outline-none"
                  />
                </div>
                <div>
                  <label className="font-medium">Message</label>
                  <Textarea
                    required
                    className="focus:from-foreground mt-2 h-36 w-full resize-none appearance-none rounded-lg border bg-transparent px-3 py-2 shadow-sm outline-none"></Textarea>
                </div>
                <Button className="w-full rounded-lg px-4 py-2 duration-150">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <main className="py-14">
        <div className="text-foreground mx-auto max-w-screen-xl gap-12 px-4 md:px-8 lg:flex">
          <div className="max-w-md">
            <h1 className="text-foreground font-heading text-3xl font-semibold sm:text-4xl">Let’s connect</h1>
            <p className="text-foreground mt-3 ">
              We’re here to help and answer any question you might have, We look forward to hearing from you .
            </p>
          </div>
          <div>
            <ul className="mt-12 items-center gap-x-12 gap-y-6 md:flex lg:mt-0 lg:gap-x-0">
              {contactMethods2.map((item, idx) => (
                <li
                  key={idx}
                  className="space-y-3 border-t py-6 md:max-w-sm md:border-t-0 md:py-0 lg:max-w-none lg:border-l lg:px-12">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border text-gray-700">
                    {item.icon}
                  </div>
                  <h4 className="font-heading text-lg font-medium xl:text-xl">{item.title}</h4>
                  <p>{item.desc}</p>
                  <a
                    href={item.link.href}
                    className="flex items-center gap-1 text-sm font-medium  duration-150">
                    {item.link.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                        fillRule="evenodd"
                        d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
