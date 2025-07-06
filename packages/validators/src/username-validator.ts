import { z } from "zod";

// import { bannedUsernames } from "@/config";

export const userNameValidator = z.object({
  userName: z
    .string()
    .nonempty("Opps !  Your username is required......")
    .min(5, {
      message: "Username must be at least 5 characters !",
    })
    .max(10, {
      message: "Username must be at most 10 characters !",
    })
    .transform((v) => v.toLowerCase()),
});

// .refine((value) => bannedUsernames.map((name) => name === value), {
//   message: "Invalid Username",
// }),
// ! .superRefine(async (val, ctx) => {
//   if (val) {
//     const result = await checkUserName({ userName: val });
//     // if (!result.available) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "already_in_use_error" });
//     // if (result.premium) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "premium_username" });
//     if (result) ctx.addIssue({ code: z.ZodIssueCode.custom, message: "already_in_use_error" });
//   }
// ! });

// .refine((value) => bannedUsernames.map((name) => name === value), {
//   message: "Password doesn't match",
//   path: ["userName"],
// });
