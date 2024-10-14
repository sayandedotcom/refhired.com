"use client";

import { useState } from "react";

import { useSearchParams } from "next/navigation";

import { useLoading } from "@/hooks";
import { Link } from "@/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { PartyPopper } from "lucide-react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import * as z from "zod";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Separator,
  TypographyH3,
  TypographySmall,
} from "@referrer/ui";

import { Icons } from "@/components/icons/icons";
import { Required } from "@/components/ui";

import { signUpValidator } from "@/lib/validators";

import { siteConfig } from "@/config";

import { useStore } from "@/store/store";

const SignUp = () => {
  const claimUserName = useStore((state) => state.userName);
  const { loadingValue, setLoadingValue } = useLoading();
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  let callbackUrl = searchParams.get("callbackUrl") || "/";
  const form = useForm<z.infer<typeof signUpValidator>>({
    resolver: zodResolver(signUpValidator),
    defaultValues: {
      username: claimUserName ?? "",
      name: "",
      email: "",
      // password: "",
      // confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signUpValidator>) {
    try {
      setLoadingValue("signUp");
      signIn("email", {
        email: values.email,
        redirect: true,
        callbackUrl: "/auth/verify-request",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoadingValue("");
    }
    // try {
    //   const res = await fetch("http://localhost:3000/api/auth/sign-up", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       name: values.name,
    //       userName: values.username,
    //       email: values.email,
    //       password: values.password,
    //     }),
    //     headers: { "Content-Type": "application/json" },
    //   });
    //   if (res.ok) {
    //     sonerToast({
    //       severity: "success",
    //       title: "Sucessfully...",
    //       message: "Log In with the details to continue !!!",
    //     });
    //     signIn();
    //   }
    // } catch (err) {
    //   console.log(err);
    //   setError(err.message);
    // } finally {
    //   setLoadingValue("");
    // }
  }

  const signInProviders = (auth: "google" | "github") => {
    setLoadingValue(auth);
    signIn(auth, { redirect: true, callbackUrl: "/" });
    setLoadingValue("");
  };

  return (
    <div className="bg-muted flex min-h-screen flex-col items-center justify-around gap-5 py-3 md:flex-row md:px-10 lg:gap-16">
      <section className="hidden md:block lg:flex lg:flex-col lg:gap-3">
        <Link href="/" className="font-heading flex items-center gap-3">
          <Icons.largeLogo className="" />
          <h1 className="mt-1">Refhired.com</h1>
        </Link>
        <h3 className="font-heading">Join the largest referral community !</h3>
      </section>
      <div className="bg-background border-foreground flex w-11/12 flex-col items-center justify-center gap-6 rounded-md border-[0.2px] py-12 lg:w-[450px]">
        <div className="flex w-11/12 flex-col gap-4 py-1 lg:w-10/12">
          <TypographyH3>Welcome to the Refhired.com</TypographyH3>
          <p className="text-muted-foreground text-sm font-semibold">
            Create your account and start using Refhired.com for free, with unlimited event types, bookings
            and all the features you need. Upgrade to a premium plan if you&prime;re looking for more
            features.
          </p>
        </div>
        <Separator />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-11/12 flex-col space-y-2 lg:w-10/12">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Username <Required />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="johndoe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {error && <div className="text-sm text-red-500">{error}</div>}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Full Name <Required />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email Address <Required />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Password <Required />
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="tracking-[0.5rem]"
                      type="password"
                      placeholder="•••••••••••"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Confirm Password <Required />
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="tracking-[0.5rem]"
                      type="password"
                      placeholder="•••••••••••"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
            <Button
              disabled={siteConfig.waitlist}
              type="submit"
              className="flex items-center justify-center"
              // onClick={() => signIn("credentials")}
              isLoading={loadingValue === "signUp"}>
              Sign Up for free <PartyPopper className="ml-4" />
            </Button>
          </form>
        </Form>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="text-muted-foreground px-2">Or continue with</span>
        </div>
        <div className="mx-auto flex w-full justify-center gap-5 lg:w-11/12">
          <Button
            className="font-heading flex w-11/12 items-center justify-center gap-5 text-xl"
            disabled={loadingValue === "google" || siteConfig.waitlist}
            onClick={() => signInProviders("google")}
            variant="secondary"
            size="lg">
            {loadingValue === "google" ? (
              <Icons.spinner className="h-6 w-6 animate-spin" />
            ) : (
              // <Icons.google className="h-5 w-4" />
              <FcGoogle className="h-6 w-6" />
            )}{" "}
            Google
          </Button>
        </div>
        <Separator />
        <div className="flex items-center justify-center gap-2">
          <TypographySmall>Already have an account ?</TypographySmall>
          <Link className="text-muted-foreground" href="/auth/login">
            <TypographySmall> Log In</TypographySmall>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
