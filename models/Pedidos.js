const { DataTypes } = require('sequelize')

const db = require('../db/conn')


const Pedidos = db.define('Pedidos', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    telefone: {
        type: DataTypes.BIGINT(14),
        require: true,
    },
    assunto: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false,
        require: true,
    },

})

module.exports = Pedidos