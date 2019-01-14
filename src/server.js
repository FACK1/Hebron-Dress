const { sequelize, } = require('./database/models/');
const app = require('./app.js');

const port = process.env.PORT || 3003;

sequelize.sync().then(() => {
  // ineasted of that query ( select * from users)..
  app.listen(port, () => {
    console.log(`Our app is running on http://localhost:${port}`);
  });
});
