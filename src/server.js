const { sequelize, } = require('./database/models/');
const app = require('./app.js');

const port = process.env.PORT || 3006;
// sync the models with the database
sequelize.sync({ force: false, }).then(() => {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Our app is running on http://localhost:${port}`);
  });
});
