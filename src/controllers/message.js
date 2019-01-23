const nodemailer = require('nodemailer');
require('env2')('config.env');


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hebrondress2019@gmail.com',
    pass: process.env.password,
  },
});

const mailOptions = {
  from: 'hebrondress2019@gmail.com',
  to: 'safaaamro072@gmail.com, ',
  subject: '',
  text: '!',
};

exports.post = (req, res) => {
  const { name, email, message, } = req.body;
  mailOptions.text = message;
  mailOptions.subject = `message from ${name}`;
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.render('contact', { message: 'Sending Message Failed', css: 'contact', });
    } else {
      res.render('contact', { message: 'Message Sent Succesfuly', css: 'contact', });
    }
  });
};
