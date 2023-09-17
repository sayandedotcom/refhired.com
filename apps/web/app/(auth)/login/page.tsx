"use client";

import { useState } from "react";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

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
  TypographyH2,
  TypographySmall,
} from "@referrer/ui";

import { Icons } from "@/components/icons/icons";
import { Required, sonerToast } from "@/components/ui";

const loginSchema = z.object({
  email: z.string().nonempty("This field is required"),
  password: z.string().nonempty("This field is required"),
});

const Login = () => {
  const router = useRouter();
  const { loadingValue, setLoadingValue } = useLoading();
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  let callbackUrl = searchParams.get("callbackUrl") || "/";
  if (callbackUrl.endsWith("sign-up")) {
    callbackUrl = "/";
  } else {
    callbackUrl = callbackUrl || "/";
  }

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const loginWithGoogle = async () => {
  //   setLoading(true);
  //   try {
  //     const result = await signIn("google");
  //   } catch (e) {
  //     console.log(e);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const googleLogin = async () => {
    await signIn("google", { callbackUrl: "/home", redirect: true });
  };

  const linkedInLogin = async () => {
    await signIn("linkedin", { callbackUrl: "/home", redirect: true });
  };

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      setLoadingValue("logIn");
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
        callbackUrl,
      });
      console.log("result", result);
      if (!result?.error) {
        sonerToast({
          severity: "success",
          title: "Woohhh...",
          message: "You have Sucessfully Logged In !!!",
        });
        router.push(callbackUrl);
      } else {
        sonerToast({
          severity: "error",
          title: "Oopss.....",
          message: "Your email / username or password is incorrect",
        });
        setError("Invalid email or password");
      }
    } catch (e) {
      console.log("signup", e);
    } finally {
      setLoadingValue("");
    }
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 py-5 lg:h-screen">
      <TypographyH2>Welcome Back !</TypographyH2>
      <div className="border-foreground flex w-11/12 flex-col items-center justify-center gap-6 rounded-md border py-8 lg:w-[450px]">
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
                    Email address / Username <Required /> 📧
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com / @johndoe" type="text" {...field} />
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
                  <Link className="text-muted-foreground ml-auto mt-3" href="/forgot-password">
                    <TypographySmall>Forgot Password ?</TypographySmall>
                  </Link>
                </FormItem>
              )}
            />
            <Button isLoading={loadingValue === "logIn"} type="submit">
              Log In 🎉
            </Button>
          </form>
        </Form>
        <Separator className="w-11/12" />
        <div className="relative flex justify-center text-xs uppercase">
          <span className="text-muted-foreground px-2">Or continue with</span>
        </div>
        <div className="mx-auto flex w-full justify-center gap-5 lg:w-11/12">
          <Button
            className="flex w-36 justify-center gap-5 px-2 font-sans"
            disabled={loadingValue === "googleSignUp"}
            onClick={googleLogin}
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
          <TypographySmall>Don&prime;t have an account ?</TypographySmall>
          <Link className="text-muted-foreground" href="/sign-up">
            <TypographySmall>Sign Up</TypographySmall>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
