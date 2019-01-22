exports.pageNotFound = (req, res) => {
  res.status(404);
  res.render('error_404');
};

exports.serverError = (err, req, res, next) => {
  res.status(500);
  console.log(err);
  res.render('error');
};
