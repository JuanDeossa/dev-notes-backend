// src/middleware/auth.middleware.ts

import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { envs } from "../config/envs";

const { JWT_SECRET } = envs;

declare global {
  namespace Express {
    interface Request {
      userId?: string; // Declaración de sobrecarga para incluir userId opcionalmente
    }
  }
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error("JWT verification error:", err);
      res.status(403).json({ message: "Forbidden" });
      return;
    }

    // Agregar el userId decodificado al objeto de solicitud para que los controladores posteriores puedan acceder a él
    req.userId = (decoded as any)?.userId || "";
    next();
  });
};
