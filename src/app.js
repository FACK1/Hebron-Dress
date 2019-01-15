const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

// const availableDresses = require('./database/queries/getDresses.js');

const { Dress, } = require('./database/models/');

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


app.get('/search', (req, res) => {
  const { color, } = req.query;
  let selected = color;
  if (color === 'color') {
    selected = { $like: '%%', };
  } Dress.findAll(
    {
      where: { color: selected, },
    }
  ).then((dresses) => {
    res.send(dresses);
  }).catch((error) => {
    res.send(error);
  });
});

module.exports = app;
