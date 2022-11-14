const Pedidos = require('../models/Pedidos')
const User = require('../models/User')

module.exports = class PedidosController {
    static async showPedidos(req, res) {
        res.render('pedidos/pedidos')
    }

    static servico(req, res) {
        res.render('pedidos/servico')
    }

    static contato(req, res) {
        res.render('pedidos/contato')
    }

    static home(req, res) {
        res.render('pedidos/home')
    }
}