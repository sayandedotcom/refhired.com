"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useIndexedDBStore } from "use-indexeddb";
import * as z from "zod";

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
} from "@referrer/ui";

import RichTextEditor from "@/components/Tiptap";

import { request } from "@/lib/axios";
import { findReferrerValidator } from "@/lib/validators";

import { companyList } from "@/config";

import { useStore } from "@/store/store";

import { TFindReferralPost } from "@/types/types";

import { Required } from "../required";
import { sonerToast } from "../soner-toast";
import { SelectComponent } from "./select";

export default function FindReferrer() {
  const { data: session } = useSession();

  const router = useRouter();
  const findReferrerPostFromDraft = useStore((state) => state.findReferrerPostFromDraft);
  const { add, getByID, update } = useIndexedDBStore("posts");
  const [draftId, setDraftId] = useState(findReferrerPostFromDraft?.id ?? null); // Use state for draft ID

  const form = useForm<z.infer<typeof findReferrerValidator>>({
    resolver: zodResolver(findReferrerValidator),
    defaultValues: {
      companyName: findReferrerPostFromDraft?.body.companyName ?? "",
      jobCode: findReferrerPostFromDraft?.body.jobCode ?? "",
      jobURL: findReferrerPostFromDraft?.body.jobURL ?? "",
      description: findReferrerPostFromDraft?.body.description ?? "",
      // resume: "",
      // coverLetter: "",
    },
  });

  // const { fields, append } = useFieldArray({
  //   name: "urls",
  //   control: form.control,
  // });

  const { mutate, isPending } = useMutation({
    mutationKey: ["referral"],
    mutationFn: ({ companyName, jobCode, jobURL, description }: TFindReferralPost) => {
      return request.post(
        "/posts/find-referrer",
        {
          companyName,
          jobCode,
          jobURL,
          description,
        },
        {
          headers: {
            Authorization: session?.user?.refresh_token && `Bearer ${session?.user?.refresh_token}`,
          },
        }
      );
    },
    onSuccess(data, variables) {
      sonerToast({
        severity: "success",
        title: "Sucess !",
        message: data.data.message,
      });
      router.push("/home");
      form.reset();
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

  async function onSubmit(values: z.infer<typeof findReferrerValidator>) {
    mutate({
      companyName: values.companyName,
      jobCode: values.jobCode,
      jobURL: values.jobURL,
      description: values.description,
    });
  }

  const saveDraft = async () => {
    const data = form.getValues();
    if (draftId) {
      try {
        // Fetch existing draft by ID
        const existingDraft = await getByID(draftId);

        if (existingDraft) {
          // Update the draft if it exists
          update({
            //@ts-ignore
            ...existingDraft,
            body: { ...data, postType: "Find Referrer", updatedAt: new Date().toDateString() },
          })
            // .then(() => console.log("Draft updated"))
            .catch(console.error);

          sonerToast({
            severity: "success",
            title: "Sucess !",
            message: "Your draft has been sucessfully updated",
          });
        } else {
          sonerToast({
            severity: "error",
            title: "Sucess !",
            message: "Draft not found for update!",
          });
        }
      } catch (error) {
        sonerToast({
          severity: "error",
          title: "Sucess !",
          message: "Error fetching draft:",
        });
        console.error("Error fetching draft:", error);
      }
    } else {
      // Add a new draft if no ID is available
      add({ body: { ...data, postType: "Find Referrer", updatedAt: new Date().toDateString() } })
        .then((id) => {
          console.log("Draft added with ID:", id);
          setDraftId(id); // Save the ID for future updates
        })
        .catch(console.error);

      sonerToast({
        severity: "success",
        title: "Sucess !",
        message: "Your post has been sucessfully added to draft",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto mb-20 flex flex-col justify-center gap-6">
        <div className="bg-muted sticky top-0 z-50 mx-auto my-5 flex w-[98%] justify-between rounded-md p-5">
          <div>
            <h2 className="mb-3 text-2xl font-bold capitalize tracking-tight">Find referrer</h2>
            <p className="text-muted-foreground mb-2">
              Enter the details for the company you would like to referred to. You can add a unique bio and
              important links to ttract referrers.
            </p>
          </div>
          <div className="flex items-start justify-center gap-3">
            <Button className="bg-foreground my-2 rounded-full lg:w-40" isLoading={isPending} type="submit">
              Publish
            </Button>
            <Button onClick={saveDraft} type="button" className="bg-foreground my-2 rounded-full lg:w-40">
              Save as Draft
            </Button>
          </div>
        </div>
        <div className="mx-auto flex w-11/12 flex-col justify-center gap-6">
          {/* Conpany Name */}
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Conpany Name
                  <Required />
                </FormLabel>
                <SelectComponent
                  createAble={true}
                  isMulti={false}
                  value={field.value}
                  options={companyList}
                  onChange={field.onChange}
                  placeholder="Select Conpany Name"
                  {...field}
                />
                {/* <FormMessage /> */}
                <FormCustomMessage>Required</FormCustomMessage>
                <FormDescription>Select the Conpany Name.</FormDescription>
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
          {/* Job Code */}
          <FormField
            control={form.control}
            name="jobCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Code</FormLabel>
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
                  <RichTextEditor
                    charactersLimit={1000}
                    className="min-h-[140px] max-w-full text-base"
                    name="message"
                    placeholder="Write a short message to the referrer here. . . . . ."
                    value={field.value}
                    {...field}
                  />
                  {/* <Textarea
                    className="rounded-radius h-32 md:text-lg"
                    placeholder="Write here. . . . . . ."
                    {...field}
                  /> */}
                </FormControl>
                <FormMessage />
                <FormDescription>
                  Write a description to the referrer. Give links, messages etc
                </FormDescription>
              </FormItem>
            )}
          />
          {/* <div className="mx-auto flex w-full flex-col items-center justify-center">
            <div>
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
          </div> */}
        </div>
      </form>
    </Form>
  );
}
