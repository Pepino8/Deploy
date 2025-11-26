const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// --- Funcionalidad ejemplo ---
app.get("/", (req, res) => {
  res.send("Servidor funcionando correctamente en Render 🚀");
});

// Endpoint funcional
app.get("/saludo/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  res.json({ mensaje: `Hola, ${nombre}! Bienvenido a Render.` });
});

// Puerto dinámico (Render usa process.env.PORT)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor corriendo en puerto " + PORT));
