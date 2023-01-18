const sgdMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgdMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = (data) => {
  const email = { ...data, from: "bykova.kateryna@gmail.com" };
  return sgdMail
    .send(email)
    .then(() => console.log("email send"))
    .catch((error) => console.log(error.message));
};

module.exports = sendEmail;
