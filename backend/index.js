const express = require("express");
const mainRouter = require("./routes/index");
const dbconnect = require("./dbconnect");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/api", mainRouter);

dbconnect
  .init()
  .then(() => {
    console.log("dbconneted");

    app.listen(3000, () => {
      console.log("server is running on port no. 3000");
    });
  })
  .catch((e) => {
    console.log(e);
  });
