const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
mongoose.connect(`${process.env.MONGO_URL}`);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to database");
});

module.exports = db;
