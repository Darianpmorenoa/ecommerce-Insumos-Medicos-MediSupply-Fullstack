import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;

// Verificación estricta de la variable de entorno
if (!process.env.DATABASE_URL) {
  console.error("❌ Error: La variable DATABASE_URL no está definida.");
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  //  Render requiere SSL activo para conectarse a Neon en producción
  ssl: process.env.DATABASE_URL.includes('localhost') ? false : { rejectUnauthorized: false }
});

// Prueba de conexión de inmediata al iniciar el servidor
pool.query('SELECT NOW()')
  .then(() => console.log("✅ Conexión exitosa a la base de datos en Neon"))
  .catch((err) => console.error("❌ Error al conectar con Neon:", err));