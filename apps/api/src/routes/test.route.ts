import express from "express";

import { testController } from "../controllers/test.controller.js";

const testRouter = express.Router({ mergeParams: true });

testRouter.get("/", testController.createTest);

testRouter.route("/:id").get(testController.getTest);

export default testRouter;
