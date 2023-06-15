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
  TypographyH2,
  Separator,
  TypographyP,
  TypographySmall,
} from "@referrer/ui";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

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
  const onSubmit = async (values: z.infer<typeof loginSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    alert(values.email);
    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: true,
      callbackUrl: "/home",
    });
  };
  return (
    <div className='min-h-screen py-5 flex flex-col items-center justify-center gap-10 bg-[#f3f4f6] lg:h-screen'>
      <TypographyH2>Welcome Back !</TypographyH2>
      <div className='rounded-md border border-gray-200 w-11/12 lg:w-[450px] py-8 bg-white flex flex-col justify-center items-center gap-6'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='w-11/12 space-y-8 flex flex-col lg:w-[350px]'>
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
            <Button type='submit'>Sign In</Button>
          </form>
        </Form>
        <Separator />
        <div className='w-11/12 flex flex-col lg:w-[350px] gap-4'>
          <Button variant='secondary'>
            <TypographyP>Sign In with Google</TypographyP>
          </Button>
          <Button variant='secondary'>
            <TypographyP>Sign In with LinkdeIn</TypographyP>
          </Button>
        </div>
        <Separator />
        <div className='flex justify-center items-center gap-2'>
          <TypographySmall>Don&prime;t have an account ?</TypographySmall>
          <Link className='text-muted-foreground' href='/sign-up'>
            <TypographySmall>Sign Up</TypographySmall>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
