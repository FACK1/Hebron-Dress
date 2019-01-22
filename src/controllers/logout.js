
exports.get = (req, res) => {
  res.clearCookie('logged_in').render('home', { css: 'style', });
};
