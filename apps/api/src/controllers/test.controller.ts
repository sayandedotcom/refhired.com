import { type NextFunction, type Request, type RequestHandler, type Response } from "express";

import TestService from "../services/test.service.js";

class TestController {
  createTest: RequestHandler = async (req: Request<object, object>, res: Response, next: NextFunction) => {
    try {
      const data = await TestService.example();
      res.status(201).json({ data });
    } catch (error) {
      next(error);
    }
  };
  getTest: RequestHandler = (req: Request, res: Response) => {
    res.status(200).json({ message: `Hello from test route with param: ${req.params?.id}` });
  };
}

export const testController = new TestController();
