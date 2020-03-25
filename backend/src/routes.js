const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/OngController');
const incidentController = require('./controllers/IncidentController');
const profileController = require('./controllers/ProfileController');
const sessionController = require('./controllers/SessionController');

// const conn = require('./database/connection');

routes.get('/users/:id', function(request, response) {
    const params = request.query;
    console.log(params);

    const paramsRoute = request.params;
    console.log(paramsRoute);

    return response.json(
        {
            evento: 'Semana Omnistack 11.0',
            aluno: 'Anderson Lima*'
        }
    )
});

routes.get('/ongs', ongController.list);
routes.post('/ongs', ongController.create);

routes.get('/profile', profileController.list);

routes.get('/incidents', incidentController.list);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

routes.post('/session', sessionController.login);

module.exports = routes;
