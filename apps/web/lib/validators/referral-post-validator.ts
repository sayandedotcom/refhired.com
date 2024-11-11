import { z } from "zod";

// export const referralPostValidator = z.object({
//   content: z.object({
//     desc: z.string().nonempty("Desscription is required"),
//     img: z.string().optional(),
//   }),
//   role: z
//     .object({
//       value: z.string(),
//       label: z.string(),
//     })
//     .transform((value) => value.value),
//   experience: z
//     .object({
//       value: z.string(),
//       label: z.string(),
//     })
//     .transform((value) => value.value),
//   range: z
//     .object({
//       value: z.string(),
//       label: z.string(),
//     })
//     .transform((value) => value.value),
//   companyName: z
//     .object({
//       value: z.string(),
//       label: z.string(),
//     })
//     .transform((value) => value.value),
//   jobCode: z.string().optional(),
//   jobType: z
//     .object({
//       value: z.string(),
//       label: z.string(),
//     })
//     .transform((value) => value.value),
//   location: z.enum(["On-site", "Remote", "Hybrid"], {
//     required_error: "You need to select a notification type.",
//     invalid_type_error: "You need to select a notification type.",
//   }),
//   countryLocation: z.string().nonempty(),
//   stateLocation: z.string().optional(),
//   cityLocation: z.string().optional(),
//   skills: z
//     .array(
//       z.object({
//         value: z.string().nonempty("Job Type is required"),
//         label: z.string().nonempty("Job Type is required"),
//       })
//     )
//     .refine((value) => value.some((item) => item), {
//       message: "You have to select at least one item.",
//     })
//     .transform((value) => value.map((item) => item.value)),
//   accept: z.array(z.string()).refine((value) => value.some((item) => item), {
//     message: "You have to select at least one item.",
//   }),
//   pdfs: z
//     .array(z.string())
//     .refine((value) => value.some((item) => item), {
//       message: "You have to select at least one item.",
//     })
//     .transform((value) => JSON.parse(JSON.stringify(value))),
//   links: z.array(z.string()).refine((value) => value.some((item) => item), {
//     message: "You have to select at least one item.",
//   }),
//   expiresAt: z
//     .date({
//       required_error: "Expiry of this Application is required.",
//     })
//     .optional(),
//   //! stars: z
//   //   .string({
//   //     // required_error: "Name is required",
//   //     // invalid_type_error: "Name must be a string",
//   //   })
//   //   .optional()
//   //!   .transform((value) => +value),
//   stars: z.coerce
//     .number({
//       // required_error: "Name is required",
//       // invalid_type_error: "Name must be a string",
//     })
//     .optional(),
//   //! limit: z
//   //   .string({
//   //     // required_error: "Name is required",
//   //     // invalid_type_error: "Name must be a string",
//   //   })
//   //   .optional()
//   //!   .transform((value) => +value),
//   limit: z.coerce
//     .number({
//       // required_error: "Name is required",
//       // invalid_type_error: "Name must be a string",
//     })
//     .optional(),
// });

export const referralPostValidator = z.object({
  description: z.string().nonempty({ message: "Required" }),
  // jobCompensation: z
  //   .object({
  //     value: z.string(),
  //     label: z.string(),
  //   })
  //   .transform((value) => value.value),
  jobRole: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .transform((value) => value.value),
  jobExperience: z
    .object({
      value: z.number(),
      label: z.string(),
    })
    .transform((value) => value.value),
  companyName: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .transform((value) => value.value),
  jobURL: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  jobCode: z.string().optional(),
  jobType: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .transform((value) => value.value),
  jobLocation:
    // z
    //   .array(
    //     z.object({
    //       value: z.string().nonempty("Job Type is required"),
    //       label: z.string().nonempty("Job Type is required"),
    //     })
    //   )
    //   .refine((value) => value.some((item) => item), {
    //     message: "You have to select at least one item.",
    //   })
    //   .transform((value) => value.map((item) => item.value)),
    z.enum(["On-Site", "Remote", "Hybrid", "Remote Only"], {
      required_error: "You need to select a job type.",
      invalid_type_error: "You need to select a job type.",
    }),
  countryLocation: z.string().optional(),
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
  currency: z
    .object({
      value: z.string().optional(),
      label: z.string().optional(),
    })
    .nullable()
    .optional()
    .transform((value) => value?.value ?? ""),
  // .object({
  //   value: z.string(),
  //   label: z.string(),
  // })
  // .transform((value) => value.value),
  salaryStartingRange: z.coerce
    .string({
      // required_error: "Name is required",
      // invalid_type_error: "Name must be a string",
    })
    .optional()
    // .parse((value) => numeral(value).format("0,0")),
    // .refine((value) => numeral(value).format("0,0"))
    .transform((value) => +value?.replace(/,/g, "")),
  salaryEndingRange: z.coerce
    .string({
      // required_error: "Name is required",
      // invalid_type_error: "Name must be a string",
    })
    .optional()
    .transform((value) => +value?.replace(/,/g, "")),
  equityStartingRange: z.coerce
    .number({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .optional(),
  equityEndingRange: z.coerce
    .number({
      required_error: "Name is required",
      // invalid_type_error: "Name must be a string",
    })
    .optional(),
  noEquity: z.boolean().default(false).optional(),
  // accept: z.array(z.string()).refine((value) => value.some((item) => item), {
  //   message: "You have to select at least one item.",
  // }),
  // pdfs: z
  //   .array(z.string())
  //   .refine((value) => value.some((item) => item), {
  //     message: "You have to select at least one item.",
  //   })
  //   .transform((value) => JSON.parse(JSON.stringify(value))),
  // links: z.array(z.string()).refine((value) => value.some((item) => item), {
  //   message: "You have to select at least one item.",
  // }),
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
  acceptLimit: z.coerce
    .number({
      // required_error: "Name is required",
      // invalid_type_error: "Name must be a string",
    })
    .optional(),
  accept: z.object({
    message: z.boolean(),
    // message: z.array(z.string()).refine((value) => value.some((item) => item), {
    //   message: "You have to select at least one item.",
    // }),
    pdfs: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
    links: z.array(z.string()).refine((value) => value.some((item) => item), {
      message: "You have to select at least one item.",
    }),
  }),
});
