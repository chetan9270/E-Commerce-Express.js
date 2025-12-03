const mongoose = require("mongoose");
const config = require("config");
const dbgr = require("debug")("development:mongoose");

const MONGO_URI = config.get("MONGODB_URI");

mongoose.connect(MONGO_URI)
  .then(() => {
    dbgr("Connected Successfully");
  })
  .catch((err) => {
    console.log("Not Connected", err);
  });

module.exports = mongoose.connection;
