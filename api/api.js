
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const organizationRoutes = require('./src/routes/routerOrganizations');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', organizationRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
