"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Button,
  TypographyH2,
  Separator,
  TypographyP,
  TypographySmall,
} from "@referrer/ui";

const loginSchema = z.object({
  email: z.string().nonempty("This field is required"),
  password: z.string().nonempty("This field is required"),
});

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    try {
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
      console.log(e);
    }
  };
  return (
    <div className='min-h-screen py-5 flex flex-col items-center justify-center gap-10 lg:h-screen'>
      <TypographyH2>Welcome Back !</TypographyH2>
      <div className='rounded-md border border-gray-200 w-11/12 lg:w-[450px] py-8 bg-white flex flex-col justify-center items-center gap-6'>
        {error ? (
          <div className='bg-red-300 border border-destructive text-destructive rounded-sm text-center p-2 w-10/12'>
            {error}
          </div>
        ) : (
          <></>
        )}
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-11/12 space-y-4 flex flex-col lg:w-10/12 text-[#0f172a]'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-black'>
                    Email address or Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder='john.doe@example.com'
                      type='text'
                      {...field}
                    />
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
                  <Link
                    className='mt-3 text-muted-foreground ml-auto'
                    href='/forgot-password'>
                    <TypographySmall>Forgot Password ?</TypographySmall>
                  </Link>
                </FormItem>
              )}
            />
            <Button
              className='bg-[#0f172a] text-white hover:bg-[#0f172a]'
              type='submit'>
              Log In
            </Button>
          </form>
        </Form>
        <Separator />
        <div className='w-11/12 flex flex-col lg:w-[350px] gap-4'>
          <Button onClick={() => signIn("google")} variant='secondary'>
            <TypographyP>Sign In with Google</TypographyP>
          </Button>
          <Button variant='secondary'>
            <TypographyP>Sign In with LinkdeIn</TypographyP>
          </Button>
        </div>
        <Separator />
        <div className='flex justify-center items-center gap-2'>
          <TypographySmall className='text-[#030711]'>
            Don&prime;t have an account ?
          </TypographySmall>
          <Link className='text-muted-foreground' href='/sign-up'>
            <TypographySmall>Sign Up</TypographySmall>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
