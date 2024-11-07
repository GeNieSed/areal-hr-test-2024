const express = require('express');
const api = express();
const organizationRoutes = require('./scr/routes/routerOrganizations.js');



api.use('/api', organizationRoutes)
// Запуск сервера
api.listen(3001, () => {
    console.log("Сервер запущен на 3000 порту");
});