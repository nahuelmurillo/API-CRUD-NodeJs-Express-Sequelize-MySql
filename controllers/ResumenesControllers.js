const { Resumen } = require('../config/associations');

// Controlador para listar todos los resumenes
const listarResumenes = async (req, res) => {
  try {
    const resumenes = await Resumen.findAll();
    res.json(resumenes);
  } catch (error) {
    console.error("Error al listar los resumenes:", error);
    res.status(500).json({ error: "Error al listar los resumenes" });
  }
};

// Controlador para crear un nuevo resumen
const crearResumen = async (req, res) => {
  const { resResumen } = req.body;
  try {
    const resumen = await Resumen.create({ resResumen });
    res.status(201).json(resumen);
  } catch (error) {
    console.error("Error al crear un resumen:", error);
    res.status(500).json({ error: "Error al crear un resumen" });
  }
};

// Controlador para obtener un Resumen por su ID
const obtenerResumen = async (req, res) => {
  const resumen_id = req.params.id;
  try {
    const resumen = await Resumen.findByPk(resumen_id);
    if (!resumen) {
      return res.status(404).json({ error: "Resumen no encontrado" });
    }
    res.json(resumen);
  } catch (error) {
    console.error("Error al obtener el Resumen:", error);
    res.status(500).json({ error: "Error al obtener el Resumen" });
  }
};

// Controlador para actualizar un resumen por su ID
const actualizarResumen = async (req, res) => {
  const resumen_id = req.params.id;
  const { resResumen } = req.body;
  try {
    const resumen = await Resumen.findByPk(resumen_id);
    if (!resumen) {
      return res.status(404).json({ error: "Resumen no encontrado" });
    }

    await resumen.update({resResumen})

    res.json(resumen);
  } catch (error) {
    console.error("Error al actualizar el resumen:", error);
    res.status(500).json({ error: "Error al actualizar el resumen" });
  }
};

// Controlador para eliminar un resumen por su ID
const eliminarResumen = async (req, res) => {
  const resumen_id = req.params.id;
  try {
    const resumen = await Resumen.findByPk(resumen_id);
    if (!resumen) {
      return res.status(404).json({ error: "Resumen no encontrado" });
    }
    await resumen.destroy();
    res.json({ mensaje: "Resumen eliminado con éxito" });
  } catch (error) {
    console.error("Error al eliminar el resumen:", error);
    res.status(500).json({ error: "Error al eliminar el resumen" });
  }
};

module.exports = {
  listarResumenes,
  crearResumen,
  obtenerResumen,
  actualizarResumen,
  eliminarResumen
}