"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { PartyPopper } from "lucide-react";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "usehooks-ts";
import * as z from "zod";

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@referrer/ui";

import { Notice } from "@/components/layout";
import { Required } from "@/components/ui";

const joinWaitlistSchema = z.object({
  email: z.string().email({ message: "Invalid email address !" }).nonempty("Required"),
});

export function JoinWaitlist() {
  const [waitlisted, setWaitlisted] = useLocalStorage("waitlist", "");

  const form = useForm<z.infer<typeof joinWaitlistSchema>>({
    resolver: zodResolver(joinWaitlistSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof joinWaitlistSchema>) => {
    setWaitlisted(values.email);
  };

  return (
    <>
      {waitlisted ? (
        <>
          <Fireworks autorun={{ speed: 3, duration: 3000 }} />
          <Notice href="">
            You've successfully joined our waitlist using the email address {waitlisted}
          </Notice>
        </>
      ) : (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-3">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email Address <Required />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" type="text" {...field} className="md:w-96" />
                  </FormControl>
                  <FormMessage />
                  <FormDescription> Enter your email address !</FormDescription>
                </FormItem>
              )}
            />
            {/* {waitlisted && <Fireworks autorun={{ speed: 3, duration: 3000 }} />} */}
            <Button
              type="submit"
              // onClick={() => setIsExploding(!isExploding)}
              className="flex items-center justify-center"
              // isLoading={loadingValue === "logIn"}
            >
              Join Waitlist <PartyPopper className="ml-4" />
            </Button>
          </form>
        </Form>
      )}
    </>
  );
}
