import { z } from "zod";

const envSchema = z.object({
  // REDIS_URI: z.string().url(),
  // JWT_SECRET: z.string().min(1),
  // ABLY_API_KEY: z.string().min(1),
  NODE_ENV: z.enum(["development", "staging", "production"]).optional(),
});

function createEnv(env: NodeJS.ProcessEnv) {
  const safeParseResult = envSchema.safeParse(env);
  if (!safeParseResult.success) throw new Error(safeParseResult.error.message);
  return safeParseResult.data;
}

export const env = createEnv(process.env);
