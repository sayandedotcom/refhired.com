import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json("👋 Post");
});

router.route("/:id").get((req, res) => {
  res.json("👋 Post 1");
});

export default router;
