import { z } from "zod";

export const findReferrerValidator = z.object({
  company: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .transform((value) => value.value),
  jobCode: z.string().optional(),
  jobURL: z.string().url({ message: "Please enter a valid URL." }).optional(),
  description: z.string().optional(),
  resume: z.string().optional(),
  coverLetter: z.string().optional(),
  urls: z.array(
    z.object({
      value: z.string().url({ message: "Please enter a valid URL." }),
    })
  ),
});
