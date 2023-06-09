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
  TypographyH2,
  TypographyH1,
} from "@referrer/ui";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().nonempty("Username is required").min(5, {
    message: "Username must be at least 5 characters.",
  }),
  password: z.string().nonempty("Password is required").min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const Login = () => {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    alert(values);
  }
  return (
    <div className='flex items-center justify-center gap-12 h-screen px-10'>
      <section>
        <TypographyH1>Referrer</TypographyH1>
        <TypographyH2>Join the Larget Referall Community !</TypographyH2>
      </section>
      <div className='w-5/12'>
        <div className='flex justify-center items-center gap-5'>
          <TypographyH4>Don&prime;t have an account ?</TypographyH4>
          <Button onClick={() => router.push("/sign-up")}>Sign Up</Button>
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
                    <Input placeholder='Email' {...field} />
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
                    <Input type='password' placeholder='Password' {...field} />
                  </FormControl>
                  <FormDescription>Enter your Password</FormDescription>
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

export default Login;
