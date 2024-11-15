import { z } from "zod";

// ! single optional vlue
//z
//     .object({
//       value: z.string().optional(),
//       label: z.string().optional(),
//     })
//     .nullable()
//     .optional()
//     .transform((value) => value?.value ?? ""),
export const filterValidator = z.object({
  postType: z.array(z.string()),
  companyName: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    )
    .optional()
    .transform((value) => value?.map((item) => item.value) ?? []),
  jobType: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    )
    .optional()
    .transform((value) => value?.map((item) => item.value) ?? []),
  jobExperience: z
    .array(
      z.object({
        value: z.number(),
        label: z.string(),
      })
    )
    .optional()
    .transform((value) => value?.map((item) => item.value) ?? []),
  jobRole: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    )
    .optional()
    .transform((value) => value?.map((item) => item.value) ?? []),
  jobLocationType: z.array(z.string()),
  // .array(z.string())
  // .refine((value) => value?.some((item) => item))
  // .optional(),
  skills: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    )
    .optional()
    .transform((value) => value?.map((item) => item.value) ?? []),
  jobURL: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  //  z
  //   .string()
  //   .optional()
  //   .refine((value) => !value || /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})(\/[\w.-]*)*\/?$/.test(value), {
  //     message: "Please provide a valid URL",
  //   }),
  // z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal(""))
  jobCode: z.string().optional(),
});

// export const filterValidator = z.object({
//   postType: z.array(z.string()).refine((value) => value.some((item) => item), {
//     message: "You have to select at least one item.",
//   }),
//   companyName: z
//     .object({
//       value: z.string(),
//       label: z.string(),
//     })
//     .transform((value) => value.value),
//   jobCompensation: z
//     .object({
//       value: z.string(),
//       label: z.string(),
//     })

//     .transform((value) => value?.value),
//   jobRole: z
//     .object({
//       value: z.string(),
//       label: z.string(),
//     })

//     .transform((value) => value?.value),
//   jobExperience: z
//     .object({
//       value: z.string(),
//       label: z.string(),
//     })

//     .transform((value) => value?.value),

//   jobCode: z.string(),
//   jobType: z
//     .object({
//       value: z.string(),
//       label: z.string(),
//     })

//     .transform((value) => value?.value),
//   jobLocation: z.enum(["On-site", "Remote", "Hybrid"], {
//     required_error: "You need to select a job type.",
//     invalid_type_error: "You need to select a job type.",
//   }),
//   skills: z
//     .array(
//       z.object({
//         value: z.string().nonempty("Job Type is required"),
//         label: z.string().nonempty("Job Type is required"),
//       })
//     )
//     .refine((value) => value.some((item) => item))
//     .transform((value) => value.map((item) => item.value)),
// });
