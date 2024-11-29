"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useIndexedDBStore } from "use-indexeddb";
import * as z from "zod";

import { Button, Form, FormControl, FormField, FormItem, FormMessage } from "@referrer/ui";

import RichTextEditor from "@/components/Tiptap";

import { request } from "@/lib/axios";
import { postValidator } from "@/lib/validators";

import { useStore } from "@/store/store";

import { TPost } from "@/types/types";

import { sonerToast } from "../soner-toast";

export default function NormalPost() {
  const { data: session } = useSession();
  const router = useRouter();

  const postFromDraft = useStore((state) => state.postFromDraft);

  const { add, getByID, update } = useIndexedDBStore("posts");
  const [draftId, setDraftId] = useState(postFromDraft?.id ?? null); // Use state for draft ID

  const form = useForm<z.infer<typeof postValidator>>({
    resolver: zodResolver(postValidator),
    defaultValues: {
      description: postFromDraft?.body.description ?? "",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["referral"],
    mutationFn: ({ description }: TPost) => {
      return request.post(
        "/posts",
        {
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

  async function onSubmit(values: z.infer<typeof postValidator>) {
    mutate({
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
            body: { ...data, postType: "Post", updatedAt: new Date().toDateString() },
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
      add({ body: { ...data, postType: "Post", updatedAt: new Date().toDateString() } })
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
            <h2 className="mb-3 text-2xl font-bold capitalize tracking-tight">Post what going around !</h2>
            <p className="text-muted-foreground mb-2">
              Post your opinion, about jobs , referrals or anything etc.
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
          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RichTextEditor
                    charactersLimit={1000}
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
        </div>
      </form>
    </Form>
  );
}
