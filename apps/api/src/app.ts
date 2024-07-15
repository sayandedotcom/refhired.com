import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("This is home page.");
});

app.post("/", (req, res) => {
  res.send("This is home page with post request.");
});

// PORT
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
