"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Button,
  Separator,
  Textarea,
  FormDescription,
  Checkbox,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Calendar,
} from "@referrer/ui";
import { cn } from "@referrer/lib/utils/cn";
import { SelectComponent } from "./Select";

const items = [
  {
    id: "shortNote",
    label: "Short Note",
  },
  {
    id: "resume",
    label: "Resume",
  },
  {
    id: "coverLetter",
    label: "Cover Letter",
  },
] as const;

const options = [
  { value: "Full Time", label: "Full Time" },
  { value: "Part Time", label: "Part Time" },
  { value: "Intern", label: "Intern" },
  { value: "Temporary", label: "Temporary" },
  { value: "Contractor", label: "Contractor" },
  { value: "Volunteer", label: "Volunteer" },
  { value: "Freelance", label: "Freelance" },
];

const referralPostSchema = z.object({
  title: z
    .string()
    .nonempty("Title is required")
    .max(250, { message: "Message must not be not more than 250 characters." }),
  desscription: z.string().nonempty("Desscription is required"),
  accept: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  expiresAt: z.date({
    required_error: "Expiry of this Application is required.",
  }),
  // jobType: z.array(z.string()).refine((value) => value.some((item) => item), {
  //   message: "You have to sesssslect at least one item.",
  // }),
  // jobType: z.string({
  //   required_error: "Please select an job type to display.",
  // }),
  jobType: z.object({
    value: z
      .string({
        required_error: "Expiry of this Application is required.",
      })
      .nonempty("Job Type is required"),
  }),
  companyName: z.object({
    value: z
      .string({ required_error: "Company Name is required" })
      .nonempty("Company Name is required"),
  }),
  skills: z.array(
    z.array(
      z
        .object({
          value: z.string(),
          label: z.string(),
        })
        .transform((obj) => obj.value)
    )
  ),
});

export const ReferralPost = () => {
  const form = useForm<z.infer<typeof referralPostSchema>>({
    resolver: zodResolver(referralPostSchema),
    defaultValues: {
      title: "",
      desscription: "",
      accept: ["shortNote", "resume"],
      // jobType: { value: "" },
    },
  });

  console.log(form.watch().skills);

  async function onSubmit(values: z.infer<typeof referralPostSchema>) {
    event.preventDefault();
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='flex flex-col gap-3 justify-center w-11/12 mx-auto'>
          {/* Title */}
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder='Title of the referral.......'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Description */}
          <FormField
            control={form.control}
            name='desscription'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder='Desscription of the referral.......'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Accept */}
          <FormField
            control={form.control}
            name='accept'
            render={() => (
              <FormItem>
                <div className='mb-4'>
                  <FormLabel>Accept</FormLabel>
                  <FormDescription>
                    Select the items you want to accept from applicant.
                  </FormDescription>
                </div>
                <div className='flex items-center justify-center gap-3'>
                  {items.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name='accept'
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className='flex flex-row items-start space-x-3 space-y-0'>
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, item.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== item.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className='font-normal'>
                              {item.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Expires At */}
          <FormField
            control={form.control}
            name='expiresAt'
            render={({ field }) => (
              <FormItem className='flex flex-col'>
                <FormLabel>Expiry of Post</FormLabel>
                <FormDescription>
                  Select the date at which the Post will Expire.
                </FormDescription>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}>
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a Expiry date</span>
                        )}
                        <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className='w-auto p-0' align='start'>
                    <Calendar
                      mode='single'
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Job Type */}
          <FormField
            control={form.control}
            name='jobType'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Joy Type</FormLabel>
                <FormDescription>Select the job type.</FormDescription>
                <SelectComponent
                  createAble={true}
                  isMulti={false}
                  value={field.value}
                  options={options}
                  onChange={field.onChange}
                  placeholder='Select Job Type'
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Skills */}
          <FormField
            control={form.control}
            name='skills'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills</FormLabel>
                <FormDescription>Select the Skills Required.</FormDescription>
                <SelectComponent
                  createAble={true}
                  isMulti={true}
                  value={field.value}
                  options={options}
                  onChange={field.onChange}
                  placeholder='Select Skills'
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <Separator />
          <Button className='bg-foreground' type='submit'>
            Post
          </Button>
        </form>
      </Form>
    </>
  );
};
{
  /* <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder='Select a verified email to display' />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value='m@example.com'>m@example.com</SelectItem>
                    <SelectItem value='m@google.com'>m@google.com</SelectItem>
                    <SelectItem value='m@support.com'>m@support.com</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your
                  <Link href='/examples/forms'>email settings</Link>.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          /> */
}
