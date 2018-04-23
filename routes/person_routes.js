
let express = require('express');
let routes = express.Router();
let person_controller = require('../controllers/person_controller')


//Hier schrijven we router endpoints (GET, POST, PUt ETC.)

routes.get('/persons', person_controller.readPersonfunction)
routes.post('/persons', person_controller.createPersonfunction)
routes.delete('/persons', person_controller.deletePerson)
routes.put('/persons', person_controller.updatePerson)

module.exports = routes;