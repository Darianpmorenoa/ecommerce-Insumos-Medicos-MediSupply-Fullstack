require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();


// Middlewares globales
app.use(cors()); 
app.use(express.json());

//prueba de una ruta
app.get("/", (req, res) => {
  res.send("Servidor de MediSupply funcionando correctamente 🚀");
});


// Rutas aquí:


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`SERVER ON PORT ${PORT}`);
});






module.exports = app;