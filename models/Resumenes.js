const Sequelize = require("sequelize");
const { db } = require("../config/db");

const resumen = db.define('resumen', {
    resumen_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    resResumen: {
        type: Sequelize.TEXT
    }

}, { tableName: "resumenes", timestamps: false });

module.exports = resumen;


