const router = require("express").Router();
let Order = require("../models/order");

//data retrieve 
router.route("/").get((req,res)=>{
    let s = "Active"
    Order.find({OrderStatus:s})
    .then((Order)=>{
        res.json(Order)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router; 