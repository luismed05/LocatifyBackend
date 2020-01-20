const { Router } = require('express')
const usersController = require('./Controllers/usersController')

const rotas = Router();

rotas.post('/users', usersController.store);

rotas.get('/users', usersController.index);



module.exports = rotas;