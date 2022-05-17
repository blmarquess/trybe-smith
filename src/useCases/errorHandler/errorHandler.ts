import { Request, Response } from "express";

export default class ErrorHandler {
  public exeptionHandler(error: Error, _req: Request, res: Response) {
    console.log(error);
    res.status(500).json({
      message: error.message,
    });
  }
}
