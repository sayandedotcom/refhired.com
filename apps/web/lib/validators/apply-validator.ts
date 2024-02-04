import { z } from "zod";

export const applyValidator = z.object({
  message: z
    .string()
    .nonempty("Message is required")
    .max(300, { message: "Message must not be more than 300 characters." }),
  pdfs: z.array(
    z.record(z.string().nonempty("Required by the Referrers").url({ message: "Please enter a valid URL." }))
  ),
  links: z.array(
    z.record(
      z
        .string()
        .min(1, { message: "This field cannot be empty." })
        .nonempty("Required by the Referrers")
        .url({ message: "Please enter a valid URL." })
    )
  ),
});
// [key: string]: z.string().url({ message: "Please enter a valid URL." }),

// urls: z
//   .array(
//     z.object({
//       value: z.string().url({ message: "Please enter a valid URL." }),
//     })
//   )
//   .optional(),
// resume: z.string().nonempty("Resume is required").optional(),
// coverLetter: z.string().nonempty("Cover Letter is required").optional(),
// pdf: z
//   .array(
//     z.object({
//       value: z.string().url({ message: "Please enter a valid URL." }),
//     })
//   )
//   .optional(),
