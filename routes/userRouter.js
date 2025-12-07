const express = require("express")
const router = express.Router()

const { loginController } = require("../controllers/userController");
const { RegisterController } = require("../controllers/userController");
const { logout } = require("../controllers/userController");


router.get("/",(req,res)=>{
  res.render("Register")
})

router.get("/login-page",(req,res)=>{
  res.render("login")
})

router.post("/Register",RegisterController)
router.post("/login",loginController)
router.get("/logout",logout)




  





module.exports = router