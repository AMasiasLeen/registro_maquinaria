const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const maquinariaRoutes = require('./routes/maquinaria');
app.use('/maquinaria', maquinariaRoutes);

app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  await sequelize.authenticate();
  console.log('Database connected!');
});