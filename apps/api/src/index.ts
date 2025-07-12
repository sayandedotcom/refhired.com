// import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";

import { logger } from "@referrer/lib";

// import { env } from "./env";
import { createRouter } from "./routes/index.js";

async function main() {
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
      credentials: true,
    })
  );

  app.use(
    helmet({
      contentSecurityPolicy: false,
    })
  );
  // app.use(cookieParser());

  const PORT = 8000;

  app.listen(PORT, () => {
    createRouter(app);
    console.log(`Server is running on port http://localhost:${PORT}`);

    logger.info(`Server listening on port http://localhost:${PORT}`);
  });
}

main().catch((error) => {
  // logger.error(error);
  process.exit(1);
});

// import cors from "cors";
// import dotenv from "dotenv";
// import express from "express";

// import PostRoute from "./routes/posts.route.js";

// dotenv.config();

// const app = express();
// app.use(cors());

// app.use("/post", PostRoute);
// app.get("/", (req, res) => {
//   res.json(`👋 Hi api-12 teszting ${process.env.NODE_ENV} && ${process.env.BACKEND_PORT}`);
// });
// app.post("/", (req, res) => {
//   res.send(`This is home page with post request ${process.env.NODE_ENV}`);
// });
// // // PORT
// const PORT = process.env.BACKEND_PORT || 9000;
// app.listen(PORT, () => {
//   console.log(`Server is running on PORT: ${PORT}`);
// });
// // import app from "./app.js";

// // const port = 5000;
// // app.listen(port, () => {
// //   /* eslint-disable no-console */
// //   console.log(`Listening: http://localhost:${port}`);
// //   /* eslint-enable no-console */
// // });
