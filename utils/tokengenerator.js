require("dotenv").config();


const jwt = require("jsonwebtoken");

genarateToken = (user)=>{
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_KEY );
}

module.exports = { genarateToken };