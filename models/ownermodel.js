const mongoose = require("mongoose")



const ownerSchema = mongoose.Schema({
  fullname : String ,
  Email : String,
  Product : {
    type : Array,
    default : [],
  },
  gstin : Number,
  password : Number,
  picture : {
    type : String,
  }
 })

module.exports = mongoose.model("owner",ownerSchema) 
  
 
  
