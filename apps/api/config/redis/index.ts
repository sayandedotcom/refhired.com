import { Redis } from "ioredis";

export const redisClient = new Redis(process.env.VERCEL_KV_URL as string);
