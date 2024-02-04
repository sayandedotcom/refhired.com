"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
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
  Textarea,
} from "@referrer/ui";

import { applyValidator } from "@/lib/validators";

import { Icons } from "../icons/icons";
import { toastMessage } from "./toast/toasts";

export function ApplyDialog({ children }) {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof applyValidator>>({
    resolver: zodResolver(applyValidator),
    defaultValues: {
      message: "",
    },
  });

  const myObject = {
    message: "true",
    pdfs: ["resume", "coverLetter"],
    links: ["github", "linkedin"],
  };

  async function onSubmit(values: z.infer<typeof applyValidator>) {
    console.log(values);
    setOpen(!open);
    toastMessage({
      type: "success",
      title: "Applied Successfully !",
      message: "You have successfully applied for this job.",
    });
  }

  // const { fields, append } = useFieldArray({
  //   name: "urls",
  //   control: form.control,
  //   //  keyName:
  // });

  // !form.formState.isSubmitSuccessful;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="border-foreground w-11/12 md:w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-3xl">Best of Luck ! 🤞</DialogTitle>
          <DialogDescription className="text-base">
            Provide the necessary information for this referral.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="relative flex flex-col space-y-2">
            {/* Message */}
            {myObject.hasOwnProperty("message") && myObject.message.toLocaleLowerCase() === "true" && (
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">Write a short message to the referrer</FormLabel>
                    <FormControl>
                      <Textarea
                        id="message"
                        name="message"
                        rows={7}
                        cols={70}
                        className="text-base"
                        placeholder="Write a short message to the referrer here. . . . . ."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            )}
            {/* PDF */}
            {myObject.hasOwnProperty("pdfs") &&
              myObject.pdfs.map((name, index) => (
                <FormField
                  control={form.control}
                  name={`pdfs.${index}.${name}`}
                  key={index}
                  render={({ field }) => (
                    <FormItem className="flex items-center justify-center gap-5">
                      <FormLabel className="text-center text-sm">{name}</FormLabel>
                      <FormControl>
                        <Input
                          id="resume"
                          name={name}
                          accept=".pdf"
                          type="file"
                          className="ml-auto w-8/12 cursor-pointer"
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
              {myObject.hasOwnProperty("links") &&
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
                            <Icons.gitHub className="h-7 w-7" />
                            <Input {...field} placeholder={name} />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}
            </div>
            <Button
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

{
  /* Message */
}
{
  /* <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-base">Write a short message to the referrer</FormLabel>
                  <FormControl>
                    <Textarea
                      id="message"
                      name="message"
                      rows={7}
                      cols={70}
                      className="text-base"
                      placeholder="Write a short message to the referrer here. . . . . ."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */
}
{
  /* Resume */
}
{
  /* <FormField
              control={form.control}
              name="resume"
              render={({ field }) => (
                <FormItem className="flex items-center justify-center gap-5">
                  <FormLabel className="text-center text-sm">Resume 📄</FormLabel>
                  <FormControl>
                    <Input
                      id="resume"
                      name="resume"
                      accept=".pdf"
                      type="file"
                      className="ml-auto w-8/12 cursor-pointer"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */
}
{
  /* Cover Letter */
}
{
  /* <FormField
              control={form.control}
              name="coverLetter"
              render={({ field }) => (
                <FormItem className="flex items-center justify-center gap-3">
                  <FormLabel className="text-center text-sm">Cover Letter 📝</FormLabel>
                  <FormControl>
                    <Input
                      id="coverLetter"
                      name="coverLetter"
                      accept=".pdf"
                      type="file"
                      className="ml-auto w-8/12 cursor-pointer"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */
}
{
  /* Links */
}
{
  /* <div className="mt-2">
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
                        <div className="flex items-center gap-2">
                          <Icons.gitHub className="h-7 w-7" />
                          <Input {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="my-2"
                onClick={() => append({ value: "" })}>
                Add URL 🔗
              </Button>
            </div> */
}
