import express from "express";

import PostRoute from "./routes/post.js";

const app = express();

app.use("/post", PostRoute);
app.get("/", (req, res) => {
  res.json("👋 teszting");
});
app.post("/", (req, res) => {
  res.send(`This is home page with post request ${process.env.NODE_ENV === "production"}`);
});
// // PORT
const PORT = 8000;
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
