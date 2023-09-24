const router = require("express").Router();
const signupController = require("../controller/auth/signupController");
const loginController = require("../controller/auth/loginController");

router.get("/", (req, res) => {
  res.send("this is auth router");
});

router.post("/signup", signupController);
router.post("/login", loginController);

module.exports = router;
