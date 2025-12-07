const jwt = require("jsonwebtoken");
const usermodel = require("../models/usermodel");

module.exports = async function islogin(req, res, next) {

  if (!req.cookies || !req.cookies.token) {
    req.flash("Error", "You have to login first");
    return res.redirect("/login");
  }

  try {
    let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);

    let user = await usermodel
      .findOne({ Email: decoded.Email })
      .select("-password");

    req.user = user;
    next();

  } catch (err) {
    req.flash("Error", "Something went wrong");
    return res.redirect("/login");
  }
};
