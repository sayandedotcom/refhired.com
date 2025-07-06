import { z } from "zod";

export const commentValidator = z.object({
  comment: z
    .string()
    .nonempty("Message is required")
    .max(300, { message: "Message must not be not more than 300 characters." }),
});
