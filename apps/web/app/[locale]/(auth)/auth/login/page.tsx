"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { useLoading } from "@/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { PartyPopper } from "lucide-react";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
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
  Separator,
  TypographyH2,
  TypographySmall,
} from "@referrer/ui";

import { Icons } from "@/components/icons/icons";
import { Required } from "@/components/ui";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address !" }).nonempty("Required"),
  // password: z.string().nonempty("This field is required").optional(),
});

const Login = () => {
  const router = useRouter();
  const { loadingValue, setLoadingValue } = useLoading();
  const [isVerificationEmail, setVerificationEmail] = useLocalStorage("verification-email", "");

  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  let errorCallback = searchParams.get("error");
  let callbackUrl = searchParams.get("callbackUrl") || "/";
  if (callbackUrl.endsWith("sign-up")) {
    callbackUrl = "/";
  } else {
    callbackUrl = callbackUrl || "/";
  }
  console.log("errorCallback 😊😊😊😊😊😊😊😊😊😊", errorCallback);
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      // password: "",
    },
  });

  const signInProviders = (auth: "github" | "google") => {
    setLoadingValue(auth);
    signIn(auth, { redirect: true, callbackUrl: "/" });
  };

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      console.log(values.email);
      setVerificationEmail(values.email);
      setLoadingValue("logIn");
      const result = await signIn("email", {
        email: values.email,
        redirect: true,
        callbackUrl: "/auth/verify-request",
      });
      console.log("result", result);
      // if (!result?.error) {
      //   sonerToast({
      //     severity: "success",
      //     title: "Woohhh...",
      //     message: "You have Sucessfully Logged In !!!",
      //   });
      //   router.push(callbackUrl);
      // } else {
      //   sonerToast({
      //     severity: "error",
      //     title: "Oopss.....",
      //     message: "Your email / username or password is incorrect",
      //   });
      //   setError("Invalid email or password");
      // }
    } catch (e) {
      console.log("signup", e);
    } finally {
      setLoadingValue("");
    }
    // try {
    //   setLoadingValue("logIn");
    //   const result = await signIn("credentials", {
    //     email: values.email,
    //     password: values.password,
    //     redirect: false,
    //     callbackUrl,
    //   });
    //   console.log("result", result);
    //   if (!result?.error) {
    //     sonerToast({
    //       severity: "success",
    //       title: "Woohhh...",
    //       message: "You have Sucessfully Logged In !!!",
    //     });
    //     router.push(callbackUrl);
    //   } else {
    //     sonerToast({
    //       severity: "error",
    //       title: "Oopss.....",
    //       message: "Your email / username or password is incorrect",
    //     });
    //     setError("Invalid email or password");
    //   }
    // } catch (e) {
    //   console.log("signup", e);
    // } finally {
    //   setLoadingValue("");
    // }
  };
  return (
    <div
    // className="bg-muted flex min-h-screen flex-col items-center justify-center gap-10 py-5 lg:h-screen"
    >
      <div className="bg-background border-foreground flex w-11/12 flex-col items-center justify-center gap-10 rounded-md border-[0.2px] py-14 lg:w-[450px]">
        <TypographyH2>Welcome Back !</TypographyH2>
        {/* {error ? (
          <div className="border-destructive text-destructive w-10/12 rounded-sm border bg-red-300 p-2 text-center">
            {error}
          </div>
        ) : (
          <></>
        )} */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-11/12 flex-col space-y-4 lg:w-10/12">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Email address <Required />
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                  <FormDescription>Enter your email address here.</FormDescription>
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
                  <Link className="text-muted-foreground ml-auto mt-3" href="/forgot-password">
                    <TypographySmall>Forgot Password ?</TypographySmall>
                  </Link>
                </FormItem>
              )}
            /> */}
            <Button
              type="submit"
              className="flex items-center justify-center"
              isLoading={loadingValue === "logIn"}>
              Log In <PartyPopper className="ml-4" />
            </Button>
          </form>
        </Form>

        <div className="relative flex justify-center text-xs uppercase">
          <span className="text-muted-foreground px-2">Or continue with</span>
        </div>

        <div className="mx-auto flex w-full justify-center gap-5 lg:w-11/12">
          <Button
            className="font-heading flex w-11/12 items-center justify-center gap-5 text-xl"
            disabled={loadingValue === "google"}
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
          {/* <Button
            className="flex w-36 justify-center gap-5 px-2 font-sans"
            disabled={loadingValue === "github"}
            onClick={() => signInProviders("github")}
            variant="secondary"
            size="lg">
            {loadingValue === "github" ? (
              <Icons.spinner className="h-5 w-5 animate-spin" />
            ) : (
              <Icons.linkedin className="h-5 w-5" />
            )}{" "}
            LinkedIn
          </Button> */}
        </div>
        <Separator />
        <div className="flex items-center justify-center gap-2">
          <TypographySmall>Don&prime;t have an account ?</TypographySmall>
          <Link className="text-muted-foreground" href="/auth/sign-up">
            <TypographySmall>Sign Up</TypographySmall>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
