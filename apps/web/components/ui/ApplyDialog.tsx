"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@referrer/lib/utils/cn";
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
} from "@referrer/ui";

import { request } from "@/lib/axios";
import { applyValidator } from "@/lib/validators";

import { TApply } from "@/types/types";

import RichTextEditor from "../Tiptap";
import { DynamicIcons } from "../icons/dynamic-icons";
import { sonerToast } from "./soner-toast";

export function ApplyDialog({
  myObject,
  postId,
  stars,
  totalApplied,
  acceptLimit,
  expired,
  authorId,
}: {
  myObject?: any;
  postId?: any;
  stars?: any;
  totalApplied?: any;
  acceptLimit?: any;
  expired?: any;
  authorId: string;
}) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const { data: session } = useSession();

  const { mutate, isPending } = useMutation({
    mutationKey: ["apply"],
    mutationFn: ({ applyInfo, starsRequired, authorId }: TApply) => {
      return request.post(
        `/apply/${postId}`,
        { applyInfo, starsRequired, authorId },
        {
          headers: {
            Authorization: session?.user?.refresh_token && `Bearer ${session?.user?.refresh_token}`,
          },
        }
      );
    },
    onSuccess(data, variables) {
      setOpen(!open);
      sonerToast({
        severity: "success",
        title: "Sucess !",
        message: data.data.message,
      });
    },
    onError(error, variables, context) {
      sonerToast({
        severity: "error",
        title: "Error !",
        ///@ts-expect-error
        message: error?.response.data.message,
      });
      ///@ts-expect-error
      console.log(error?.response.data.message);
    },
  });

  const form = useForm<z.infer<typeof applyValidator>>({
    resolver: zodResolver(applyValidator),
    defaultValues: {
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof applyValidator>) {
    if (!session) {
      sonerToast({
        severity: "warning",
        title: "Oops !",
        message: "You are not authenticated. Please Login to continue!",
      });
      router.push("/auth/login");
    } else {
      mutate({ applyInfo: values, starsRequired: stars, authorId: authorId });
    }
  }

  // const { fields, append } = useFieldArray({
  //   name: "urls",
  //   control: form.control,
  //   //  keyName:
  // });

  // !form.formState.isSubmitSuccessful;

  const full = acceptLimit != 0 && acceptLimit === totalApplied;
  const notEnoughStars = session?.user?.stars < stars;
  const fileRef = form.register("pdfs");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          id="post-apply"
          disabled={expired || full}
          // isLoading={isPending}
          // iconBefore={applied && <AiOutlineCheckCircle className="mr-2 h-4 w-4 text-green-400" />}
          // onClick={apply}
          className="h-9 rounded-full text-sm md:w-36">
          {(full && "Full") || (expired && "Expired") || "Apply"}
        </Button>
      </DialogTrigger>
      <DialogContent className="border-foreground w-11/12 md:w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-3xl">Best of Luck ! 🤞</DialogTitle>
          <DialogDescription className="text-base">
            Provide the necessary information for this referral.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="relative flex w-full flex-col space-y-2">
            {/* Message */}
            {myObject?.hasOwnProperty("message") && myObject.message === true && (
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Write a short message to the referrer</FormLabel>
                    <FormControl>
                      <RichTextEditor
                        charactersLimit={500}
                        className="min-h-[140px] max-w-full text-base"
                        name="message"
                        placeholder="Write a short message to the referrer here. . . . . ."
                        value={field.value}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {/* PDF */}
            <div className="mt-2">
              {myObject?.hasOwnProperty("pdfs") &&
                myObject.pdfs.map((name, index) => (
                  <FormField
                    control={form.control}
                    key={index}
                    name={`pdfs.${index}.${name}`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={cn(index !== 0 && "sr-only")}>Pdfs</FormLabel>
                        <FormDescription className={cn(index !== 0 && "sr-only")}>
                          Add pdfs links.
                        </FormDescription>
                        <FormControl>
                          <div className="flex items-center gap-2">
                            <DynamicIcons iconName={name} className="h-7 w-7" />
                            <Input
                              {...field}
                              placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
                              type="url"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
            </div>
            {/* {myObject?.hasOwnProperty("pdfs") &&
              myObject.pdfs.map((name, index) => (
                <FormField
                  control={form.control}
                  name={`pdfs.${index}.${name}`}
                  key={index}
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-center gap-5">
                      <FormLabel className="text-center text-sm">
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                      </FormLabel>
                      <FormControl>
                        <Input
                          name={name}
                          value={undefined}
                          type="file"
                          accept=".pdf"
                          className="ml-auto w-8/12 cursor-pointer"
                          // {...fileRef}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))} */}
            {/* Links */}
            <div className="mt-2">
              {myObject?.hasOwnProperty("links") &&
                myObject.links.map((name, index) => (
                  <FormField
                    control={form.control}
                    key={index}
                    name={`links.${index}.${name}`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className={cn(index !== 0 && "sr-only")}>Links</FormLabel>
                        <FormDescription className={cn(index !== 0 && "sr-only")}>
                          Add links to your website, blog, or social media profiles.
                        </FormDescription>
                        <FormControl>
                          <div className="flex items-center gap-2">
                            <DynamicIcons iconName={name} className="h-7 w-7" />
                            <Input
                              {...field}
                              placeholder={name.charAt(0).toUpperCase() + name.slice(1)}
                              type="url"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
            </div>
            {/* {notEnoughStars ? (
              <Badge className="bg-destructive text-foreground mx-auto py-1 text-sm">
                You Don't have enough Stars to Apply
              </Badge>
            ) : ( */}
            <Button
              isLoading={isPending}
              // disabled={notEnoughStars}
              // disabled={!form.formState.isValid}
              className="w-5/12 self-center rounded-full"
              type="submit">
              {stars ? `Apply with ${stars} stars` : "Apply !"}
            </Button>
            {/* )} */}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
