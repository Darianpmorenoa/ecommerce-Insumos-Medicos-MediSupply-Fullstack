const { Pool } = require('pg');
require('dotenv').config();

if (!process.env.BD_CONNECTION) {
  console.error("❌ Error: BD_CONNECTION no está definida");
}

const pool = new Pool({
  connectionString: process.env.BD_CONNECTION,
  ssl: {
    rejectUnauthorized: false
  }
});

// Probar conexión
pool.query('SELECT NOW()')
  .then(() => {
    console.log('✅ Conexión exitosa a Neon');
  })
  .catch((err) => {
    console.error('❌ Error conectando a Neon:', err);
  });

module.exports = pool;