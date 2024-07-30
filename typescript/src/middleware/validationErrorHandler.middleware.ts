import { NextFunction, Response, Request } from "express";
import { ValidationError } from "../custom_error";
import { ResponseStatusCode } from "../custom_error/error.enum";
 
export default (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ValidationError) {
    res.status(ResponseStatusCode.badRequest).json({
      error: {
        message: `Validation Error : ${err.message}`
      },
    });
  } else {
    next(err);
  }
};