"use client";

import { useRef } from "react";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { useLoading } from "@/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useLocalStorage, useOnClickOutside } from "usehooks-ts";
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
  FormDescription,
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

export function AuthDialog({ children }: { children: React.ReactNode }) {
  const authDialogOpen = useStore((state) => state.authDialogOpen);
  const setAuthDialogOpen = useStore((state) => state.setAuthDialogOpen);
  const authDialogTitle = useStore((state) => state.authDialogTitle);
  const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address !" }).nonempty("Required"),
  });

  const ref = useRef(null);
  const router = useRouter();
  const { loadingValue, setLoadingValue } = useLoading();
  const searchParams = useSearchParams();
  let callbackUrl = searchParams.get("callbackUrl") || "/home";
  const handleClickOutside = () => {
    setAuthDialogOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
    },
  });
  const [isVerificationEmail, setVerificationEmail] = useLocalStorage("verification-email", "");

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
    } catch (e) {
      console.log("signup", e);
    } finally {
      setLoadingValue("");
    }
  };

  const signInProviders = (auth: "google") => {
    setLoadingValue(auth);
    signIn(auth, { redirect: false });
  };
  // open={authDialogOpen}
  return (
    <Dialog open={false}>
      <DialogTrigger asChild>
        <>{children}</>
      </DialogTrigger>
      <DialogContent ref={ref} className="border-foreground max-w-[425px] border lg:w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-heading flex items-center text-5xl">
            Login to {authDialogTitle} !
          </DialogTitle>
          <DialogDescription className="font-semibold">
            Join the world's 🌎 largest referral community.
          </DialogDescription>
        </DialogHeader>
        <div className="flex w-[99%] flex-col items-center justify-center gap-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full flex-col space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address or Username</FormLabel>
                    <FormControl>
                      <Input placeholder="john.doe@example.com" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                    <FormDescription>Either enter your email or username</FormDescription>
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
          <div className="mx-auto flex w-full justify-center gap-5">
            <Button
              className="font-heading flex w-full items-center justify-center gap-5 text-xl"
              disabled={loadingValue === "google"}
              onClick={() => signInProviders("google")}
              variant="secondary"
              size="lg">
              {loadingValue === "google" ? (
                <Icons.spinner className="h-6 w-6 animate-spin" />
              ) : (
                <Icons.googleG className="h-6 w-6" />
              )}{" "}
              Google
            </Button>
          </div>
          <Separator />
          <div className="flex items-center justify-center gap-2">
            <TypographySmall>Don&prime;t have an account ?</TypographySmall>
            <Link className="text-muted-foreground hover:text-foreground" href="/auth/sign-up">
              <TypographySmall>Sign Up</TypographySmall>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
