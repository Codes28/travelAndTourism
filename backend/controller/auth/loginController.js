const User = require("../../model/user");

const loginController = async (req, res) => {
  console.log("login called");
  const email = req.body.email;
  const password = req.body.password;
  // console.log(email, password);

  if (!email || !password) {
    res.status(403).send(`email and password are required`);
    return;
  }
  const user = await User.findOne({ email });

  if (!user) {
    res.status(400).send(`user not found`);
    return;
  }
  if (user.password !== password) {
    res.status(401).send(`incorrect password`);
    return;
  }

  res.status(200).send({ user });
};

module.exports = loginController;
