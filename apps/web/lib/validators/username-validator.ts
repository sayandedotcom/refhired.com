import { z } from "zod";

export const userNameValidator = z.object({
  userName: z
    .string()
    .nonempty("Opps !  Your username is required......")
    .min(5, {
      message: "Username must be at least 5 characters !",
    })
    .max(10, {
      message: "Username must be at most 10 characters !",
    }),
});
