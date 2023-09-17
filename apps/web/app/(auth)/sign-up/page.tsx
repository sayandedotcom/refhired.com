"use client";

import { useState } from "react";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { useLoading } from "@/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
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
import { Required, sonerToast } from "@/components/ui";

import { useStore } from "@/store/store";

const signUpSchema = z
  .object({
    name: z.string().nonempty("Your full name is required"),
    username: z.string().nonempty("Your username is required").min(5, {
      message: "Username must be at least 5 characters.",
    }),
    email: z.string().nonempty("Your email is required").email({ message: "Invalid email address" }),
    password: z.string().nonempty("Your password is required").min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z.string().nonempty("Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"],
  });

const SignUp = () => {
  const claimUserName = useStore((state) => state.userName);
  const { loadingValue, setLoadingValue } = useLoading();
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  let callbackUrl = searchParams.get("callbackUrl") || "/";
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      username: claimUserName ?? "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    setLoadingValue("signUp");
    try {
      const res = await fetch("http://localhost:3000/api/sign-up", {
        method: "POST",
        body: JSON.stringify({
          name: values.name,
          userName: values.username,
          email: values.email,
          password: values.password,
        }),
        headers: { "Content-Type": "application/json" },
      });
      if (res.ok) {
        sonerToast({
          severity: "success",
          title: "Sucessfully...",
          message: "Log In with the details to continue !!!",
        });
        signIn();
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoadingValue("");
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-around gap-5 py-3 md:flex-row md:px-10 lg:gap-16">
      <section className="hidden md:block lg:flex lg:flex-col lg:gap-3">
        <Link href="/" className="font-heading flex items-center gap-3">
          <Icons.largeLogo className="" />
          <h1 className="mt-1">Refhired.com</h1>
        </Link>
        <h3>Join the larget referral community !</h3>
      </section>
      <div className="border-foreground flex w-11/12 flex-col items-center justify-center gap-4 rounded-md border py-3 lg:w-[450px]">
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
                    Username <Required /> @
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="@johndoe" {...field} />
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
                    Full Name <Required /> 👤
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
                    Email Address <Required /> 📧
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Password <Required /> 🔑
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
                    Confirm Password <Required /> 🔑
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
            <Button type="submit" isLoading={loadingValue === "signUp"}>
              Sign Up for free 🎉
            </Button>
          </form>
        </Form>
        <Separator />
        <div className="relative flex justify-center text-xs uppercase">
          <span className="text-muted-foreground px-2">Or continue with</span>
        </div>
        <div className="mx-auto flex w-full justify-center gap-5 lg:w-11/12">
          <Button
            className="flex w-36 justify-center gap-5 px-2 font-sans"
            disabled={loadingValue === "googleSignUp"}
            onClick={() => signIn("google")}
            variant="secondary"
            size="icon">
            {loadingValue === "googleSignUp" ? (
              <Icons.spinner className="h-5 w-5 animate-spin" />
            ) : (
              <Icons.google className="h-5 w-4" />
            )}{" "}
            Google
          </Button>
          <Button
            className="flex w-36 justify-center gap-5 px-2 font-sans"
            disabled={loadingValue === "linkedinSignUp"}
            onClick={() => setLoadingValue("linkedinSignUp")}
            variant="secondary"
            size="icon">
            {loadingValue === "linkedinSignUp" ? (
              <Icons.spinner className="h-5 w-5 animate-spin" />
            ) : (
              <Icons.linkedin className="h-5 w-5" />
            )}{" "}
            LinkedIn
          </Button>
        </div>
        <Separator />
        <div className="flex items-center justify-center gap-2">
          <TypographySmall>Already have an account ?</TypographySmall>
          <Link className="text-muted-foreground" href="/login">
            <TypographySmall> Log In</TypographySmall>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
