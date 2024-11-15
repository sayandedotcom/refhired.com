"use client";

import React from "react";

import { useSearchParams } from "next/navigation";

import { useLoading } from "@/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { PartyPopper } from "lucide-react";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
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
  Separator,
} from "@referrer/ui";

import { Icons } from "@/components/icons/icons";
import { Required } from "@/components/ui";

import { siteConfig } from "@/config";

import { cn } from "@/utils";

const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address !" }).nonempty("Required"),
});

export default function Login() {
  const t = useTranslations("Index");
  const { loadingValue, setLoadingValue } = useLoading();
  const [isVerificationEmail, setVerificationEmail] = useLocalStorage("verification-email", "");
  const searchParams = useSearchParams();
  let errorCallback = searchParams.get("error");
  let callbackUrl = searchParams.has("callbackUrl") ? `${searchParams.get("callbackUrl")}` : "/home";

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });

  const signInProviders = (auth: "google") => {
    setLoadingValue(auth);
    signIn(auth, { callbackUrl });
  };

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
      setVerificationEmail(values.email);
      setLoadingValue("logIn");

      signIn("resend", values, {
        callbackUrl,
        redirect: true,
        redirectTo: "/auth/verify-request",
      });

      // const result = await signIn("email", {
      //   email: values.email,
      //   redirect: true,
      //   callbackUrl: "/auth/verify-request",
      // });
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
                  {t("email_address")} <Required /> <span>[ Service Unavailable ]</span>
                </FormLabel>
                <FormControl>
                  <Input disabled placeholder="john.doe@example.com" type="text" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription> {t("enter_your_email_address_here")} </FormDescription>
              </FormItem>
            )}
          />
          <Button
            disabled
            type="submit"
            // disabled={siteConfig.waitlist}
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
          disabled={loadingValue === "google" || siteConfig.waitlist}
          onClick={() => signInProviders("google")}
          variant="secondary"
          size="lg">
          {loadingValue === "google" ? <Icons.spinner className="h-6 w-6 animate-spin" /> : <Icons.googleG />}
          Google
        </Button>
      </div>
      <Separator />
      {/* <div className="flex items-center justify-center gap-2">
        <TypographySmall>{t("dont_have_an_account")}</TypographySmall>
        <Link className="text-muted-foreground" href="/auth/sign-up">
          <TypographySmall>{t("sign_up")}</TypographySmall>
        </Link>
      </div> */}
    </div>
  );
}
