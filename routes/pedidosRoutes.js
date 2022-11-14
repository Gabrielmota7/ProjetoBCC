const express = require('express')
const router = express.Router()
const PedidosController = require('../controllers/PedidosController')

//helper


//controller
router.get('/contato', PedidosController.contato)
router.get('/servico', PedidosController.servico)
router.get('/pedidos', PedidosController.showPedidos)


module.exports = router