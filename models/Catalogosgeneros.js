const Sequelize = require("sequelize");
const { db } = require("../config/db");

const catalogogenero = db.define('catalogogenero', {
    catalogo_genero_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    catalogo_id: {
        type: Sequelize.INTEGER
    },
    genero_id: {
        type: Sequelize.INTEGER
    }

}, { tableName: "catalogosgeneros", timestamps: false });

module.exports = catalogogenero;


