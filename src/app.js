const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const router = require('./controllers');
const helpers = require('./views/helpers/helpers.js');
const cookieParser = require('cookie-parser')




// const availableDresses = require('./database/queries/getDresses.js');

const { Dress, } = require('./database/models/');

const app = express();
app.use(cookieParser());

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
app.use(router);
module.exports = app;
