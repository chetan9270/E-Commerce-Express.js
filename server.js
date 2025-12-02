const path = require("path")
const express = require("express")
const app = express()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


let usermodel = require("./models/usermodel")
let productmodel = require("./models/productmodel")



app.get("/",(req,res)=>{
  res.send("<h1>chetan BAchhav<\h1>")

})





app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
