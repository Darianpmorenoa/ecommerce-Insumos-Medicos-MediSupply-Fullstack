import jwt from 'jsonwebtoken';
import 'dotenv/config'; 

// 1. VALIDAR TOKEN (Para usuarios comunes y checkout)
export const validateToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      ok: false,
      message: "Token no proporcionado"
    });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    
    // Avanza de forma segura al controlador (crearBoleta)
    next();
  } catch (error) {
    console.error("Error al validar token:", error.message);
    return res.status(401).json({
      ok: false,
      message: "Token inválido o expirado"
    });
  }
};

// 2. VALIDAR ADMIN (Para el panel de administración)
export const verifyAdmin = (req, res, next) => {
  const authHeader = req.header("Authorization");
  const token = authHeader?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      ok: false,
      message: "Token no proporcionado"
    });
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);

    // Validar el rol guardado en el JWT coincida con 'admin'
    if (user.rol !== "admin") {
      return res.status(403).json({
        ok: false,
        message: "No tienes permisos para realizar esta acción"
      });
    }

    next();
  } catch (error) {
    console.error("Error en verifyAdmin:", error.message);
    return res.status(401).json({
      ok: false,
      message: "Token inválido"
    });
  }
};