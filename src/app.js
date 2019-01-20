const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const router = require('./controllers');
const helpers = require('./views/helpers/helpers.js');


// const availableDresses = require('./database/queries/getDresses.js');

const { Dress, } = require('./database/models/');

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
    helpers,
  })
);
app.get('/search', (req, res) => {
// search query
  const { color, size, status, } = req.query;
  let selected = color;
  let sizeSel = size;
  let for_rent; let for_sale;
  if (color === 'color') {
    selected = { $like: '%%', };
  } if (size === 'size') {
    sizeSel = { $like: '%%', };
  }
  if (status === 'rent') {
    for_rent = true;
    for_sale = false;
  }
  if (status === 'sale') {
    for_rent = false;
    for_sale = true;
  }
  if (status === 'both' || status === 'status') {
    for_rent = true;
    for_sale = true;
  }
  Dress.findAll(
    {
      where: {
        color: selected, size: sizeSel, for_rent, for_sale,
      },
    }
  ).then((dresses) => {
    res.send(dresses);
  }).catch((error) => {
    res.send(error);
  });
});
app.use(router);
module.exports = app;
