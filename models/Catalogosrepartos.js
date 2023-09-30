const Sequelize = require("sequelize");
const { db } = require("../config/db");

const catalogoreparto = db.define('catalogoreparto', {
    catalogo_reparto_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    catalogo_id: {
        type: Sequelize.INTEGER
    },
    reparto_id: {
        type: Sequelize.INTEGER
    }

}, { tableName: "catalogosrepartos", timestamps: false });

module.exports = catalogoreparto;


