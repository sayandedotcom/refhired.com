"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import "@referrer/ui/styles.css";
import "../../../styles/globals.css";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Button,
  TypographyH4,
  TypographyH1,
  TypographyH2,
} from "@referrer/ui";

import { useRouter } from "next/navigation";

const formSchema = z
  .object({
    username: z.string().nonempty("Username is required").min(5, {
      message: "Username must be at least 5 characters.",
    }),
    email: z
      .string()
      .nonempty("Email is required")
      .email({ message: "Invalid email address" }),
    password: z.string().nonempty("Password is required").min(8, {
      message: "Password must be at least 8 characters.",
    }),
    confirmPassword: z
      .string()
      .nonempty("Confirm Password is required")
      .min(8, {
        message: "Password must be at least 8 characters.",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"],
  });

const SignUp = () => {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className='flex items-center justify-center gap-10 py-20 px-8'>
      <section>
        <TypographyH1>Referrer</TypographyH1>
        <TypographyH2>Join the Larget Referall Community !</TypographyH2>
      </section>
      <div className='w-5/12'>
        <div className='flex justify-center items-center gap-5'>
          <TypographyH4>Already have an account !</TypographyH4>
          <Button onClick={() => router.push("/login")}>Login</Button>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder='shadcn' {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder='shadcn' {...field} />
                  </FormControl>
                  <FormDescription>Enter your Email Address</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='shadcn' {...field} />
                  </FormControl>
                  <FormDescription>Enter your Password</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='shadcn' {...field} />
                  </FormControl>
                  <FormDescription>Confirm your Password !</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
