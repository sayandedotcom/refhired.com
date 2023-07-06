import { z } from "zod";

export const referralPostValidator = z.object({
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
  jobType: z
    .object({
      value: z.string().nonempty("Job Type is required"),
      label: z.string().nonempty("Job Type is required"),
    })
    .refine((value) => value.value, {
      message: "Job Type is required",
    }),
  skills: z
    .array(
      z.object({
        value: z.string().nonempty("Job Type is required"),
        label: z.string().nonempty("Job Type is required"),
      })
    )
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
});
