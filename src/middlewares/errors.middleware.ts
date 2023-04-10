import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

interface ApplicationError extends Error {
  name: string;
  message: string;
  status?: number;
}

interface ConflictError extends ApplicationError {}
interface DuplicatedEmailError extends ApplicationError {}
interface InvalidCredentialsError extends ApplicationError {}
interface UnauthorizedError extends ApplicationError {}
interface NotFoundError extends ApplicationError {}

function handleApplicationErrors(
  err: ApplicationError,
  req: Request,
  res: Response,
  next: NextFunction,
): Response {
  if (err.name === 'ConflictError' || err.name === 'DuplicatedEmailError') {
    return res.status(httpStatus.CONFLICT).send({ message: err.message });
  }
  if (err.name === 'InvalidCredentialsError' || err.name === 'UnauthorizedError') {
    return res.status(httpStatus.UNAUTHORIZED).send({ message: err.message });
  }
  if (err.name === 'NotFoundError') {
    return res.status(httpStatus.NOT_FOUND).send({ message: err.message });
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: 'Internal Server Error' });
}

export default handleApplicationErrors;