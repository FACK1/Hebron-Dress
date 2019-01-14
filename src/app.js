
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

const { User, } = require('./database/models');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.engine(
  'hbs', exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
  })
);

app.get('/', (req, res) => {
  User.findAll().then((users) => {
    res.json(users);
  });
});


module.exports = app;
