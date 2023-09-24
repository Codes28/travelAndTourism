const User = require("../../model/user");

const signupController = async (req, res) => {
  // console.log("signupController called");
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const phoneNo = req.body.phoneNo;
  if (!email || !password) {
    res.status(403).send(`email and password are required`);
    return;
  }

  const user = new User({
    username,
    email,
    password,
    phoneNo,
  });
  user.save().then(() => {
    console.log("user added");
  });

  res.status(200).send(`signup successful`);
};

module.exports = signupController;
