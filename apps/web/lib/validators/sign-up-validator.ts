import { z } from "zod";

export const signUpValidator = z.object({
  name: z.string().nonempty("Your full name is required"),
  username: z.string().nonempty("Your username is required").min(5, {
    message: "Username must be at least 5 characters.",
  }),
  email: z.string().email({ message: "Invalid email address" }).nonempty("Your email is required"),
  // password: z.string().nonempty("Your password is required").min(8, {
  //   message: "Password must be at least 8 characters.",
  // }),
  // confirmPassword: z.string().nonempty("Confirm Password is required"),
});
// .refine((data) => data.password === data.confirmPassword, {
//   message: "Password doesn't match",
//   path: ["confirmPassword"],
// });
