import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

const errorHandler = function errorHandler(
  err: any,
  req: Request,
  res: Response,
  _next: NextFunction
) {
  if (err instanceof ZodError) {
    return res.status(400).json({
      error: 'Erro de validação',
      issues: err.format(), 
    });
  }

  if (err.status && err.message) {
    return res.status(err.status).json({ error: err.message });
  }

  console.error('Erro inesperado:', err);
  return res.status(500).json({ error: 'Erro interno no servidor' });
}

export default errorHandler;