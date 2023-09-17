import { z } from "zod";

export const applyValidator = z.object({
  message: z
    .string()
    .nonempty("Message is required")
    .max(300, { message: "Message must not be not more than 300 characters." }),
  resume: z.string().nonempty("Resume is required"),
  coverLetter: z.string().nonempty("Cover Letter is required"),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
});
