import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json(`This is home page with post request ${process.env.NODE_ENV}`);
});

router.route("/:id").get((req, res) => {
  res.json("👋 Post 1");
});

export default router;
