"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";

import { cn } from "@referrer/lib/utils/cn";
import {
  Button,
  Form,
  FormControl,
  FormCustomMessage,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Separator,
  Textarea,
} from "@referrer/ui";

import { Icons } from "@/components/icons/icons";

import { findReferrerValidator } from "@/lib/validators";

import { jobTypeList } from "@/config";

import { Required } from "../required";
import { SelectComponent } from "./select";

export const FindReferrer = () => {
  const form = useForm<z.infer<typeof findReferrerValidator>>({
    resolver: zodResolver(findReferrerValidator),
    defaultValues: {
      company: "",
      jobCode: "",
      jobURL: "",
      description: "",
      resume: "",
      coverLetter: "",
    },
  });

  const { fields, append } = useFieldArray({
    name: "urls",
    control: form.control,
  });

  async function onSubmit(values: z.infer<typeof findReferrerValidator>) {
    console.log(values);
    form.reset();
  }
  return (
    <div className="mb-20">
      <div className="mx-auto my-5 w-11/12">
        <h2 className="mb-3 text-2xl font-bold capitalize tracking-tight">Find referrer</h2>
        <p className="text-muted-foreground mb-2">
          Enter the details for the company you would like to referred to. You can add a unique bio and
          important links to ttract referrers.
        </p>
        <Separator />
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto flex w-11/12 flex-col justify-center gap-6">
          {/* Company */}
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Company <Required />
                </FormLabel>
                <SelectComponent
                  createAble={true}
                  isMulti={false}
                  value={field.value}
                  options={jobTypeList}
                  onChange={field.onChange}
                  placeholder="Select company"
                  {...field}
                />
                <FormDescription>Select the company you like to get referral.</FormDescription>
                {/* <FormMessage /> */}
                <FormCustomMessage>Required</FormCustomMessage>
              </FormItem>
            )}
          />
          {/* Job Code */}
          <FormField
            control={form.control}
            name="jobCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Job Code
                  <Required />
                </FormLabel>
                <FormControl>
                  <Input placeholder="Job Code" type="text" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Job codes are individualized sets of numbers assigned to different jobs in order to identify
                  which class a position belongs to.
                </FormDescription>
              </FormItem>
            )}
          />
          {/* Job URL */}
          <FormField
            control={form.control}
            name="jobURL"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job URL</FormLabel>
                <FormControl>
                  <Input placeholder="Job URL" type="text" {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Please visit the companies <span className="leading-3 underline">career site</span> and find
                  the find you would like to refer to. Once you find the job you are interested in, copy the
                  url and paste it here.
                </FormDescription>
              </FormItem>
            )}
          />
          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Write a description <Required />
                </FormLabel>
                <FormControl>
                  <Textarea
                    className="rounded-radius h-32 md:text-lg"
                    placeholder="Write here. . . . . . ."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>Write a description to the referrer.</FormDescription>
              </FormItem>
            )}
          />
          <div className="mx-auto flex w-full flex-col items-center justify-center">
            <div>
              {/* Resume */}
              <FormField
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
              />
              {/* Cover Letter */}
              <FormField
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
              />
            </div>
            <div className="mt-2">
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
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Button className="bg-foreground my-2 w-6/12" type="submit">
              Post
            </Button>
            <Button className="bg-foreground my-2 w-6/12">Save as Draft</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
