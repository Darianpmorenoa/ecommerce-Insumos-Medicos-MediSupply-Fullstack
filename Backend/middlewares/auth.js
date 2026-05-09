const jwt = require("jsonwebtoken");
require("dotenv").config();


// VALIDAR TOKEN
const validateToken = (req, res, next) => {

  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({
      message: "Token no proporcionado"
    });

  try {
 const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
 req.user = decodedToken;
 next();

  } catch (error) {

    return res.status(401).json({
      message: "Token inválido"
    });
  }
};


// VALIDAR ADMIN
const verifyAdmin = (req, res, next) => {

  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) return res.status(401).json({
      message: "Token no proporcionado"
    });

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);

    if (user.rol !== "admin") {

      return res.status(403).json({
        message: "No tienes permisos para realizar esta acción"
      });
    }

    next();

  } catch (error) {
    return res.status(401).json({
      message: "Token inválido"
    });

  }

};


module.exports = {
  validateToken,
  verifyAdmin
};
