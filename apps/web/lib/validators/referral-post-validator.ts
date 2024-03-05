import { z } from "zod";

export const referralPostValidator = z.object({
  content: z.object({
    desc: z.string().nonempty("Desscription is required"),
    img: z.string().optional(),
  }),
  role: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .transform((value) => value.value),
  experience: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .transform((value) => value.value),
  range: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .transform((value) => value.value),
  companyName: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .transform((value) => value.value),
  jobCode: z.string().optional(),
  jobType: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .transform((value) => value.value),
  location: z.enum(["On-site", "Remote", "Hybrid"], {
    required_error: "You need to select a notification type.",
    invalid_type_error: "You need to select a notification type.",
  }),
  countryLocation: z.string().nonempty(),
  stateLocation: z.string().optional(),
  cityLocation: z.string().optional(),
  skills: z
    .array(
      z.object({
        value: z.string().nonempty("Job Type is required"),
        label: z.string().nonempty("Job Type is required"),
      })
    )
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    })
    .transform((value) => value.map((item) => item.value)),
  accept: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  pdfs: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    })
    .transform((value) => JSON.parse(JSON.stringify(value))),
  links: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
  expiresAt: z
    .date({
      required_error: "Expiry of this Application is required.",
    })
    .optional(),
  //! stars: z
  //   .string({
  //     // required_error: "Name is required",
  //     // invalid_type_error: "Name must be a string",
  //   })
  //   .optional()
  //!   .transform((value) => +value),
  stars: z.coerce
    .number({
      // required_error: "Name is required",
      // invalid_type_error: "Name must be a string",
    })
    .optional(),
  //! limit: z
  //   .string({
  //     // required_error: "Name is required",
  //     // invalid_type_error: "Name must be a string",
  //   })
  //   .optional()
  //!   .transform((value) => +value),
  limit: z.coerce
    .number({
      // required_error: "Name is required",
      // invalid_type_error: "Name must be a string",
    })
    .optional(),
});
