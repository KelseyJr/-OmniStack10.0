const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SerachController = require('./controllers/SerachController')

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SerachController.index);
module.exports = routes;