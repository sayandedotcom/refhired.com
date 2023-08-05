import { Metadata } from "next";

import { Button, Input, Textarea } from "@referrer/ui";

import { contactMethods1, contactMethods2 } from "@/components/icons/icons";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get job referrals to the top best companies of the world",
};

export default function Contact() {
  return (
    <>
      <main className="py-14 font-bold">
        <div className="max-w-screen-xl mx-auto px-4 text-foreground md:px-8">
          <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
            <div className="max-w-lg space-y-3">
              <h1 className="font-heading">Contact Us</h1>
              <p className="font-heading text-3xl font-semibold sm:text-4xl">Let us know how we can help</p>
              <p>
                We’re here to help and answer any question you might have, We look forward to hearing from
                you! Please fill out the form, or us the contact information bellow .
              </p>
              <div>
                <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                  {contactMethods1.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-x-3">
                      <div className="flex-none text-gray-400">{item.icon}</div>
                      <p>{item.contact}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex-1 mt-12 sm:max-w-lg lg:max-w-md">
              <form className="space-y-5">
                <div>
                  <label className="font-medium">Full name</label>
                  <Input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:from-foreground shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <Input
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:from-foreground shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Company</label>
                  <Input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 bg-transparent outline-none border focus:from-foreground shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Message</label>
                  <Textarea
                    required
                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:from-foreground shadow-sm rounded-lg"></Textarea>
                </div>
                <Button className="w-full px-4 py-2 rounded-lg duration-150">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <main className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-foreground gap-12 md:px-8 lg:flex">
          <div className="max-w-md">
            <h1 className="text-foreground font-heading text-3xl font-semibold sm:text-4xl">Let’s connect</h1>
            <p className="mt-3 text-foreground ">
              We’re here to help and answer any question you might have, We look forward to hearing from you .
            </p>
          </div>
          <div>
            <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
              {contactMethods2.map((item, idx) => (
                <li
                  key={idx}
                  className="space-y-3 border-t py-6 md:max-w-sm md:py-0 md:border-t-0 lg:border-l lg:px-12 lg:max-w-none">
                  <div className="w-12 h-12 rounded-full border flex items-center justify-center text-gray-700">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-heading font-medium xl:text-xl">{item.title}</h4>
                  <p>{item.desc}</p>
                  <a
                    href={item.link.href}
                    className="flex items-center gap-1 text-sm duration-150  font-medium">
                    {item.link.name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5">
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
