"use client";

import { useState } from "react";

import Link from "next/link";

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
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographySmall,
} from "@referrer/ui";

import { Icons } from "@/components/icons/icons";

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
  const [signUpLoading, setSignUpLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [githubLoading, setGithubLoading] = useState(false);
  const [error, setError] = useState("");
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    setSignUpLoading(true);
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
        signIn();
      }
    } catch (err) {
      console.log(err);
      setError(err.message);
    } finally {
      setSignUpLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-around gap-5 py-3 md:flex-row md:px-10 lg:gap-16">
      <section className="hidden md:block lg:flex lg:flex-col lg:gap-3">
        <TypographyH1>Referrer</TypographyH1>
        <TypographyH2>Join the larget referral community !</TypographyH2>
      </section>
      <div className="flex w-11/12 flex-col items-center justify-center gap-4 rounded-md border border-gray-200 bg-white py-3 lg:w-[450px]">
        <div className="flex w-11/12 flex-col gap-4 py-1 lg:w-10/12">
          <TypographyH3 className="text-[#030711]">Welcome to the Referrer</TypographyH3>
          <p className="text-muted-foreground">
            Create your account and start using Referrer for free, with unlimited event types, bookings and
            all the features you need. Upgrade to a premium plan if you&prime;re looking for more features.
          </p>
        </div>
        <Separator />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex w-11/12 flex-col space-y-2 text-[#0f172a] lg:w-10/12">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black">Username</FormLabel>
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
                  <FormLabel className="text-black">Full Name</FormLabel>
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
                  <FormLabel className="text-black">Email Address</FormLabel>
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
                  <FormLabel className="text-black">Password</FormLabel>
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
                  <FormLabel className="text-black">Confirm Password</FormLabel>
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
            <Button
              className="bg-[#0f172a] text-white hover:bg-[#0f172a]"
              type="submit"
              isLoading={signUpLoading}>
              Sign Up for free
            </Button>
          </form>
        </Form>
        <Separator />
        <div className="relative flex justify-center text-xs uppercase">
          <span className="px-2 text-muted-foreground">Or continue with</span>
        </div>
        <div className="flex w-11/12 justify-between gap-4 lg:w-[350px]">
          <Button
            isLoading={googleLoading}
            className="w-6/12"
            variant="secondary"
            onClick={() => signIn("google")}>
            <Icons.google className="mr-2 h-4 w-4" />
            <TypographyP>Google</TypographyP>
          </Button>
          <Button
            isLoading={githubLoading}
            className="w-6/12"
            variant="secondary"
            onClick={() => signIn("github")}>
            <Icons.gitHub className="mr-2 h-4 w-4" />
            <TypographyP>GitHub</TypographyP>
          </Button>
        </div>
        <Separator />
        <div className="flex items-center justify-center gap-2">
          <TypographySmall className="text-[#030711]">Already have an account ?</TypographySmall>
          <Link className="text-muted-foreground" href="/login">
            <TypographySmall> Log In</TypographySmall>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
