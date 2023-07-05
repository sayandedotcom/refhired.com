import { z } from "zod";

export const normalPostValidator = z.object({
  title: z.string().optional(),
});
