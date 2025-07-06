import { z } from "zod";

export const loginValidator = z.object({
  email: z.string().email({ message: "Invalid email address !" }).nonempty("Required"),
});
