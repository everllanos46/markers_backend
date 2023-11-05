import jwt from "jsonwebtoken";

const secretKey = process.env.SECRET_KEY;

export function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'Acceso no autorizado' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    req.userId = decoded.userId;
    next();
  });
}