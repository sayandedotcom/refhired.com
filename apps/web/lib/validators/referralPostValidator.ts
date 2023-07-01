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
