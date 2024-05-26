"use client";

import { useRouter } from "@/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { userNameValidator } from "@/lib/validators";

import { useStore } from "@/store/store";

export const Username = (prop: any) => {
  const router = useRouter();
  const { session } = prop;
  const setUserName = useStore((state) => state.claimUserName);
  const form = useForm<z.infer<typeof userNameValidator>>({
    resolver: zodResolver(userNameValidator),
    defaultValues: {
      userName: "",
    },
  });
  const { register, handleSubmit, formState, setError } = form;
  const { errors } = formState;

  const onSubmit = async (data: z.infer<typeof userNameValidator>) => {
    // errors.userName = {
    //   message: "Username already exists",
    // };
    // setError("userName", {
    //   message: "Username already exists",
    // });
    // return;
    setUserName(data.userName);
    router.push("/auth/sign-up");
  };

  return (
    <div className="font-heading flex flex-col items-center justify-center gap-4 py-16">
      {session ? (
        <h1 className="text-center text-[30px] md:text-[50px]">You are already logged in !</h1>
      ) : (
        <>
          <h2 className="px-2 text-center text-[30px] dark:bg-gradient-to-r dark:from-[#abbaab] dark:to-[#ffffff] dark:bg-clip-text dark:text-transparent md:text-[50px]">
            Claim your{" "}
            {/* <span className="bg-gradient-to-r from-[#ff4b1f] to-[#ff9068] bg-clip-text px-2 text-center text-[30px] text-transparent md:text-[50px]"> */}
            username
            {/* </span>{" "} */}
            now !
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-11/12 flex-col justify-center gap-4 normal-case lg:h-full lg:w-auto lg:flex-row lg:gap-6">
            <div className="btn-97 relative flex w-full lg:w-[1000px]">
              <input
                {...register("userName")}
                placeholder="@johndoe"
                className="ml-[100px] h-full w-10/12 bg-inherit text-[20px] lowercase outline-none md:ml-[170px] md:text-[28px]"
              />
              <div className="absolute bottom-1 left-1 top-0 bg-slate-100">
                <p className="font-heading mt-4 px-1 text-[20px] tracking-wide md:ml-2 md:text-[28px]">
                  refhired.com/
                </p>
              </div>
            </div>
            <button type="submit" className="btn-97 uppercase">
              Claim Username
            </button>
          </form>
          <p className="text-[#FF0000] md:text-xl">{errors.userName?.message}</p>
        </>
      )}
    </div>
  );
};
