import dotenv from "dotenv";

dotenv.config();

const BACKEND_PORT = process.env.BACKEND_PORT;

// You may use this as a boolean value for different situations
const env = {
  development: process.env.NODE_ENV === "development",
  test: process.env.NODE_ENV === "test",
  production: process.env.NODE_ENV === "production",
};

console.log(BACKEND_PORT, "====================================");

export { BACKEND_PORT, env };
