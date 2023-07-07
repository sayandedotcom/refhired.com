"use client";

import { useTheme } from "next-themes";

export const Testimonials = () => {
  const { theme } = useTheme();
  return (
    <section className="relative overflow-hidden py-24 lg:pb-28">
      <div
        className="absolute left-0 top-0 h-full w-24 md:w-96"
        style={{
          background: `linear-gradient(90deg, ${
            theme === "light" ? "#F3F7FA" : "#030711"
          } 10.94%, rgba(243, 247, 250, 0) 100%)`,
        }}
      />
      <div
        className="absolute right-0 top-0 h-full w-24 rotate-180 transform md:w-96"
        style={{
          background: `linear-gradient(90deg, ${
            theme === "light" ? "#F3F7FA" : "#030711"
          }  10.94%, rgba(243, 247, 250, 0) 100%)`,
        }}
      />
      <div className="container mx-auto px-4">
        <div className="relative mx-auto mb-16 max-w-xl text-center">
          <h2 className="mb-4  text-[30px] md:text-[50px]">What our users say</h2>
          <p className="text-xl tracking-tight">
            Referrer is the super simple way to get referrals over a click of a apps, downloads, or long
            meeting links enim mi turpis.
          </p>
        </div>
        <div className="mx-auto max-w-4xl">
          <div className="-m-3 mb-3 flex flex-nowrap justify-center">
            <div className="w-96 flex-shrink-0 p-3">
              <div className="rounded-xl border border-gray-200 p-6 transition duration-200 hover:border-gray-300 hover:bg-opacity-80">
                <div className="-m-2 mb-6 flex flex-wrap justify-between">
                  <div className="w-auto p-2">
                    <div className="-m-1.5 flex flex-wrap items-center">
                      <div className="overflow-hidden p-1.5">
                        <img
                          className="w-[4rem] rounded-full object-cover"
                          src="https://lh3.googleusercontent.com/a/AAcHTteBykOVLLMQsijQiZTK0Nf54AlgfTv75dAyHUAWNFZyHQ=s96-c"
                          alt=""
                        />
                      </div>
                      <div className="w-auto p-1.5">
                        <h4 className="font-semibold tracking-tight">Margie Sutton</h4>
                        <span className="text-sm tracking-tight">@andysm</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-2">
                    <svg
                      width={24}
                      height={20}
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.9465 5.42638C20.9603 5.62475 20.9603 5.82313 20.9603 6.02338C20.9603 12.123 16.3168 19.1578 7.82588 19.1578V19.154C5.31752 19.1576 2.86113 18.4393 0.75 17.0846C1.11475 17.1285 1.48125 17.1504 1.84875 17.1513C3.92771 17.1529 5.94685 16.4556 7.58175 15.1714C6.61849 15.1532 5.68501 14.8344 4.9118 14.2597C4.13859 13.6849 3.56431 12.8829 3.26925 11.9658C3.96085 12.0991 4.67382 12.0719 5.35325 11.8863C3.19975 11.4511 1.65037 9.55901 1.65037 7.3615V7.30301C2.29236 7.66058 3.01085 7.85872 3.74538 7.88076C1.71713 6.52513 1.09188 3.82675 2.31663 1.717C3.47554 3.14312 4.92149 4.3095 6.56056 5.14038C8.19963 5.97125 9.99515 6.44804 11.8305 6.53975C11.6475 5.75205 11.6745 4.93011 11.9089 4.15613C12.1432 3.38215 12.5767 2.68327 13.1659 2.12937C15.0251 0.381619 17.9493 0.471244 19.697 2.3295C20.7308 2.1254 21.7221 1.74642 22.6284 1.20887C22.2838 2.2777 21.5626 3.18496 20.5991 3.76187C21.5142 3.65406 22.4078 3.40911 23.25 3.03525C22.6305 3.963 21.8505 4.77265 20.9465 5.42638Z"
                        fill="#3EAEFF"
                      />
                    </svg>
                  </div>
                </div>
                <p>
                  <span>“</span>
                  <span className="text-[#3EAEFF]">@Basko </span>
                  <span>
                    has completely revolutionized the way I work. I used to waste so much time on manual
                    tasks, but now everything is automated and streamlined.”
                  </span>
                </p>
              </div>
            </div>
            <div className="w-96 flex-shrink-0 p-3">
              <div className="rounded-xl border border-gray-200 p-6 transition duration-200 hover:border-gray-300 hover:bg-opacity-80">
                <div className="-m-2 mb-6 flex flex-wrap justify-between">
                  <div className="w-auto p-2">
                    <div className="-m-1.5 flex flex-wrap items-center">
                      <div className="overflow-hidden p-1.5">
                        <img
                          className="w-[4rem] rounded-full object-cover"
                          src="https://lh3.googleusercontent.com/a/AAcHTteBykOVLLMQsijQiZTK0Nf54AlgfTv75dAyHUAWNFZyHQ=s96-c"
                          alt=""
                        />
                      </div>
                      <div className="w-auto p-1.5">
                        <h4 className="font-semibold tracking-tight">Luke Mccormick</h4>
                        <span className="text-sm tracking-tight">@andysm</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-2">
                    <svg
                      width={24}
                      height={20}
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.9465 5.42638C20.9603 5.62475 20.9603 5.82313 20.9603 6.02338C20.9603 12.123 16.3168 19.1578 7.82588 19.1578V19.154C5.31752 19.1576 2.86113 18.4393 0.75 17.0846C1.11475 17.1285 1.48125 17.1504 1.84875 17.1513C3.92771 17.1529 5.94685 16.4556 7.58175 15.1714C6.61849 15.1532 5.68501 14.8344 4.9118 14.2597C4.13859 13.6849 3.56431 12.8829 3.26925 11.9658C3.96085 12.0991 4.67382 12.0719 5.35325 11.8863C3.19975 11.4511 1.65037 9.55901 1.65037 7.3615V7.30301C2.29236 7.66058 3.01085 7.85872 3.74538 7.88076C1.71713 6.52513 1.09188 3.82675 2.31663 1.717C3.47554 3.14312 4.92149 4.3095 6.56056 5.14038C8.19963 5.97125 9.99515 6.44804 11.8305 6.53975C11.6475 5.75205 11.6745 4.93011 11.9089 4.15613C12.1432 3.38215 12.5767 2.68327 13.1659 2.12937C15.0251 0.381619 17.9493 0.471244 19.697 2.3295C20.7308 2.1254 21.7221 1.74642 22.6284 1.20887C22.2838 2.2777 21.5626 3.18496 20.5991 3.76187C21.5142 3.65406 22.4078 3.40911 23.25 3.03525C22.6305 3.963 21.8505 4.77265 20.9465 5.42638Z"
                        fill="#3EAEFF"
                      />
                    </svg>
                  </div>
                </div>
                <p>
                  <span>“</span>
                  <span className="text-[#3EAEFF]">@Basko </span>
                  <span>
                    has completely revolutionized the way I work. I used to waste so much time on manual
                    tasks, but now everything is automated and streamlined.”
                  </span>
                </p>
              </div>
            </div>
            <div className="w-96 flex-shrink-0 p-3">
              <div className="rounded-xl   border border-gray-200 p-6 transition duration-200 hover:border-gray-300 hover:bg-opacity-80">
                <div className="-m-2 mb-6 flex flex-wrap justify-between">
                  <div className="w-auto p-2">
                    <div className="-m-1.5 flex flex-wrap items-center">
                      <div className="overflow-hidden p-1.5">
                        <img
                          className="w-[4rem] rounded-full object-cover"
                          src="https://lh3.googleusercontent.com/a/AAcHTteBykOVLLMQsijQiZTK0Nf54AlgfTv75dAyHUAWNFZyHQ=s96-c"
                          alt=""
                        />
                      </div>
                      <div className="w-auto p-1.5">
                        <h4 className="font-semibold tracking-tight">Fernando Sims</h4>
                        <span className="text-sm tracking-tight">@andysm</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-2">
                    <svg
                      width={24}
                      height={20}
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.9465 5.42638C20.9603 5.62475 20.9603 5.82313 20.9603 6.02338C20.9603 12.123 16.3168 19.1578 7.82588 19.1578V19.154C5.31752 19.1576 2.86113 18.4393 0.75 17.0846C1.11475 17.1285 1.48125 17.1504 1.84875 17.1513C3.92771 17.1529 5.94685 16.4556 7.58175 15.1714C6.61849 15.1532 5.68501 14.8344 4.9118 14.2597C4.13859 13.6849 3.56431 12.8829 3.26925 11.9658C3.96085 12.0991 4.67382 12.0719 5.35325 11.8863C3.19975 11.4511 1.65037 9.55901 1.65037 7.3615V7.30301C2.29236 7.66058 3.01085 7.85872 3.74538 7.88076C1.71713 6.52513 1.09188 3.82675 2.31663 1.717C3.47554 3.14312 4.92149 4.3095 6.56056 5.14038C8.19963 5.97125 9.99515 6.44804 11.8305 6.53975C11.6475 5.75205 11.6745 4.93011 11.9089 4.15613C12.1432 3.38215 12.5767 2.68327 13.1659 2.12937C15.0251 0.381619 17.9493 0.471244 19.697 2.3295C20.7308 2.1254 21.7221 1.74642 22.6284 1.20887C22.2838 2.2777 21.5626 3.18496 20.5991 3.76187C21.5142 3.65406 22.4078 3.40911 23.25 3.03525C22.6305 3.963 21.8505 4.77265 20.9465 5.42638Z"
                        fill="#3EAEFF"
                      />
                    </svg>
                  </div>
                </div>
                <p>
                  <span>“ </span>
                  <span className="text-[#3EAEFF]">@Basko </span>
                  <span>
                    has completely revolutionized the way I work. I used to waste so much time on manual
                    tasks, but now everything is automated and streamlined. ”
                  </span>
                </p>
              </div>
            </div>
            <div className="w-96 flex-shrink-0 p-3">
              <div className="rounded-xl border border-gray-200 p-6 transition duration-200 hover:border-gray-300 hover:bg-opacity-80">
                <div className="-m-2 mb-6 flex flex-wrap justify-between">
                  <div className="w-auto p-2">
                    <div className="-m-1.5 flex flex-wrap items-center">
                      <div className="overflow-hidden p-1.5">
                        <img
                          className="w-[4rem] rounded-full object-cover"
                          src="https://lh3.googleusercontent.com/a/AAcHTteBykOVLLMQsijQiZTK0Nf54AlgfTv75dAyHUAWNFZyHQ=s96-c"
                          alt=""
                        />
                      </div>
                      <div className="w-auto p-1.5">
                        <h4 className="font-semibold tracking-tight">Fernando Sims</h4>
                        <span className="text-sm tracking-tight">@andysm</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-2">
                    <svg
                      width={24}
                      height={20}
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.9465 5.42638C20.9603 5.62475 20.9603 5.82313 20.9603 6.02338C20.9603 12.123 16.3168 19.1578 7.82588 19.1578V19.154C5.31752 19.1576 2.86113 18.4393 0.75 17.0846C1.11475 17.1285 1.48125 17.1504 1.84875 17.1513C3.92771 17.1529 5.94685 16.4556 7.58175 15.1714C6.61849 15.1532 5.68501 14.8344 4.9118 14.2597C4.13859 13.6849 3.56431 12.8829 3.26925 11.9658C3.96085 12.0991 4.67382 12.0719 5.35325 11.8863C3.19975 11.4511 1.65037 9.55901 1.65037 7.3615V7.30301C2.29236 7.66058 3.01085 7.85872 3.74538 7.88076C1.71713 6.52513 1.09188 3.82675 2.31663 1.717C3.47554 3.14312 4.92149 4.3095 6.56056 5.14038C8.19963 5.97125 9.99515 6.44804 11.8305 6.53975C11.6475 5.75205 11.6745 4.93011 11.9089 4.15613C12.1432 3.38215 12.5767 2.68327 13.1659 2.12937C15.0251 0.381619 17.9493 0.471244 19.697 2.3295C20.7308 2.1254 21.7221 1.74642 22.6284 1.20887C22.2838 2.2777 21.5626 3.18496 20.5991 3.76187C21.5142 3.65406 22.4078 3.40911 23.25 3.03525C22.6305 3.963 21.8505 4.77265 20.9465 5.42638Z"
                        fill="#3EAEFF"
                      />
                    </svg>
                  </div>
                </div>
                <p>
                  <span>“ </span>
                  <span className="text-[#3EAEFF]">@Basko </span>
                  <span>
                    has completely revolutionized the way I work. I used to waste so much time on manual
                    tasks, but now everything is automated and streamlined. ”
                  </span>
                </p>
              </div>
            </div>
            <div className="w-96 flex-shrink-0 p-3">
              <div className="rounded-xl   border border-gray-200 p-6 transition duration-200 hover:border-gray-300 hover:bg-opacity-80">
                <div className="-m-2 mb-6 flex flex-wrap justify-between">
                  <div className="w-auto p-2">
                    <div className="-m-1.5 flex flex-wrap items-center">
                      <div className="overflow-hidden p-1.5">
                        <img
                          className="w-[4rem] rounded-full object-cover"
                          src="https://lh3.googleusercontent.com/a/AAcHTteBykOVLLMQsijQiZTK0Nf54AlgfTv75dAyHUAWNFZyHQ=s96-c"
                          alt=""
                        />
                      </div>
                      <div className="w-auto p-1.5">
                        <h4 className="font-semibold tracking-tight">Luke Mccormick</h4>
                        <span className="text-sm tracking-tight">@andysm</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-2">
                    <svg
                      width={24}
                      height={20}
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.9465 5.42638C20.9603 5.62475 20.9603 5.82313 20.9603 6.02338C20.9603 12.123 16.3168 19.1578 7.82588 19.1578V19.154C5.31752 19.1576 2.86113 18.4393 0.75 17.0846C1.11475 17.1285 1.48125 17.1504 1.84875 17.1513C3.92771 17.1529 5.94685 16.4556 7.58175 15.1714C6.61849 15.1532 5.68501 14.8344 4.9118 14.2597C4.13859 13.6849 3.56431 12.8829 3.26925 11.9658C3.96085 12.0991 4.67382 12.0719 5.35325 11.8863C3.19975 11.4511 1.65037 9.55901 1.65037 7.3615V7.30301C2.29236 7.66058 3.01085 7.85872 3.74538 7.88076C1.71713 6.52513 1.09188 3.82675 2.31663 1.717C3.47554 3.14312 4.92149 4.3095 6.56056 5.14038C8.19963 5.97125 9.99515 6.44804 11.8305 6.53975C11.6475 5.75205 11.6745 4.93011 11.9089 4.15613C12.1432 3.38215 12.5767 2.68327 13.1659 2.12937C15.0251 0.381619 17.9493 0.471244 19.697 2.3295C20.7308 2.1254 21.7221 1.74642 22.6284 1.20887C22.2838 2.2777 21.5626 3.18496 20.5991 3.76187C21.5142 3.65406 22.4078 3.40911 23.25 3.03525C22.6305 3.963 21.8505 4.77265 20.9465 5.42638Z"
                        fill="#3EAEFF"
                      />
                    </svg>
                  </div>
                </div>
                <p>
                  <span>“</span>
                  <span className="text-[#3EAEFF]">@Basko </span>
                  <span>
                    has completely revolutionized the way I work. I used to waste so much time on manual
                    tasks, but now everything is automated and streamlined.”
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="-m-3 flex flex-nowrap justify-center">
            <div className="w-96 flex-shrink-0 p-3">
              <div className="rounded-xl   border border-gray-200 p-6 transition duration-200 hover:border-gray-300 hover:bg-opacity-80">
                <div className="-m-2 mb-6 flex flex-wrap justify-between">
                  <div className="w-auto p-2">
                    <div className="-m-1.5 flex flex-wrap items-center">
                      <div className="overflow-hidden p-1.5">
                        <img
                          className="w-[4rem] rounded-full object-cover"
                          src="https://lh3.googleusercontent.com/a/AAcHTteBykOVLLMQsijQiZTK0Nf54AlgfTv75dAyHUAWNFZyHQ=s96-c"
                          alt=""
                        />
                      </div>
                      <div className="w-auto p-1.5">
                        <h4 className="font-semibold tracking-tight">Luke Mccormick</h4>
                        <span className="text-sm tracking-tight">@andysm</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-2">
                    <svg
                      width={24}
                      height={20}
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.9465 5.42638C20.9603 5.62475 20.9603 5.82313 20.9603 6.02338C20.9603 12.123 16.3168 19.1578 7.82588 19.1578V19.154C5.31752 19.1576 2.86113 18.4393 0.75 17.0846C1.11475 17.1285 1.48125 17.1504 1.84875 17.1513C3.92771 17.1529 5.94685 16.4556 7.58175 15.1714C6.61849 15.1532 5.68501 14.8344 4.9118 14.2597C4.13859 13.6849 3.56431 12.8829 3.26925 11.9658C3.96085 12.0991 4.67382 12.0719 5.35325 11.8863C3.19975 11.4511 1.65037 9.55901 1.65037 7.3615V7.30301C2.29236 7.66058 3.01085 7.85872 3.74538 7.88076C1.71713 6.52513 1.09188 3.82675 2.31663 1.717C3.47554 3.14312 4.92149 4.3095 6.56056 5.14038C8.19963 5.97125 9.99515 6.44804 11.8305 6.53975C11.6475 5.75205 11.6745 4.93011 11.9089 4.15613C12.1432 3.38215 12.5767 2.68327 13.1659 2.12937C15.0251 0.381619 17.9493 0.471244 19.697 2.3295C20.7308 2.1254 21.7221 1.74642 22.6284 1.20887C22.2838 2.2777 21.5626 3.18496 20.5991 3.76187C21.5142 3.65406 22.4078 3.40911 23.25 3.03525C22.6305 3.963 21.8505 4.77265 20.9465 5.42638Z"
                        fill="#3EAEFF"
                      />
                    </svg>
                  </div>
                </div>
                <p>
                  <span>“</span>
                  <span className="text-[#3EAEFF]">@Basko </span>
                  <span>
                    has completely revolutionized the way I work. I used to waste so much time on manual
                    tasks, but now everything is automated and streamlined.”
                  </span>
                </p>
              </div>
            </div>
            <div className="w-96 flex-shrink-0 p-3">
              <div className="rounded-xl   border border-gray-200 p-6 transition duration-200 hover:border-gray-300 hover:bg-opacity-80">
                <div className="-m-2 mb-6 flex flex-wrap justify-between">
                  <div className="w-auto p-2">
                    <div className="-m-1.5 flex flex-wrap items-center">
                      <div className="overflow-hidden p-1.5">
                        <img
                          className="w-[4rem] rounded-full object-cover"
                          src="https://lh3.googleusercontent.com/a/AAcHTteBykOVLLMQsijQiZTK0Nf54AlgfTv75dAyHUAWNFZyHQ=s96-c"
                          alt=""
                        />
                      </div>
                      <div className="w-auto p-1.5">
                        <h4 className="font-semibold tracking-tight">Luke Mccormick</h4>
                        <span className="text-sm tracking-tight">@andysm</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-2">
                    <svg
                      width={24}
                      height={20}
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.9465 5.42638C20.9603 5.62475 20.9603 5.82313 20.9603 6.02338C20.9603 12.123 16.3168 19.1578 7.82588 19.1578V19.154C5.31752 19.1576 2.86113 18.4393 0.75 17.0846C1.11475 17.1285 1.48125 17.1504 1.84875 17.1513C3.92771 17.1529 5.94685 16.4556 7.58175 15.1714C6.61849 15.1532 5.68501 14.8344 4.9118 14.2597C4.13859 13.6849 3.56431 12.8829 3.26925 11.9658C3.96085 12.0991 4.67382 12.0719 5.35325 11.8863C3.19975 11.4511 1.65037 9.55901 1.65037 7.3615V7.30301C2.29236 7.66058 3.01085 7.85872 3.74538 7.88076C1.71713 6.52513 1.09188 3.82675 2.31663 1.717C3.47554 3.14312 4.92149 4.3095 6.56056 5.14038C8.19963 5.97125 9.99515 6.44804 11.8305 6.53975C11.6475 5.75205 11.6745 4.93011 11.9089 4.15613C12.1432 3.38215 12.5767 2.68327 13.1659 2.12937C15.0251 0.381619 17.9493 0.471244 19.697 2.3295C20.7308 2.1254 21.7221 1.74642 22.6284 1.20887C22.2838 2.2777 21.5626 3.18496 20.5991 3.76187C21.5142 3.65406 22.4078 3.40911 23.25 3.03525C22.6305 3.963 21.8505 4.77265 20.9465 5.42638Z"
                        fill="#3EAEFF"
                      />
                    </svg>
                  </div>
                </div>
                <p>
                  <span>“</span>
                  <span className="text-[#3EAEFF]">@Basko </span>
                  <span>
                    has completely revolutionized the way I work. I used to waste so much time on manual
                    tasks, but now everything is automated and streamlined.”
                  </span>
                </p>
              </div>
            </div>
            <div className="w-96 flex-shrink-0 p-3">
              <div className="rounded-xl   border border-gray-200 p-6 transition duration-200 hover:border-gray-300 hover:bg-opacity-80">
                <div className="-m-2 mb-6 flex flex-wrap justify-between">
                  <div className="w-auto p-2">
                    <div className="-m-1.5 flex flex-wrap items-center">
                      <div className="overflow-hidden p-1.5">
                        <img
                          className="w-[4rem] rounded-full object-cover"
                          src="https://lh3.googleusercontent.com/a/AAcHTteBykOVLLMQsijQiZTK0Nf54AlgfTv75dAyHUAWNFZyHQ=s96-c"
                          alt=""
                        />
                      </div>
                      <div className="w-auto p-1.5">
                        <h4 className="font-semibold tracking-tight">Luke Mccormick</h4>
                        <span className="text-sm tracking-tight">@andysm</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-2">
                    <svg
                      width={24}
                      height={20}
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.9465 5.42638C20.9603 5.62475 20.9603 5.82313 20.9603 6.02338C20.9603 12.123 16.3168 19.1578 7.82588 19.1578V19.154C5.31752 19.1576 2.86113 18.4393 0.75 17.0846C1.11475 17.1285 1.48125 17.1504 1.84875 17.1513C3.92771 17.1529 5.94685 16.4556 7.58175 15.1714C6.61849 15.1532 5.68501 14.8344 4.9118 14.2597C4.13859 13.6849 3.56431 12.8829 3.26925 11.9658C3.96085 12.0991 4.67382 12.0719 5.35325 11.8863C3.19975 11.4511 1.65037 9.55901 1.65037 7.3615V7.30301C2.29236 7.66058 3.01085 7.85872 3.74538 7.88076C1.71713 6.52513 1.09188 3.82675 2.31663 1.717C3.47554 3.14312 4.92149 4.3095 6.56056 5.14038C8.19963 5.97125 9.99515 6.44804 11.8305 6.53975C11.6475 5.75205 11.6745 4.93011 11.9089 4.15613C12.1432 3.38215 12.5767 2.68327 13.1659 2.12937C15.0251 0.381619 17.9493 0.471244 19.697 2.3295C20.7308 2.1254 21.7221 1.74642 22.6284 1.20887C22.2838 2.2777 21.5626 3.18496 20.5991 3.76187C21.5142 3.65406 22.4078 3.40911 23.25 3.03525C22.6305 3.963 21.8505 4.77265 20.9465 5.42638Z"
                        fill="#3EAEFF"
                      />
                    </svg>
                  </div>
                </div>
                <p>
                  <span>“</span>
                  <span className="text-[#3EAEFF]">@Basko </span>
                  <span>
                    has completely revolutionized the way I work. I used to waste so much time on manual
                    tasks, but now everything is automated and streamlined.”
                  </span>
                </p>
              </div>
            </div>
            <div className="w-96 flex-shrink-0 p-3">
              <div className="rounded-xl   border border-gray-200 p-6 transition duration-200 hover:border-gray-300 hover:bg-opacity-80">
                <div className="-m-2 mb-6 flex flex-wrap justify-between">
                  <div className="w-auto p-2">
                    <div className="-m-1.5 flex flex-wrap items-center">
                      <div className="overflow-hidden p-1.5">
                        <img
                          className="w-[4rem] rounded-full object-cover"
                          src="https://lh3.googleusercontent.com/a/AAcHTteBykOVLLMQsijQiZTK0Nf54AlgfTv75dAyHUAWNFZyHQ=s96-c"
                          alt=""
                        />
                      </div>
                      <div className="w-auto p-1.5">
                        <h4 className="font-semibold tracking-tight">Luke Mccormick</h4>
                        <span className="text-sm tracking-tight">@andysm</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-2">
                    <svg
                      width={24}
                      height={20}
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.9465 5.42638C20.9603 5.62475 20.9603 5.82313 20.9603 6.02338C20.9603 12.123 16.3168 19.1578 7.82588 19.1578V19.154C5.31752 19.1576 2.86113 18.4393 0.75 17.0846C1.11475 17.1285 1.48125 17.1504 1.84875 17.1513C3.92771 17.1529 5.94685 16.4556 7.58175 15.1714C6.61849 15.1532 5.68501 14.8344 4.9118 14.2597C4.13859 13.6849 3.56431 12.8829 3.26925 11.9658C3.96085 12.0991 4.67382 12.0719 5.35325 11.8863C3.19975 11.4511 1.65037 9.55901 1.65037 7.3615V7.30301C2.29236 7.66058 3.01085 7.85872 3.74538 7.88076C1.71713 6.52513 1.09188 3.82675 2.31663 1.717C3.47554 3.14312 4.92149 4.3095 6.56056 5.14038C8.19963 5.97125 9.99515 6.44804 11.8305 6.53975C11.6475 5.75205 11.6745 4.93011 11.9089 4.15613C12.1432 3.38215 12.5767 2.68327 13.1659 2.12937C15.0251 0.381619 17.9493 0.471244 19.697 2.3295C20.7308 2.1254 21.7221 1.74642 22.6284 1.20887C22.2838 2.2777 21.5626 3.18496 20.5991 3.76187C21.5142 3.65406 22.4078 3.40911 23.25 3.03525C22.6305 3.963 21.8505 4.77265 20.9465 5.42638Z"
                        fill="#3EAEFF"
                      />
                    </svg>
                  </div>
                </div>
                <p>
                  <span>“</span>
                  <span className="text-[#3EAEFF]">@Basko </span>
                  <span>
                    has completely revolutionized the way I work. I used to waste so much time on manual
                    tasks, but now everything is automated and streamlined.”
                  </span>
                </p>
              </div>
            </div>
            <div className="w-96 flex-shrink-0 p-3">
              <div className="rounded-xl   border border-gray-200 p-6 transition duration-200 hover:border-gray-300 hover:bg-opacity-80">
                <div className="-m-2 mb-6 flex flex-wrap justify-between">
                  <div className="w-auto p-2">
                    <div className="-m-1.5 flex flex-wrap items-center">
                      <div className="overflow-hidden p-1.5">
                        <img
                          className="w-[4rem] rounded-full object-cover"
                          src="https://lh3.googleusercontent.com/a/AAcHTteBykOVLLMQsijQiZTK0Nf54AlgfTv75dAyHUAWNFZyHQ=s96-c"
                          alt=""
                        />
                      </div>
                      <div className="w-auto p-1.5">
                        <h4 className="font-semibold tracking-tight">Luke Mccormick</h4>
                        <span className="text-sm tracking-tight">@andysm</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-2">
                    <svg
                      width={24}
                      height={20}
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.9465 5.42638C20.9603 5.62475 20.9603 5.82313 20.9603 6.02338C20.9603 12.123 16.3168 19.1578 7.82588 19.1578V19.154C5.31752 19.1576 2.86113 18.4393 0.75 17.0846C1.11475 17.1285 1.48125 17.1504 1.84875 17.1513C3.92771 17.1529 5.94685 16.4556 7.58175 15.1714C6.61849 15.1532 5.68501 14.8344 4.9118 14.2597C4.13859 13.6849 3.56431 12.8829 3.26925 11.9658C3.96085 12.0991 4.67382 12.0719 5.35325 11.8863C3.19975 11.4511 1.65037 9.55901 1.65037 7.3615V7.30301C2.29236 7.66058 3.01085 7.85872 3.74538 7.88076C1.71713 6.52513 1.09188 3.82675 2.31663 1.717C3.47554 3.14312 4.92149 4.3095 6.56056 5.14038C8.19963 5.97125 9.99515 6.44804 11.8305 6.53975C11.6475 5.75205 11.6745 4.93011 11.9089 4.15613C12.1432 3.38215 12.5767 2.68327 13.1659 2.12937C15.0251 0.381619 17.9493 0.471244 19.697 2.3295C20.7308 2.1254 21.7221 1.74642 22.6284 1.20887C22.2838 2.2777 21.5626 3.18496 20.5991 3.76187C21.5142 3.65406 22.4078 3.40911 23.25 3.03525C22.6305 3.963 21.8505 4.77265 20.9465 5.42638Z"
                        fill="#3EAEFF"
                      />
                    </svg>
                  </div>
                </div>
                <p>
                  <span>“</span>
                  <span className="text-[#3EAEFF]">@Basko </span>
                  <span>
                    has completely revolutionized the way I work. I used to waste so much time on manual
                    tasks, but now everything is automated and streamlined.”
                  </span>
                </p>
              </div>
            </div>
            <div className="w-96 flex-shrink-0 p-3">
              <div className="rounded-xl   border border-gray-200 p-6 transition duration-200 hover:border-gray-300 hover:bg-opacity-80">
                <div className="-m-2 mb-6 flex flex-wrap justify-between">
                  <div className="w-auto p-2">
                    <div className="-m-1.5 flex flex-wrap items-center">
                      <div className="overflow-hidden p-1.5">
                        <img
                          className="w-[4rem] rounded-full object-cover"
                          src="https://lh3.googleusercontent.com/a/AAcHTteBykOVLLMQsijQiZTK0Nf54AlgfTv75dAyHUAWNFZyHQ=s96-c"
                          alt=""
                        />
                      </div>
                      <div className="w-auto p-1.5">
                        <h4 className="font-semibold tracking-tight">Luke Mccormick</h4>
                        <span className="text-sm tracking-tight">@andysm</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto p-2">
                    <svg
                      width={24}
                      height={20}
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.9465 5.42638C20.9603 5.62475 20.9603 5.82313 20.9603 6.02338C20.9603 12.123 16.3168 19.1578 7.82588 19.1578V19.154C5.31752 19.1576 2.86113 18.4393 0.75 17.0846C1.11475 17.1285 1.48125 17.1504 1.84875 17.1513C3.92771 17.1529 5.94685 16.4556 7.58175 15.1714C6.61849 15.1532 5.68501 14.8344 4.9118 14.2597C4.13859 13.6849 3.56431 12.8829 3.26925 11.9658C3.96085 12.0991 4.67382 12.0719 5.35325 11.8863C3.19975 11.4511 1.65037 9.55901 1.65037 7.3615V7.30301C2.29236 7.66058 3.01085 7.85872 3.74538 7.88076C1.71713 6.52513 1.09188 3.82675 2.31663 1.717C3.47554 3.14312 4.92149 4.3095 6.56056 5.14038C8.19963 5.97125 9.99515 6.44804 11.8305 6.53975C11.6475 5.75205 11.6745 4.93011 11.9089 4.15613C12.1432 3.38215 12.5767 2.68327 13.1659 2.12937C15.0251 0.381619 17.9493 0.471244 19.697 2.3295C20.7308 2.1254 21.7221 1.74642 22.6284 1.20887C22.2838 2.2777 21.5626 3.18496 20.5991 3.76187C21.5142 3.65406 22.4078 3.40911 23.25 3.03525C22.6305 3.963 21.8505 4.77265 20.9465 5.42638Z"
                        fill="#3EAEFF"
                      />
                    </svg>
                  </div>
                </div>
                <p>
                  <span>“</span>
                  <span className="text-[#3EAEFF]">@Basko </span>
                  <span>
                    has completely revolutionized the way I work. I used to waste so much time on manual
                    tasks, but now everything is automated and streamlined.”
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
