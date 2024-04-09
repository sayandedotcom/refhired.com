import { Redis } from "ioredis";

const redisClient = new Redis(process.env.VERCEL_KV_URL!);

redisClient.on("error", (error) => {
  console.error("Redis error:", error);
});

export default redisClient;
