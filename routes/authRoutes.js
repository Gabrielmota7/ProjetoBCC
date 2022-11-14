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

module.exports = router