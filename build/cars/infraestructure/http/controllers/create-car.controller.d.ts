import { NextFunction, Request, Response } from 'express';
export declare function createCarController(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;