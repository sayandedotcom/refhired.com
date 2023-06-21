"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { signIn } from "next-auth/react";

const signUpSchema = z
  .object({
    fullName: z.string().nonempty("Your full name is required"),
    username: z.string().nonempty("Your username is required").min(5, {
      message: "Username must be at least 5 characters.",
    }),
    email: z
      .string()
      .nonempty("Your email is required")
      .email({ message: "Invalid email address" }),
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
  const router = useRouter();
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signUpSchema>) {
    try {
      const res = await fetch("http://localhost:3000/api/sign-up", {
        method: "POST",
        body: JSON.stringify({
          fullName: values.fullName,
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
    }
  }

  return (
    <div className='min-h-screen py-3 flex flex-col md:flex-row items-center justify-around lg:gap-16 md:px-10 gap-5'>
      <section className='hidden md:block lg:flex lg:flex-col lg:gap-3'>
        <TypographyH1>Referrer</TypographyH1>
        <TypographyH2>Join the larget referall community !</TypographyH2>
      </section>
      <div className='w-11/12 rounded-md border border-gray-200 lg:w-[450px] py-3 bg-white flex flex-col justify-center items-center gap-4'>
        <div className='py-1 flex flex-col gap-4 w-11/12 lg:w-10/12'>
          <TypographyH3 className='text-[#030711]'>
            Welcome to the Referrer
          </TypographyH3>
          <p className='text-muted-foreground'>
            Create your account and start using Referrer for free, with
            unlimited event types, bookings and all the features you need.
            Upgrade to a premium plan if you&prime;re looking for more features.
          </p>
        </div>
        <Separator />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-11/12 space-y-2 flex flex-col lg:w-10/12 text-[#0f172a]'>
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black'>Username</FormLabel>
                  <FormControl>
                    <Input placeholder='@johndoe' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='fullName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black'>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder='John Doe' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black'>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder='john.doe@example.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black'>Password</FormLabel>
                  <FormControl>
                    <Input
                      className='tracking-[0.5rem]'
                      type='password'
                      placeholder='•••••••••••'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black'>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      className='tracking-[0.5rem]'
                      type='password'
                      placeholder='•••••••••••'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className='bg-[#0f172a] text-white hover:bg-[#0f172a]'
              type='submit'>
              Sign Up for free
            </Button>
          </form>
        </Form>
        <Separator />
        <div className='w-11/12 flex justify-between lg:w-[350px] gap-4'>
          <Button className='w-6/12' variant='secondary'>
            <TypographyP>Google</TypographyP>
          </Button>
          <Button className='w-6/12' variant='secondary'>
            <TypographyP>LinkdeIn</TypographyP>
          </Button>
        </div>
        <Separator />
        <div className='flex justify-center items-center gap-2'>
          <TypographySmall className='text-[#030711]'>
            Already have an account ?
          </TypographySmall>
          <Link className='text-muted-foreground' href='/login'>
            <TypographySmall> Log In</TypographySmall>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
