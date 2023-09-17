import { z } from "zod";

export const findReferrerValidator = z.object({
  company: z
    .object({
      value: z.string(),
      label: z.string(),
    })
    .transform((value) => value.value),
  jobCode: z.string().nonempty("Required"),
  jobURL: z.string().url({ message: "Please enter a valid URL." }),
  description: z.string().nonempty("Description is required"),
  resume: z.string().url({ message: "Please enter a valid URL." }),
  coverLetter: z.string().url({ message: "Please enter a valid URL." }),
  urls: z.array(
    z.object({
      value: z.string().url({ message: "Please enter a valid URL." }).nonempty("Required"),
    })
  ),
});
