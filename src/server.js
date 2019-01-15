const app = require('./app.js');

const port = process.env.PORT || 3009;
app.listen(port, () => {
  console.log(`Our app is running on http://localhost:${port}`);
});
