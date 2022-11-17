const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')

//helper
const checkAuth = require('../helpers/auth').checkAuth

//controller

router.get('/login', AuthController.login)
router.post('/login', AuthController.loginPost)
router.get('/register', checkAuth, AuthController.register)
router.post('/register', AuthController.registerPost)
router.get('/logout', AuthController.logout)
router.get('/home', AuthController.home)
router.get('/servico', AuthController.servico)
router.post('/add', AuthController.createPedidosSave)
router.get('/contato', AuthController.contato)
router.get('/pedidos', AuthController.showPedidos)
//router.get('/view', AuthController.view)

module.exports = router