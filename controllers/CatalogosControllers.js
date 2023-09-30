const { Catalogo } = require('../config/associations');

// Controlador para listar todos los catálogos
const listarCatalogos = async (req, res) => {
  try {
    const catalogos = await Catalogo.findAll();
    res.json(catalogos);
  } catch (error) {
    console.error("Error al listar los catálogos:", error);
    res.status(500).json({ error: "Error al listar los catálogos" });
  }
};

// Controlador para crear un nuevo catálogo
const crearCatalogo = async (req, res) => {
  const { poster, titulo, categoria_id, resumen_id, temporadas, trailer } = req.body;
  try {
    const catalogo = await Catalogo.create({ poster, titulo, categoria_id, resumen_id, temporadas, trailer });
    res.status(201).json(catalogo);
  } catch (error) {
    console.error("Error al crear un catálogo:", error);
    res.status(500).json({ error: "Error al crear un catálogo" });
  }
};

// Controlador para obtener un catálogo por su ID
const obtenerCatalogo = async (req, res) => {
  const catalogo_id = req.params.id;
  try {
    const catalogo = await Catalogo.findByPk(catalogo_id);
    if (!catalogo) {
      return res.status(404).json({ error: "Catálogo no encontrado" });
    }
    res.json(catalogo);
  } catch (error) {
    console.error("Error al obtener el catálogo:", error);
    res.status(500).json({ error: "Error al obtener el catálogo" });
  }
};

// Controlador para actualizar un catálogo por su ID
const actualizarCatalogo = async (req, res) => {
  const catalogo_id = req.params.id;
  const { poster, titulo, categoria_id, resumen_id, temporadas, trailer } = req.body;
  try {
    const catalogo = await Catalogo.findByPk(catalogo_id);
    if (!catalogo) {
      return res.status(404).json({ error: "Catálogo no encontrado" });
    }

    await catalogo.update({ poster, titulo, categoria_id, resumen_id, temporadas, trailer })

    res.json(catalogo);
  } catch (error) {
    console.error("Error al actualizar el catálogo:", error);
    res.status(500).json({ error: "Error al actualizar el catálogo" });
  }
};

// Controlador para eliminar un catálogo por su ID
const eliminarCatalogo = async (req, res) => {
  const catalogo_id = req.params.id;
  try {
    const catalogo = await Catalogo.findByPk(catalogo_id);
    if (!catalogo) {
      return res.status(404).json({ error: "Catálogo no encontrado" });
    }
    await catalogo.destroy();
    res.json({ mensaje: "Catálogo eliminado con éxito" });
  } catch (error) {
    console.error("Error al eliminar el catálogo:", error);
    res.status(500).json({ error: "Error al eliminar el catálogo" });
  }
};

module.exports = {
  listarCatalogos,
  crearCatalogo,
  obtenerCatalogo,
  actualizarCatalogo,
  eliminarCatalogo
}