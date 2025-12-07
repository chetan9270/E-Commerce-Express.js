require("dotenv").config();

const path = require("path")
const express = require("express")
const app = express()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const session = require("express-session")
const flash = require("connect-flash")

const db = require("./config/mongooseConnection")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));


let usermodel = require("./models/usermodel")
let productmodel = require("./models/productmodel")

let userRouter = require("./routes/userRouter")
let ownerRouter = require("./routes/ownerRouter")
let productRouter = require("./routes/productRouter")
let indexRoute = require("./routes/index")

app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use(flash())



app.use("/product",productRouter)
app.use("/user",userRouter)
app.use("/owner",ownerRouter)
app.use("/shop",indexRoute)







app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
