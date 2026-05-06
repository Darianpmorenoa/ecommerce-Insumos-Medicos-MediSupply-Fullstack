require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Middlewares globales
app.use(cors()); 
app.use(express.json());

// Rutas aquí:


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`SERVER ON PORT ${PORT}`);
});


app.get("/", (req, res) => {
  res.send("Servidor de MediSupply funcionando correctamente 🚀");
});




module.exports = app;