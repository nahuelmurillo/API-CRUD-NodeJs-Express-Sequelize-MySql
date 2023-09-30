const { Catalogogenero } = require('../config/associations');

// Controlador para listar todos los registros de catalogosgeneros
const listarCatalogosGeneros = async (req, res) => {
  try {
    const catalogosGeneros = await Catalogogenero.findAll();
    res.json(catalogosGeneros);
  } catch (error) {
    console.error("Error al listar los registros de catalogosgeneros:", error);
    res.status(500).json({ error: "Error al listar los registros de catalogosgeneros" });
  }
};

// Crear un nuevo registro de catalogosgeneros
const crearCatalogoGenero = async (req, res) => {
  const { catalogo_id, genero_id } = req.body;
  try {
    const catalogoGenero = await Catalogogenero.create({ catalogo_id, genero_id });
    res.status(201).json(catalogoGenero);
  } catch (error) {
    console.error("Error al crear un registro de catalogosgeneros:", error);
    res.status(500).json({ error: "Error al crear un registro de catalogosgeneros:" });
  }
};

// Controlador para obtener por su ID en catalogosgeneros
const obtenerCatalogoGenero = async (req, res) => {
  const catalogo_genero_id = req.params.id;
  try {
    const catalogoGenero = await Catalogogenero.findByPk(catalogo_genero_id);
    if (!catalogoGenero) {
      return res.status(404).json({ error: "catalogoGenero no encontrado" });
    }
    res.json(catalogoGenero);
  } catch (error) {
    console.error("Error al obtener catalogoGenero:", error);
    res.status(500).json({ error: "Error al obtener catalogoGenero" });
  }
};

// Controlador para actualizar catalogoGenero por su ID
const actualizarCatalogoGenero = async (req, res) => {
  const catalogo_genero_id = req.params.id;
  const { catalogo_id, genero_id } = req.body;
  try {
    const catalogoGenero = await Catalogogenero.findByPk(catalogo_genero_id);
    if (!catalogoGenero) {
      return res.status(404).json({ error: "CatalogoGenero no encontrado" });
    }

    await catalogoGenero.update({catalogo_id, genero_id})

    res.json(catalogoGenero);
  } catch (error) {
    console.error("Error al actualizar catalogoGenero:", error);
    res.status(500).json({ error: "Error al actualizar catalogoGenero" });
  }
};

// Controlador para eliminar un género por su ID
const eliminarCatalogoGenero = async (req, res) => {
  const catalogo_genero_id = req.params.id;
  try {
    const catalogoGenero = await Catalogogenero.findByPk(catalogo_genero_id);
    if (!catalogoGenero) {
      return res.status(404).json({ error: "CatalogoGenero no encontrado" });
    }
    await catalogoGenero.destroy();
    res.json({ mensaje: "CatalogoGenero eliminado con éxito" });
  } catch (error) {
    console.error("Error al eliminar catalogoGenero:", error);
    res.status(500).json({ error: "Error al eliminar catalogoGenero" });
  }
};

module.exports = {
  listarCatalogosGeneros,
  crearCatalogoGenero,
  obtenerCatalogoGenero,
  actualizarCatalogoGenero,
  eliminarCatalogoGenero
}