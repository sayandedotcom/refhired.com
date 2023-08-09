"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button, Form, FormControl, FormField, FormItem, FormMessage, Textarea } from "@referrer/ui";

import { normalPostValidator } from "@/lib/validators";

export const NormalPost = () => {
  const form = useForm<z.infer<typeof normalPostValidator>>({
    resolver: zodResolver(normalPostValidator),
    defaultValues: {
      title: "",
    },
  });

  async function onSubmit(values: z.infer<typeof normalPostValidator>) {}
  return (
    <div className="mb-20">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto flex w-11/12 flex-col justify-center gap-3">
          {/* Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="h-32 rounded-2xl md:text-lg"
                    placeholder="Write here. . . . . . ."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="bg-foreground" type="submit">
            Post
          </Button>
        </form>
      </Form>
    </div>
  );
};
