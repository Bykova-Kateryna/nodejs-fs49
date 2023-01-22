const register = require("./register");
const login = require("./login");
const getCurrentUser = require("./getCurrentUser");
const logout = require("./logout");
const updateSubscription = require("./updateSubscription");
const changeAvatars = require("./changeAvatare");
const verification = require("./verification");
const resendVerifyMessage = require("./resendVerifyMessage");

module.exports = {
  register,
  login,
  getCurrentUser,
  logout,
  updateSubscription,
  changeAvatars,
  verification,
  resendVerifyMessage,
};
