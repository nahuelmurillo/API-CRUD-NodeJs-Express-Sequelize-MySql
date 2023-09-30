const { Catalogoreparto } = require('../config/associations');

// Controlador para listar todos los registros de Catalogoreparto
const listarCatalogosRepartos = async (req, res) => {
  try {
    const catalogosReparto = await Catalogoreparto.findAll();
    res.json(catalogosReparto);
  } catch (error) {
    console.error("Error al listar los registros de catalogosReparto:", error);
    res.status(500).json({ error: "Error al listar los registros de catalogosReparto" });
  }
};

// Crear un nuevo registro de Catalogoreparto
const crearCatalogoReparto = async (req, res) => {
  const { catalogo_id, reparto_id } = req.body;
  try {
    const catalogoReparto = await Catalogoreparto.create({ catalogo_id, reparto_id });
    res.status(201).json(catalogoReparto);
  } catch (error) {
    console.error("Error al crear un registro de Catalogoreparto:", error);
    res.status(500).json({ error: "Error al crear un registro de Catalogoreparto:" });
  }
};

// Controlador para obtener por su ID en Catalogoreparto
const obtenerCatalogoReparto = async (req, res) => {
  const catalogo_reparto_id = req.params.id;
  try {
    const catalogoReparto = await Catalogoreparto.findByPk(catalogo_reparto_id);
    if (!catalogoReparto) {
      return res.status(404).json({ error: "CatalogoReparto no encontrado" });
    }
    res.json(catalogoReparto);
  } catch (error) {
    console.error("Error al obtener Catalogoreparto:", error);
    res.status(500).json({ error: "Error al obtener Catalogoreparto" });
  }
};

// Controlador para actualizar Catalogoreparto por su ID
const actualizarCatalogoReparto = async (req, res) => {
  const catalogo_reparto_id = req.params.id;
  const { catalogo_id, reparto_id } = req.body;
  try {
    const catalogoReparto = await Catalogoreparto.findByPk(catalogo_reparto_id);
    if (!catalogoReparto) {
      return res.status(404).json({ error: "catalogoReparto no encontrado" });
    }

    await catalogoReparto.update({catalogo_id, reparto_id})

    res.json(catalogoReparto);
  } catch (error) {
    console.error("Error al actualizar catalogoReparto:", error);
    res.status(500).json({ error: "Error al actualizar catalogoReparto" });
  }
};

// Controlador para eliminar un Catalogoreparto por su ID
const eliminarCatalogoReparto = async (req, res) => {
  const catalogo_reparto_id = req.params.id;
  try {
    const catalogoReparto = await Catalogoreparto.findByPk(catalogo_reparto_id);
    if (!catalogoReparto) {
      return res.status(404).json({ error: "CatalogoReparto no encontrado" });
    }
    await catalogoReparto.destroy();
    res.json({ mensaje: "CatalogoReparto eliminado con éxito" });
  } catch (error) {
    console.error("Error al eliminar catalogoReparto:", error);
    res.status(500).json({ error: "Error al eliminar catalogoReparto" });
  }
};

module.exports = {
  listarCatalogosRepartos,
  crearCatalogoReparto,
  obtenerCatalogoReparto,
  actualizarCatalogoReparto,
  eliminarCatalogoReparto
}