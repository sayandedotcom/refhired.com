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

import { sonerToast } from "@/components/ui";

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
      <TypographyH2>Forgot Password !</TypographyH2>
      <div className="border-foreground flex w-11/12 flex-col items-center justify-center gap-6 rounded-md border py-8 lg:w-[450px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-11/12 flex-col space-y-4 lg:w-10/12">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address / Username 📧</FormLabel>
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
                  <FormLabel>Password 🔑</FormLabel>
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
              Send Mail 🎉
            </Button>
          </form>
        </Form>
        <Separator className="w-11/12" />
      </div>
    </div>
  );
};

export default Login;
