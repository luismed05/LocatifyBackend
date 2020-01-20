const { Router } = require('express')
const usersController = require('./Controllers/usersController')

const rotas = Router();

rotas.get('/users', usersController.index)
rotas.post('/users', usersController.store)


module.exports = rotas;