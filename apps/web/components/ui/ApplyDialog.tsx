"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "@referrer/ui";

import { applyValidator } from "@/lib/validators";

import { customToast } from "./toast/toasts";

export function ApplyDialog({ children }) {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof applyValidator>>({
    resolver: zodResolver(applyValidator),
    defaultValues: {
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof applyValidator>) {
    console.log(values);
    setOpen(!open);
    customToast("success", "Applied Successfully !", "You have successfully applied for this job.");
  }
  // !form.formState.isSubmitSuccessful;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="w-11/12 md:w-[500px]">
        <DialogHeader>
          <DialogTitle>Best of Luck !</DialogTitle>
          <DialogDescription className="text-base">
            Provide the necessary information for this job.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className=" relative flex flex-col space-y-2">
            {/* Message */}
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
                      cols={80}
                      className="text-base"
                      placeholder="Write a short message to the referrer here. . . . . ."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Resume */}
            <FormField
              control={form.control}
              name="resume"
              render={({ field }) => (
                <FormItem className="flex items-center justify-center gap-5">
                  <FormLabel className="text-center text-base">Resume</FormLabel>
                  <FormControl>
                    <Input
                      id="resume"
                      name="resume"
                      accept=".pdf"
                      type="file"
                      className="w-8/12"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Cover Letter */}
            <FormField
              control={form.control}
              name="coverLetter"
              render={({ field }) => (
                <FormItem className="flex items-center justify-center gap-3">
                  <FormLabel className="text-center text-base">Cover Letter</FormLabel>
                  <FormControl>
                    <Input
                      id="coverLetter"
                      name="coverLetter"
                      accept=".pdf"
                      type="file"
                      className="w-8/12"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              disabled={!form.formState.isValid}
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
