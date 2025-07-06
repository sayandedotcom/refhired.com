import { z } from "zod";

export const postValidator = z.object({
  description: z.string().optional(),
});
// countryLocation: z
//   .object({
//     value: z.string(),
//     label: z.string(),
//   })
//   .transform((value) => value.value),
// stateLocation: z
//   .object({
//     value: z.string(),
//     label: z.string(),
//   })
//   .transform((value) => value.value),
// cityLocation: z
//   .object({
//     value: z.string(),
//     label: z.string(),
//   })
//   .transform((value) => value.value),
