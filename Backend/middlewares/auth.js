/**
 * @api {post} /api/auth/register Registro de Usuario
 * @apiDescription Guarda un nuevo cliente directamente en la tabla USUARIOS.
 */
const register = {
    request_body: {
      rut: "12345678-9",
      nombre: "Juan",
      apellido: "Perez",
      telefono: 987654321,
      email: "juan@gmail.com",
      password: "hashed_password",
      direccion: "Calle Principal 123",
      comuna: "Puente Alto",
      region: "Metropolitana"
    },
    responses: {
      201: { mensaje: "Usuario registrado con éxito" },
      400: { error: "El email ya está en uso" }
    }
  };
  
  /**
   * @api {post} /api/auth/login Inicio de Sesión
   */
  const login = {
    request_body: {
      email: "juan@gmail.com",
      password: "1234"
    },
    responses: {
      200: {
        mensaje: "Login exitoso",
        token: "eyJhbGciOi...",
        usuario: { id: 1, nombre: "Juan", email: "juan@gmail.com" }
      }
    }
  };
  