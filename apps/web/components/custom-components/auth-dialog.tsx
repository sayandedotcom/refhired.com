"use client";

import { useRef, useState } from "react";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { useLoading } from "@/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useOnClickOutside } from "usehooks-ts";
import * as z from "zod";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Separator,
  TypographySmall,
} from "@referrer/ui";

import { useStore } from "@/store/store";

import { Icons } from "../icons/icons";

const loginSchema = z.object({
  email: z.string().nonempty("This field is required"),
  password: z.string().nonempty("This field is required"),
});

export function AuthDialog({ children }: { children: React.ReactNode }) {
  const setAuthDialogOpen = useStore((state) => state.setAuthDialogOpen);
  const authDialogOpen = useStore((state) => state.authDialogOpen);
  const ref = useRef(null);
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

  const handleClickOutside = () => {
    setAuthDialogOpen(!authDialogOpen);
  };

  useOnClickOutside(ref, handleClickOutside);

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
      if (!result?.error) {
        router.push(callbackUrl);
      } else {
        setError("Invalid email or password");
      }
    } catch (e) {
    } finally {
      setLoadingValue("");
    }
  };

  return (
    <Dialog open={authDialogOpen}>
      <DialogTrigger asChild>
        <>{children}</>
      </DialogTrigger>
      <DialogContent ref={ref} className="border-foreground max-w-[425px] border lg:w-[550px]">
        <DialogHeader>
          <DialogTitle className="font-heading flex items-center text-5xl">Login to Enjooy !</DialogTitle>
          <DialogDescription className="font-semibold">
            Join the world's 🌎 largest referral community.
          </DialogDescription>
        </DialogHeader>
        <div className="flex w-[99%] flex-col items-center justify-center gap-4">
          {error ? (
            <div className="border-destructive text-destructive w-10/12 rounded-sm border bg-red-300 p-2 text-center">
              {error}
            </div>
          ) : (
            <></>
          )}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address or Username 📪</FormLabel>
                    <FormControl>
                      <Input placeholder="john.doe@example.com" type="text" {...field} />
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
                    <Link className="text-muted-foreground ml-auto mt-5" href="/forgot-password">
                      <TypographySmall>Forgot Password ? 🤔 </TypographySmall>
                    </Link>
                  </FormItem>
                )}
              />
              <Button isLoading={loadingValue === "logIn"} type="submit">
                Log In 🎉
              </Button>
            </form>
          </Form>
          <Separator />
          <div className="relative flex justify-center text-xs uppercase">
            <span className="text-muted-foreground px-2">Or continue with</span>
          </div>
          <div className="grid w-full grid-cols-3 gap-3">
            <Button
              className="w-11/12"
              disabled={loadingValue === "githubSignUp"}
              variant="secondary"
              size="icon"
              onClick={() => signIn("github", { callbackUrl })}>
              {loadingValue === "githubSignUp" ? (
                <Icons.spinner className="h-5 w-5 animate-spin" />
              ) : (
                <Icons.gitHub className="h-5 w-5" />
              )}
            </Button>
            <Button
              className="w-11/12"
              disabled={loadingValue === "googleSignUp"}
              onClick={() => signIn("google", { callbackUrl })}
              variant="secondary"
              size="icon">
              {loadingValue === "googleSignUp" ? (
                <Icons.spinner className="h-5 w-5 animate-spin" />
              ) : (
                <Icons.google className="h-5 w-5" />
              )}
            </Button>
            <Button
              className="w-11/12"
              disabled={loadingValue === "linkedinSignUp"}
              onClick={() => signIn("linkedin", { callbackUrl })}
              variant="secondary"
              size="icon">
              {loadingValue === "linkedinSignUp" ? (
                <Icons.spinner className="h-5 w-5 animate-spin" />
              ) : (
                <Icons.linkedin className="h-5 w-5" />
              )}
            </Button>
          </div>
          <Separator />
          <div className="flex items-center justify-center gap-2">
            <TypographySmall>Don&prime;t have an account ?</TypographySmall>
            <Link className="text-muted-foreground hover:text-foreground" href="/sign-up">
              <TypographySmall>Sign Up</TypographySmall>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
