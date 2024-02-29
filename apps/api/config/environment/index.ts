// import dotenv from "dotenv";

// dotenv.config();

const port = process.env.PORT;

// You may use this as a boolean value for different situations
const env = {
  development: process.env.NODE_ENV === "development",
  test: process.env.NODE_ENV === "test",
  staging: process.env.NODE_ENV === "staging",
  production: process.env.NODE_ENV === "production",
};

console.log("port===========================", port);

// module.exports = port;
// module.exports = env;

export { port, env };
