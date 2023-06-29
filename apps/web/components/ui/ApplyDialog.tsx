"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Button,
  Textarea,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@referrer/ui";

const applySchema = z.object({
  message: z
    .string()
    .nonempty("Message is required")
    .max(300, { message: "Message must not be not more than 300 characters." }),
  resume: z.string().nonempty("Resume is required"),
  coverLetter: z.string().nonempty("Cover Letter is required"),
});

export function ApplyDialog({ children }) {
  const [applied, setApplied] = useState(false);
  const form = useForm<z.infer<typeof applySchema>>({
    resolver: zodResolver(applySchema),
    defaultValues: {
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof applySchema>) {
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='w-11/12 md:w-[500px]'>
        <DialogHeader>
          <DialogTitle>Best of Luck !</DialogTitle>
          <DialogDescription className='text-base'>
            Provide the necessary information for this job.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=' space-y-2 flex flex-col relative'>
            <FormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className='text-base'>
                    Write a short message to the referrer
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      id='message'
                      name='message'
                      rows={7}
                      cols={80}
                      className='text-base'
                      placeholder='Write a short message to the referrer here. . . . . .'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='resume'
              render={({ field }) => (
                <FormItem className='flex items-center justify-center gap-5'>
                  <FormLabel className='text-base text-center'>
                    Resume
                  </FormLabel>
                  <FormControl>
                    <Input
                      id='resume'
                      name='resume'
                      accept='.pdf'
                      type='file'
                      className='w-8/12'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='coverLetter'
              render={({ field }) => (
                <FormItem className='flex items-center justify-center gap-3'>
                  <FormLabel className='text-base text-center'>
                    Cover Letter
                  </FormLabel>
                  <FormControl>
                    <Input
                      id='coverLetter'
                      name='coverLetter'
                      accept='.pdf'
                      type='file'
                      className='w-8/12'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button
                className='rounded-full'
                onClick={() => setApplied(!applied)}
                type='submit'>
                Apply !
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// <div className='grid grid-cols-4 items-center gap-2'>
//   <Label htmlFor='resume' className='text-right'>
//     Resume
//   </Label>
//   <Input
//     id='resume'
//     type='file'
//     accept='.pdf'
//     name='resume'
//     className='col-span-3'
//   />
// </div>
