import { NextFunction, Response, Request } from "express";
import { ResponseStatusCode } from "../custom_error/error.enum";
 
export default (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(ResponseStatusCode.internalServerError).json({
    error: {
      message: err.message,
      details: err.stack
  }});
};