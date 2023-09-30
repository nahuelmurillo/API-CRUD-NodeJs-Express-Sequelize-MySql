const Sequelize = require("sequelize");
const { db } = require("../config/db");

const catalogo = db.define('catalogo', {
    catalogo_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    poster: {
        type: Sequelize.STRING(255),
    },
    titulo: {
        type: Sequelize.STRING(255)
    },
    categoria_id: {
        type: Sequelize.INTEGER,
    },
    resumen_id: {
        type: Sequelize.INTEGER,
    },
    temporadas: {
        type: Sequelize.STRING(100),
    },
    trailer: {
        type: Sequelize.STRING(255)
    }

}, { tableName: "catalogos", timestamps: false });

module.exports = catalogo;


