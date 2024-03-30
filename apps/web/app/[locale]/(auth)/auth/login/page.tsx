"use client";

import React, { useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { useLoading } from "@/hooks";
import { Link } from "@/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { PartyPopper } from "lucide-react";
import { signIn } from "next-auth/react";
import { useLocale, useTranslations } from "next-intl";
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
  TypographySmall,
} from "@referrer/ui";

import { Icons } from "@/components/icons/icons";
import { Required } from "@/components/ui";

import { cn } from "@/utils";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address !" }).nonempty("Required"),
});

export default function Login() {
  const locale = useLocale();
  const t = useTranslations("Index");
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
    },
  });

  const signInProviders = (auth: "google") => {
    setLoadingValue(auth);
    signIn(auth, { redirect: true, callbackUrl: `/${locale}` });
  };

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      console.log(values.email);
      setVerificationEmail(values.email);
      setLoadingValue("logIn");
      const result = await signIn("email", {
        email: values.email,
        redirect: true,
        callbackUrl: `${locale}/auth/verify-request`,
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
      className={cn(
        "bg-background border-foreground flex w-11/12 flex-col items-center justify-center gap-10 rounded-md border-[0.2px] py-14 lg:w-[450px]"
      )}>
      <h3 className="font-heading text-center">{t("login_to_continue")}</h3>
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
                  {t("email_address")} <Required />
                </FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@example.com" type="text" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription> {t("enter_your_email_address_here")} </FormDescription>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="flex items-center justify-center"
            isLoading={loadingValue === "logIn"}>
            {t("log_in")} <PartyPopper className="ml-4" />
          </Button>
        </form>
      </Form>

      <div className="relative flex justify-center text-xs uppercase">
        <span className="text-muted-foreground px-2">{t("or_continue_with")}</span>
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
            <FcGoogle className="h-6 w-6" />
          )}{" "}
          Google
        </Button>
      </div>
      <Separator />
      <div className="flex items-center justify-center gap-2">
        <TypographySmall>{t("dont_have_an_account")}</TypographySmall>
        <Link className="text-muted-foreground" href="/auth/sign-up">
          <TypographySmall>{t("sign_up")}</TypographySmall>
        </Link>
      </div>
    </div>
  );
}
