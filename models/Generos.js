const Sequelize = require("sequelize");
const { db } = require("../config/db");

const genero = db.define('genero', {
    genero_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    genNombre: {
        type: Sequelize.STRING(100),
    }

}, { tableName: "generos", timestamps: false });

module.exports = genero;


