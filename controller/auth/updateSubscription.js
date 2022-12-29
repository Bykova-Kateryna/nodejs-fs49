const { User } = require("../../models");

const { RequestError } = require("../../helpers");

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const newSubscription = req.body.subscription;
  if (
    newSubscription !== "starter" &&
    newSubscription !== "pro" &&
    newSubscription !== "business"
  ) {
    throw RequestError(
      400,
      "Subscription must be 'starter', 'pro' or 'business'"
    );
  }
  await User.findByIdAndUpdate(_id, { subscription: req.body.subscription });
  const result = await User.findById(_id);

  res.json({ email: result.email, subscription: result.subscription });
};

module.exports = updateSubscription;
