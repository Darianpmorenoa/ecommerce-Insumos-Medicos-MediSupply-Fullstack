require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pool = require('./database/conection');
const routes = require('./routes');

const app = express();

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
      console.error('❌ Error conectando a Neon:', err.stack);
  } else {
      console.log('✅ Conexión exitosa a Neon. Base de datos lista.');
  }
});

// --- MIDDLEWARES GLOBALES ---
app.use(cors()); 
app.use(express.json());

// --- RUTAS ---
app.use('/api', routes);

// Ruta de bienvenida para verificar que el servidor corre
app.get("/", (req, res) => {
  res.send("Servidor de MediSupply funcionando correctamente 🚀");
});

// --- INICIO DEL SERVIDOR ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 SERVER ON PORT http://localhost:${PORT}`);
});

module.exports = app;