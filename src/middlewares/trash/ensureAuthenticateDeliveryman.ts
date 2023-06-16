import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string;
}

export async function ensureAuthenticateDeliveryman(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ error: "Token missing" });
  }

  const [, token ] = authHeader.split(" ");

  try {
    const { sub } = verify(token, '96a284ffc8e6fc5e8ee7671f070bf88118') as IPayload;

    request.id_deliveryman = sub;

    return next();
  } catch (error) {
    return response.status(401).json({ error: "invalid token!" });
  }
}