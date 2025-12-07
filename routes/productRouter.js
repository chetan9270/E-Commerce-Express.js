const express = require("express")
const router = express.Router()
const upload = require("../Config/upload");
let productmodel = require("../models/productmodel")


router.post("/upload", upload.single("image"), async (req, res) => {
 let  {Name , price , discount , bgcolor , panelcolor , textcolor}  = req.body

 let product = await productmodel.create({
  Image : req.file.buffer,
  Name,
  price,
  discount,
  bgcolor,
  panelcolor,
  textcolor

 })

 res.redirect("/owner/admin").send("Product Created Suceefully")
  
});

module.exports = router;


  




