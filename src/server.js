const { sequelize, } = require('./database/models/');
const app = require('./app.js');

const port = process.env.PORT || 3004;
sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Our app is running on http://localhost:${port}`);
  });
});
