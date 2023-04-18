import { Request, Response, NextFunction } from 'express';
import {ObjectSchema} from 'joi';


export function validateBody<T>(schema: ObjectSchema<T>): ValidationMiddleware {
  return validate(schema, 'body');
}

export function validateParams<T>(schema: ObjectSchema<T>): ValidationMiddleware {
  return validate(schema, 'params');
}

export function validateQuery<T>(schema: ObjectSchema<T>): ValidationMiddleware {
  return validate(schema, 'query');
}

export function validate(schema: ObjectSchema, type: 'body' | 'params' | 'query') {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type], { abortEarly: false });
    if (error) return res.send(error.details.map((detail) => detail.message));
    next();
  };
}

type ValidationMiddleware = (req: Request, res: Response, next: NextFunction) => void;