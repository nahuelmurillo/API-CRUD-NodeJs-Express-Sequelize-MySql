const express = require("express");
const app = express();
const { db } = require("./config/db");
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(async (req, res, next) => {
  try {
    await db.authenticate();
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error en el servidor", description: error.message });
  }
});

const CategoriaRouter = require("./routers/CategoriaRouter");
const CatalogoCompletoRouter = require("./routers/Catalogo_completoRouter");
const ResumenRouter = require("./routers/ResumenRouter");
const CatalogoRouter = require("./routers/CatalogoRouter");
const GeneroRouter = require("./routers/GeneroRouter");
const CatalogoGeneroRouter = require("./routers/CatalogoGeneroRouter");
const RepartoRouter = require("./routers/RepartoRouter");
const CatalogoRepartoRouter = require("./routers/CatalogoRepartoRouter");

app.get("/", (req, res) => {
  res.status(200).end("Bienvenido a la API con Node.js, Sequelize y MySQL");
});

// Ruta para manejar las solicitudes a rutas no existentes
app.get("*", (req, res) => {
  res.status(404).send("Lo sentimos, la página que buscas no existe.");
});

app.use("/api", CategoriaRouter);
app.use("/api", CatalogoCompletoRouter);
app.use("/api", ResumenRouter);
app.use("/api", CatalogoRouter);
app.use("/api", GeneroRouter);
app.use("/api", CatalogoGeneroRouter);
app.use("/api", RepartoRouter);
app.use("/api", CatalogoRepartoRouter);


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});



