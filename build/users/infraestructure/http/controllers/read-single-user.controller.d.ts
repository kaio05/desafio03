import { Request, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';
export declare function getUserByIdController(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
