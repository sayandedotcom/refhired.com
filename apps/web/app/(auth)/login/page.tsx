"use client";

import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
  TypographyH2,
  Separator,
  TypographyP,
} from "@referrer/ui";
import { useRouter } from "next/navigation";

const loginSchema = z.object({
  email: z
    .string()
    .nonempty("This field is required")
    .email({ message: "Invalid email address" }),
  password: z.string().nonempty("This field is required").min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const Login = () => {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.outline
  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    alert(values.email);
  }
  return (
    <div className='flex flex-col items-center justify-center gap-10 h-screen bg-[#f3f4f6]'>
      <TypographyH2>Welcome Back !</TypographyH2>
      <div className='rounded-md border border-gray-200 w-full lg:w-[450px] px-4 py-10 bg-white flex flex-col justify-center items-center gap-6'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-8 flex flex-col w-[350px]'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='john.doe@example.com'
                      type='email'
                      {...field}
                    />
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
                      type='password'
                      placeholder='•••••••••••'
                      {...field}
                    />
                  </FormControl>
                  {/* <FormDescription>Enter your Password</FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit'>Sign In</Button>
          </form>
        </Form>
        <Separator />
        <div className='flex flex-col w-[350px] gap-4'>
          <Button variant='secondary'>
            <TypographyP>Sign In with Google</TypographyP>
          </Button>
          <Button variant='secondary'>
            <TypographyP>Sign In with Facebook</TypographyP>
          </Button>
        </div>
      </div>
      <div className='flex justify-center items-center gap-5'>
        <TypographyH4>Don&prime;t have an account ?</TypographyH4>
        <Button onClick={() => router.push("/sign-up")}>Sign Up</Button>
      </div>
    </div>
  );
};

export default Login;
