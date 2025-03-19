import AppError from '@shared/errors/AppError';
import { Request, Response, NextFunction } from 'express';

export default class ErrorHandlerMiddleware {
  public static handleError(
    error: Error,
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    // Log do erro para depuração (opcional, mas recomendado)
    console.error(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
}
