"use client";

import { useState } from "react";

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

import RichTextEditor from "../Tiptap";
import { DynamicIcons } from "../icons/dynamic-icons";
import { sonerToast } from "./soner-toast";

const applyPost = ({ applyInfo, postId, userId }) => {
  return request.post("/apply", { applyInfo, postId, userId });
};

export function ApplyDialog({
  myObject,
  postID,
  stars,
  totalApplied,
  acceptLimit,
  expired,
}: {
  myObject?: any;
  postID?: any;
  stars?: any;
  totalApplied?: any;
  acceptLimit?: any;
  expired?: any;
}) {
  const [open, setOpen] = useState(false);
  const { data: session } = useSession();
  const { mutate, isPending } = useMutation({
    mutationKey: ["apply"],
    mutationFn: applyPost,
    onSuccess(data, variables) {
      setOpen(!open);
      sonerToast({
        severity: "success",
        title: "Sucess !",
        message: data.data.message,
      });
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
        severity: "info",
        title: "Oopps !",
        message: "Login or SignUp to continue !",
      });
    } else {
      mutate({ applyInfo: values, postId: postID, userId: session?.user?.id });
    }
  }

  // const { fields, append } = useFieldArray({
  //   name: "urls",
  //   control: form.control,
  //   //  keyName:
  // });

  // !form.formState.isSubmitSuccessful;

  const full = acceptLimit != 0 && acceptLimit === totalApplied;
  const fileRef = form.register("pdfs");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          id="post-apply"
          // disabled={applied}
          // disabled={full || expired}
          isLoading={isPending}
          // isLoading={loadingValue === "apply"}
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
          <form onSubmit={form.handleSubmit(onSubmit)} className="relative flex flex-col space-y-2">
            {/* <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Write a short message to the referrer</FormLabel>
                  <FormControl>
                    <RichTextEditor
                      charactersLimit={400}
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
            /> */}
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
            {myObject?.hasOwnProperty("pdfs") &&
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
              ))}
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
            <Button
              isLoading={isPending}
              // disabled={!form.formState.isValid}
              className="w-5/12 self-center rounded-full"
              type="submit">
              Apply !
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
