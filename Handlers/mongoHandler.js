function loadMongo(client) {

const { mongoURL } = require("../config.json");
const mongoose = require("mongoose");

mongoose.set("strictQuery", true)

mongoose
  .connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`[DATABASE] Successfully MongoDB activated.`);
  })
  .catch((err) => {
    console.log("[DATABASE] Failed to login:\n" + err);
  });
}

module.exports = {loadMongo}