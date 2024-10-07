"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { Loader2, PartyPopper } from "lucide-react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "usehooks-ts";
import * as z from "zod";

import { Form, FormControl, FormField, FormItem, FormMessage, Input } from "@referrer/ui";

import { sonerToast } from "@/components/ui";

import { request } from "@/lib/axios";

import { WordRotateComponentOne } from "./word-rotate-component-one";

const joinWaitlistSchema = z.object({
  email: z
    .string()
    .nonempty("Please enter an email address 😐")
    .email({ message: "Invalid email address ! 🤔" }),
});

const sendEmail = ({ email }) => {
  return request.post("/waitlist", { email });
};

export function JoinWaitlist() {
  const [waitlisted, setWaitlisted] = useLocalStorage("waitlist", "");

  const form = useForm<z.infer<typeof joinWaitlistSchema>>({
    resolver: zodResolver(joinWaitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  const { handleSubmit, formState, setError } = form;
  const { errors } = formState;

  const { mutate, isPending } = useMutation({
    mutationKey: ["waitlist"],
    mutationFn: sendEmail,
    onSuccess(data, variables) {
      setWaitlisted(variables.email);
      sonerToast({
        severity: "success",
        title: "Sucess !",
        message: data.data.message,
      });
    },
    onError(error) {
      ///@ts-expect-error
      setError("email", { message: error?.response.data.message });
      sonerToast({
        severity: "error",
        title: "Error !",
        ///@ts-expect-error
        message: error?.response.data.message,
      });
    },
  });

  const onSubmit = (values: z.infer<typeof joinWaitlistSchema>) => {
    mutate({ email: values.email });
  };

  return (
    <>
      {waitlisted ? (
        <>
          <Fireworks autorun={{ speed: 3, duration: 3000 }} />
          <p className="bg-foreground relative z-10 text-center font-sans font-bold text-transparent dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-600 dark:bg-clip-text">
            You've successfully joined our waitlist using the email address {waitlisted}
          </p>
        </>
      ) : (
        //  h-[20rem]
        <div className="relative flex w-full flex-col items-center justify-center rounded-md antialiased">
          <div className="mx-auto flex max-w-3xl flex-col gap-4 p-4">
            <h1 className="bg-foreground relative z-10 bg-clip-text text-center text-lg font-bold text-transparent dark:bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-600 md:text-7xl">
              <WordRotateComponentOne />
            </h1>
            {/* <WordRotateComponentOne /> */}
            <p className="font-heading relative mx-auto my-2 max-w-5xl text-center text-base font-medium">
              Join our waitlist and be the first to know when we launch our product! We'll notify you via
              email as soon as it's available. Plus, we may offer special access to some of our waitlisted
              users!
            </p>
            <Form {...form}>
              <form onSubmit={handleSubmit(onSubmit)} className="mt-3 flex items-start justify-center gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Enter your email address......"
                          type="text"
                          {...field}
                          className="bg-muted md:w-96"
                        />
                      </FormControl>
                      <FormMessage className="justify-center text-[#ff3535bb]">
                        {errors?.email?.message}
                      </FormMessage>
                    </FormItem>
                  )}
                />
                <button
                  type="submit"
                  className="join-waitlist-button h-10 px-4 py-2 transition active:scale-95">
                  {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                  {isPending ? "Please Wait" : "Join Waitlist"}{" "}
                  {isPending ? <></> : <PartyPopper className="ml-4" />}
                </button>
              </form>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}
