
exports.get = (req, res, next) => {
  const logged = !!req.cookies.logged_in;
  res.render('contact', { css: 'contact', logged, });
};
