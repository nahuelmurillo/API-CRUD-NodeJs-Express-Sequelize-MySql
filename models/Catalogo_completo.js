const { DataTypes } = require('sequelize');
const { db } = require("../config/db");

const Catalogo_completo_view = db.define('Catalogo_completo_view', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    poster: {
        type: DataTypes.STRING,
    },
    titulo: {
        type: DataTypes.STRING,
    },
    categoria: {
        type: DataTypes.STRING,
    },
    genero: {
        type: DataTypes.STRING,
    },
    resumen: {
        type: DataTypes.STRING,
    },
    temporadas: {
        type: DataTypes.STRING,
    },
    reparto: {
        type: DataTypes.STRING,
    },
    trailer: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'catalogo_completo',
    timestamps: false,
});

module.exports = Catalogo_completo_view;