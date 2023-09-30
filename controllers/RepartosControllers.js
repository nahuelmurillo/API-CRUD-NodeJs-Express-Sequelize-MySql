const { Reparto } = require('../config/associations');

// Controlador para listar todos los Repartos
const listarRepartos = async (req, res) => {
  try {
    const repartos = await Reparto.findAll();
    res.json(repartos);
  } catch (error) {
    console.error("Error al listar los repartos:", error);
    res.status(500).json({ error: "Error al listar los repartos" });
  }
};

// Controlador para crear un nuevo Reparto
const crearReparto = async (req, res) => {
  const { repApeNom } = req.body;
  try {
    const reparto = await Reparto.create({ repApeNom });
    res.status(201).json(reparto);
  } catch (error) {
    console.error("Error al crear un reparto:", error);
    res.status(500).json({ error: "Error al crear un reparto" });
  }
};

// Controlador para obtener un Reparto por su ID
const obtenerReparto = async (req, res) => {
  const reparto_id = req.params.id;
  try {
    const reparto = await Reparto.findByPk(reparto_id);
    if (!reparto) {
      return res.status(404).json({ error: "Reparto no encontrado" });
    }
    res.json(reparto);
  } catch (error) {
    console.error("Error al obtener el reparto:", error);
    res.status(500).json({ error: "Error al obtener el reparto" });
  }
};

// Controlador para actualizar un Reparto por su ID
const actualizarReparto = async (req, res) => {
  const reparto_id = req.params.id;
  const { repApeNom } = req.body;
  try {
    const reparto = await Reparto.findByPk(reparto_id);
    if (!reparto) {
      return res.status(404).json({ error: "Reparto no encontrado" });
    }

    await reparto.update({repApeNom})

    res.json(reparto);
  } catch (error) {
    console.error("Error al actualizar el reparto:", error);
    res.status(500).json({ error: "Error al actualizar el reparto" });
  }
};

// Controlador para eliminar un Reparto por su ID
const eliminarReparto = async (req, res) => {
  const reparto_id = req.params.id;
  try {
    const reparto = await Reparto.findByPk(reparto_id);
    if (!reparto) {
      return res.status(404).json({ error: "Reparto no encontrado" });
    }
    await reparto.destroy();
    res.json({ mensaje: "reparto eliminado con éxito" });
  } catch (error) {
    console.error("Error al eliminar el reparto:", error);
    res.status(500).json({ error: "Error al eliminar el reparto" });
  }
};

module.exports = {
  listarRepartos,
  crearReparto,
  obtenerReparto,
  actualizarReparto,
  eliminarReparto
}