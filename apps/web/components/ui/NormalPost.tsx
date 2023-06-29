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
  Textarea,
} from "@referrer/ui";

const referralPostSchema = z
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

export const NormalPost = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof referralPostSchema>>({
    resolver: zodResolver(referralPostSchema),
    defaultValues: {
      fullName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: z.infer<typeof referralPostSchema>) {}
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-3 justify-center w-11/12 mx-auto'>
        <FormField
          control={form.control}
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder='Title of the referral.......'
                  {...field}
                />
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
              <FormControl>
                <Textarea
                  placeholder='Description of the referral.......'
                  {...field}
                />
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
              <FormControl>
                <Input placeholder='john.doe@example.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className='bg-[#0f172a] text-white hover:bg-[#0f172a]'
          type='submit'>
          Post
        </Button>
      </form>
    </Form>
  );
};
