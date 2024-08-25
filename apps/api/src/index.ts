import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import PostRoute from "./routes/post.js";

dotenv.config();

const app = express();
app.use(cors());

app.use("/post", PostRoute);
app.get("/", (req, res) => {
  res.json(`👋 api-12 teszting ${process.env.NODE_ENV} && ${process.env.BACKEND_PORT}`);
});
app.post("/", (req, res) => {
  res.send(`This is home page with post request ${process.env.NODE_ENV}`);
});
// // PORT
const PORT = process.env.BACKEND_PORT || 9000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
// import app from "./app.js";

// const port = 5000;
// app.listen(port, () => {
//   /* eslint-disable no-console */
//   console.log(`Listening: http://localhost:${port}`);
//   /* eslint-enable no-console */
// });
