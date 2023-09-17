import { z } from "zod";

export const normalPostValidator = z.object({
  title: z.string().optional(),
  countryLocation: z.string().nonempty(),
  stateLocation: z.string().nonempty(),
  cityLocation: z.string().nonempty(),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
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
