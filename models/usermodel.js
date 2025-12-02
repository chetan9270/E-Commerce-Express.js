const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/user")

const userSchema = mongoose.Schema({
  fullname : String ,
  Email : String,
  cart : {
    type : Array ,
    default : []
  },
  isadmin : Boolean,
  orders : {
    type : Array,
    default : [],
  },
  contact : Number,
  picture : {
    type : String,
  }
})

module.exports = mongoose.model("user",userSchema)