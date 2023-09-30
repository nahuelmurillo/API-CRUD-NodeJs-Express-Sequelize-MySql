const Sequelize = require("sequelize");
const { db } = require("../config/db");

const categoria = db.define('categoria', {
    categoria_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    catNombre: {
        type: Sequelize.STRING(100),
    }

}, { tableName: "categorias", timestamps: false });

module.exports = categoria;


