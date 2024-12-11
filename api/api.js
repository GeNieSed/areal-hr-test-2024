const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const organizationRoutes = require('./src/routes/router-organizations');
const positionsRoutes = require('./src/routes/router-positions');
const departmentRoutes = require('./src/routes/router-departments');
const indexRoutes = require('./src/routes/router-index');
const operationRoutes = require('./src/routes/router-operations');
const typesRoutes = require('./src/routes/routes-types');
const employeeRoutes = require('./src/routes/router-employees');
const addressesRoutes = require('./src/routes/router-addresses');
const passportRouter = require('./src/routes/router-passport');
const filesRouter = require('./src/routes/router-file');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.use('/api', organizationRoutes);
app.use('/api', positionsRoutes);
app.use('/api', departmentRoutes);
app.use('/api', indexRoutes);
app.use('/api', operationRoutes);
app.use('/api', typesRoutes);
app.use('/api', employeeRoutes);
app.use('/api', addressesRoutes);
app.use('/api', passportRouter);
app.use('/api', filesRouter);
app.use('/api', positionsRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
