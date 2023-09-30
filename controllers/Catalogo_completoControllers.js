const Catalogo_completo_view = require('../models/Catalogo_completo');
const { Op } = require('sequelize');
const path = require('path');
// Ruta relativa de la carpeta "img"
const carpetaImg = '../img/';

// Controlador para listar todo el catálogo.
const listarCatalogo = async (req, res) => {
  try {

    const allCatalogo = await Catalogo_completo_view.findAll();

    // Modifica Ruta absoluta antes de enviarla
    const allCatalogoRutaAbsoluta = allCatalogo.map((catalogo) => {
      return {
        ID: catalogo.ID,
        poster: path.join(__dirname, carpetaImg) + catalogo.poster,
        titulo: catalogo.titulo,
        categoria: catalogo.categoria,
        genero: catalogo.genero,
        resumen: catalogo.resumen,
        temporadas: catalogo.temporadas,
        reparto: catalogo.reparto,
        trailer: catalogo.trailer
      };
    });
    
    allCatalogo.length !== 0 ? res.status(200).json(allCatalogoRutaAbsoluta)
      : res.status(404).json({ error: "No se encontro el Catálogo." });

  } catch (error) {
    res.status(500).json({
      error: 'Error en el servidor',
      description: error.message
    });
  }
};

// Controlador para obtener un catalogo por su ID
const obtenerCatalogo = async (req, res) => {
  const catalogo_id = req.params.id;
  try {
    const catalogo = await Catalogo_completo_view.findByPk(catalogo_id);
    if (!catalogo) {
      return res.status(404).json({ error: "Catálogo no encontrado" });
    }
    res.json(catalogo);
  } catch (error) {
    console.error("Error al obtener el catálogo:", error);
    res.status(500).json({ error: "Error al obtener el catálogo" });
  }
};

// Filtrar por nombre o parte del nombre del Campo Titulo
const filtroParcialTotalTitulo = async (req, res) => {
  try {
    const { query } = req.params;
    const titulo = await Catalogo_completo_view.findAll({
      where: {
        titulo: {
          [Op.like]: `%${query}%`,
        },
      },
    });

    titulo.length !== 0 ? res.status(200).json(titulo)
      : res.status(404).json({ error: "No se encontraron titulo para listar." });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor', description: error.message });
  }
}

// Filtrar por género del catálogo
const filtroGenero = async (req, res) => {
  try {
    const { query } = req.params;
    const genero = await Catalogo_completo_view.findAll({
      where: {
        genero: {
          [Op.like]: `%${query}%`,
        },
      },
    });

    genero.length !== 0 ? res.status(200).json(genero)
      : res.status(404).json({ error: "No se encontraron generos para listar." });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor', description: error.message });
  }
}

// Filtrar por serie - película o cualquier otra categoría
const filtroCategoria = async (req, res) => {
  try {
    const { query } = req.params;
    const categoria = await Catalogo_completo_view.findAll({
      where: {
        categoria: query,
      },
    });

    categoria.length !== 0 ? res.status(200).json(categoria)
      : res.status(404).json({ error: "No se encontraron categorias para listar." });
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor', description: error.message });
  }
}

module.exports = {
  listarCatalogo,
  obtenerCatalogo,
  filtroParcialTotalTitulo,
  filtroGenero,
  filtroCategoria
}