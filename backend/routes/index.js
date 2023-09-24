const router = require("express").Router();
const authRouter = require("./auth");

router.get("/", (req, res) => {
  console.log("this is main router");
  res.send("this is main router");
});

router.use("/auth", authRouter);

module.exports = router;
