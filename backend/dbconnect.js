const mongoose = require("mongoose");

module.exports.init = async () => {
  const mongouri =
    "mongodb+srv://harshdeep542001:travelAndTourism@cluster0.j9ysi6f.mongodb.net/?retryWrites=true&w=majority";
  try {
    mongoose.connect(mongouri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (e) {
    console.log(e);
  }
};
