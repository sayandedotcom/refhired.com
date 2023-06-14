"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import "../../../styles/globals.css";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Button,
  TypographyH1,
  TypographyH2,
  TypographyP,
  Separator,
  TypographyH3,
  TypographySmall,
  TypographyMuted,
} from "@referrer/ui";

import { useRouter } from "next/navigation";

const signUpSchema = z
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
    confirmPassword: z.string().nonempty("Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password doesn't match",
    path: ["confirmPassword"],
  });

const SignUp = () => {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof signUpSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className='min-h-screen flex flex-col md:flex-row items-center justify-center gap-28 bg-[#f3f4f6] lg:h-screen'>
      <section className='hidden md:block'>
        <TypographyH1>Referrer</TypographyH1>
        <TypographyH2>Join the Larget Referall Community !</TypographyH2>
      </section>
      <div className='w-11/12 rounded-md border border-gray-200 lg:w-[450px] px-4 py-10 bg-white flex flex-col justify-center items-center gap-6'>
        <div className='p-2 flex flex-col gap-4'>
          <TypographyH3>Welcome to the Referrer</TypographyH3>
          <TypographyMuted>
            Create your account and start using Referrer for free, with
            unlimited event types, bookings and all the features you need.
            Upgrade to a premium plan if you&prime;re looking for more features.
          </TypographyMuted>
        </div>
        <Separator />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-8 flex flex-col w-[350px]'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder='@username' {...field} />
                  </FormControl>
                  {/* <FormDescription>This is your public display name.</FormDescription> */}
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
                    <Input placeholder='john.doe@example.com' {...field} />
                  </FormControl>
                  {/* <FormDescription>Enter your Email Address</FormDescription> */}
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
                    <Input
                      className='tracking-widest'
                      type='password'
                      placeholder='• • • • • • • • • • •'
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>Enter your Password</FormDescription> */}
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
                    <Input
                      className='tracking-widest'
                      type='password'
                      placeholder='• • • • • • • • • • •'
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>Confirm your Password !</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Sign Up for free</Button>
          </form>
        </Form>
        <Separator />
        <div className='flex justify-between w-[350px] gap-4'>
          <Button variant='secondary'>
            <TypographyP>Sign Up with Google</TypographyP>
          </Button>
          <Button variant='secondary'>
            <TypographyP>Sign Up with LinkdIn</TypographyP>
          </Button>
        </div>
        <Separator />
        <div className='flex justify-center items-center gap-2'>
          <TypographySmall>Already have an account ?</TypographySmall>
          <Link className='text-muted-foreground' href='/login'>
            <TypographySmall> Sign In</TypographySmall>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
