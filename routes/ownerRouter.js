const express = require("express")
const router = express.Router()
let ownermodel = require("../models/ownermodel")

router.get("/",(req,res)=>{
  res.render("owner-login")
})

if (process.env.NODE_ENV === "development") {

  router.post("/create", async (req, res) => {
    let owner = await ownermodel.find()

    if (owner.length > 0) {
      return res.status(502).send("you will not create owner")
    }

    // ⛔ FIX 1: This must be INSIDE the POST route
    let { fullname, Email, password } = req.body;

    // ⛔ FIX 2: await must be used
    let createowner = await ownermodel.create({
      fullname,
      Email,
      password,
    })

    console.log(createowner)

    res.send("you have successfully created")
  });

}

router.get("/admin",(req,res)=>{
  res.render("createproducts.ejs")
})



module.exports = router;
