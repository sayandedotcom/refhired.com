"use client";

import { useState } from "react";

import Image from "next/image";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@referrer/ui";

import { sonerToast } from "@/components/ui";

import { request } from "@/lib/axios";
import { profileFormSchema } from "@/lib/validators";

import { cn } from "@/utils";

import { TSettingsProfile } from "@/types/types";

type ProfileFormValues = z.infer<typeof profileFormSchema>;

// This can come from your database or API.
// const defaultValues: Partial<ProfileFormValues> = {
//   bio: "I own a computer.",
//   urls: [{ value: "https://shadcn.com" }, { value: "http://twitter.com/shadcn" }],
// };
const updateProfile = ({ userName, bio, name }) => {
  return request.post("/settings/profile", {
    userName,
    bio,
    name,
  });
};

export function ProfileForm() {
  const { data: session } = useSession();
  const { data, error, isLoading } = useQuery<TSettingsProfile>({
    queryKey: ["settings/profile"],
    queryFn: () => {
      return request.get("/settings/profile", {
        headers: {
          Authorization: `Bearer ${session.user.refresh_token}`,
        },
      });
    },
  });

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    // defaultValues,
    mode: "onChange",
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["referral"],
    mutationFn: updateProfile,
    onSuccess(data, variables) {
      sonerToast({
        severity: "success",
        title: "Sucess !",
        message: data.data.message,
      });
      // form.reset();
    },
    onError(error, variables, context) {
      ///@ts-expect-error
      setError(error?.response.data.message);
      sonerToast({
        severity: "error",
        title: "Error !",
        ///@ts-expect-error
        message: error?.response.data.message,
      });
    },
  });

  const { fields, append } = useFieldArray({
    name: "urls",
    control: form.control,
  });

  // const [data, setData] = useState<User>();
  const [image, setImage] = useState("");
  // const getUsers = async () => {
  //   const users = await getProfile();
  //   setData(users);
  // };

  // useEffect(() => {
  //   getUsers(); // run it, run it
  //   // return () => {
  //   // this now gets called when the component unmounts
  //   // };
  // }, []);

  const onSubmit = async (values: ProfileFormValues) => {
    mutate({
      userName: values.username,
      name: values.name,
      bio: values.bio,
    });
    sonerToast({ severity: "neutral", title: "Profile Updated !" });
    // form.reset();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile Picture</FormLabel>
              <FormControl>
                <Image
                  src={image ? image : data?.data.image ?? "/images/avatar/avatar.png"}
                  alt="Img"
                  height={100}
                  width={100}
                  className="mx-auto cursor-pointer rounded-full"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-center">
                This is your public display profile picture.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <UploadBtn text="Change Picture" setImage={setImage} /> */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="@username" defaultValue={data?.data.userName} {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a pseudonym. You can only change
                this once every 30 days.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" defaultValue={data?.data?.name} {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name. It can be your real name or a pseudonym. You can only change
                this once every 30 days.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormDescription>
                You can manage verified email addresses in your{" "}
                <Link href="/examples/forms">email settings</Link>.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about yourself"
                  className="resize-none"
                  defaultValue={data?.data?.bio}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                You can <span>@mention</span> other users and organizations to link to them.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`urls.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={cn(index !== 0 && "sr-only")}>URLs</FormLabel>
                  <FormDescription className={cn(index !== 0 && "sr-only")}>
                    Add links to your website, blog, or social media profiles.
                  </FormDescription>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-2"
            onClick={() => append({ value: "" })}>
            Add URL
          </Button>
        </div>
        <Button type="submit">Update profile</Button>
      </form>
    </Form>
  );
}
