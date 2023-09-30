const { Genero } = require('../config/associations');

// Controlador para listar todos los géneros
const listarGeneros = async (req, res) => {
  try {
    const generos = await Genero.findAll();
    res.json(generos);
  } catch (error) {
    console.error("Error al listar los géneros:", error);
    res.status(500).json({ error: "Error al listar los géneros" });
  }
};

// Controlador para crear un nuevo género
const crearGenero = async (req, res) => {
  const { genNombre } = req.body;
  try {
    const genero = await Genero.create({ genNombre });
    res.status(201).json(genero);
  } catch (error) {
    console.error("Error al crear un género:", error);
    res.status(500).json({ error: "Error al crear un género" });
  }
};

// Controlador para obtener un Género por su ID
const obtenerGenero = async (req, res) => {
  const genero_id = req.params.id;
  try {
    const genero = await Genero.findByPk(genero_id);
    if (!genero) {
      return res.status(404).json({ error: "Género no encontrado" });
    }
    res.json(genero);
  } catch (error) {
    console.error("Error al obtener el Género:", error);
    res.status(500).json({ error: "Error al obtener el Género" });
  }
};

// Controlador para actualizar un género por su ID
const actualizarGenero = async (req, res) => {
  const genero_id = req.params.id;
  const { genNombre } = req.body;
  try {
    const genero = await Genero.findByPk(genero_id);
    if (!genero) {
      return res.status(404).json({ error: "Género no encontrado" });
    }

    await genero.update({genNombre})

    res.json(genero);
  } catch (error) {
    console.error("Error al actualizar el género:", error);
    res.status(500).json({ error: "Error al actualizar el género" });
  }
};

// Controlador para eliminar un género por su ID
const eliminarGenero = async (req, res) => {
  const genero_id = req.params.id;
  try {
    const genero = await Genero.findByPk(genero_id);
    if (!genero) {
      return res.status(404).json({ error: "Género no encontrado" });
    }
    await genero.destroy();
    res.json({ mensaje: "Género eliminado con éxito" });
  } catch (error) {
    console.error("Error al eliminar el género:", error);
    res.status(500).json({ error: "Error al eliminar el género" });
  }
};

module.exports = {
  listarGeneros,
  crearGenero,
  obtenerGenero,
  actualizarGenero,
  eliminarGenero
}