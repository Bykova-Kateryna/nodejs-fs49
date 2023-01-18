const { User } = require("../../models");

const { RequestError, sendEmail } = require("../../helpers");

const { BASE_URL } = process.env;

const resendVerifyMessage = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw RequestError(400, `Email ${email} not found`);
  }

  if (user.verify) {
    throw RequestError(400, "Verification has already been passed");
  }

  const sendingVerify = {
    to: email,
    subject: "Verify you email",
    html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click here from verify email</a>`,
  };

  sendEmail(sendingVerify);

  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendVerifyMessage;
