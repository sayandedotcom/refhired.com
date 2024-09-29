"use client";

import { useRouter } from "@/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { AnimatedGradientHeading } from "@/components/ui";

import { request } from "@/lib/axios";
import { userNameValidator } from "@/lib/validators";

import { useStore } from "@/store/store";

const checkUserName = ({ userName }) => {
  return request.get("/claimusername", {
    params: {
      userName,
    },
  });
};

export const Username = (prop: any) => {
  const { session } = prop;
  const router = useRouter();
  const setUserName = useStore((state) => state.claimUserName);
  const form = useForm<z.infer<typeof userNameValidator>>({
    resolver: zodResolver(userNameValidator),
    defaultValues: {
      userName: "",
    },
  });
  const { register, handleSubmit, formState, setError } = form;
  const { errors } = formState;

  const { mutate, isPending } = useMutation({
    mutationKey: ["claimusername"],
    mutationFn: checkUserName,
    onSuccess(data, variables) {
      setUserName(variables.userName);
      router.push("/auth/sign-up");
    },
    onError(error) {
      setError("userName", {
        ///@ts-expect-error
        message: error?.response.data.message,
      });
    },
  });

  const onSubmit = (data: z.infer<typeof userNameValidator>) => {
    // errors.userName = {
    //   message: "Username already exists",
    // };
    // setError("userName", {
    //   message: "Username already exists",
    // });
    mutate({ userName: data.userName });
  };

  return (
    <div className="font-heading flex flex-col items-center justify-center gap-4 py-16">
      {session ? (
        <></>
      ) : (
        <>
          <AnimatedGradientHeading className="px-2 text-center text-[30px] dark:bg-gradient-to-r dark:from-[#abbaab] dark:to-[#ffffff] dark:bg-clip-text dark:text-transparent md:text-[50px]">
            Claim your{" "}
            {/* <span className="bg-gradient-to-r from-[#ff4b1f] to-[#ff9068] bg-clip-text px-2 text-center text-[30px] text-transparent md:text-[50px]"> */}
            username {/* </span>{" "} */}
            now !
          </AnimatedGradientHeading>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex w-11/12 flex-col justify-center gap-4 normal-case lg:h-full lg:w-auto lg:flex-row lg:gap-6">
            <div className="btn-97 relative flex w-full lg:w-[1000px]">
              <input
                {...register("userName")}
                placeholder="johndoe"
                className="ml-[100px] h-full w-10/12 bg-inherit text-[20px] lowercase outline-none md:ml-[170px] md:text-[28px]"
              />
              <div className="absolute bottom-1 left-1 top-0 bg-slate-100">
                <p className="font-heading mt-4 px-1 text-[20px] tracking-wide md:ml-2 md:text-[28px]">
                  refhired.com/
                </p>
              </div>
            </div>
            <button type="submit" className="btn-97 uppercase">
              {isPending ? <Loader className="w-10 animate-spin" /> : "Claim Username"}
            </button>
          </form>
          <p className="text-[#FF0000] md:text-xl">{errors.userName?.message}</p>
        </>
      )}
    </div>
  );
};
