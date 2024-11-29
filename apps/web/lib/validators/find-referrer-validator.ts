import { z } from "zod";

export const findReferrerValidator = z.object({
  companyName: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .transform((value) => value.value),
  jobURL: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  jobCode: z.string().optional(),
  description: z.string().nonempty({ message: "Required" }),
  // resume: z.string().optional(),
  // coverLetter: z.string().optional(),
  // urls: z.array(
  //   z.object({
  //     value: z.string().url({ message: "Please enter a valid URL." }),
  //   })
  // ),
});
