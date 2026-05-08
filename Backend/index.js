require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();

const productRoutes = require('./routes/product.routes');

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor de MediSupply funcionando correctamente 🚀");
});

app.use('/productos', productRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`SERVER ON PORT ${PORT}`);
});