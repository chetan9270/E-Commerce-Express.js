 const express = require("express")
 const router = express.Router()
 const usermodel = require("../models/usermodel")
 const bcrypt = require("bcrypt");
 const jwt = require("jsonwebtoken");
 const cookieParser = require('cookie-parser');
 const {genarateToken} = require("../utils/tokengenerator");
 
 
 
 
 RegisterController = async (req, res) => {
  try {
    let { fullname, Email, password } = req.body;
    let user = await usermodel.findOne({Email:Email})

    if(user){
      return res.send("you have alreay register").status(500)
    }

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, async (err, hash) => {

        if (err) return res.send(err.message);

        else {
          let user = await usermodel.create({
            fullname,
            Email,
            password: hash
          });

          res.send("You have successfully registered");
        }

      });
    });

  } catch (err) {
    console.log(err.message);
  }
};


 loginController = async (req,res)=>{    // ✅ FIXED: must be async
  let { password, fullname } = req.body;

  let user = await usermodel.findOne({ fullname });  // ✅ FIXED: missing await

  if (!user) {
    return res.status(500).send("User not found");
  }

  bcrypt.compare(password, user.password, (err, result) => {

    if (result) {
      const Token = genarateToken(user)
      res.cookie("Token", Token);   // ✅ FIXED incorrect assignment
      res.status(200).send("you have sucessfully login")
    } else {
        res.send("you have suceesfully login")
    }
  });
}


module.exports = {RegisterController , loginController}