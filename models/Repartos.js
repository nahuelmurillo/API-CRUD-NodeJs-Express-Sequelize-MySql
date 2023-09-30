const Sequelize = require("sequelize");
const { db } = require("../config/db");

const reparto = db.define('reparto', {
    reparto_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    repApeNom: {
        type: Sequelize.STRING(100),
    }

}, { tableName: "repartos", timestamps: false });

module.exports = reparto;


