
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const router = require('./controllers');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false, }));
app.use(express.static(path.join(__dirname, '..', 'public')));


app.engine(
  'hbs', exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
  })
);
app.use(router);
module.exports = app;
