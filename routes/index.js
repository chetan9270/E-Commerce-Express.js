const express = require("express")
const router = express.Router()
// const islogin  = require("../middlewares/islogin")
const productmodel = require("../models/productmodel")
const usermodel = require("../models/usermodel")


router.get("/",async(req,res)=>{
  let products = await productmodel.find()
  res.render("shop", {products})
})

router.get("/addCart/:productid", async (req, res) => {
  try {
    // TEMPORARY: get any user (replace with logged-in user later)
    let user = await usermodel.findOne();

    if (!user) {
      return res.send("No user found — create a user first");
    }

    // Push product to user's cart
    user.cart.push(req.params.productid);
    await user.save();

    // Redirect back to shop page
    res.redirect("/shop");
  } 
  catch (error) {
    console.log(error);
    res.send("Error adding to cart");
  }
});

router.get("/cart",async(req,res)=>{

  const user = await usermodel.findOne().populate("cart");

  res.render("cart",{user})
})




module.exports = router