const { sequelize, } = require('./database/models/');
const app = require('./app.js');

const port = process.env.PORT || 3009;
sequelize.sync().then(() => {
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Our app is running on http://localhost:${port}`);
  });
});
