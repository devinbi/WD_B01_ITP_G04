const router = require("express").Router();
const orderDes = require("../models/order");


//View All Drivers data 


router.route("/viewO").get((req,res)=>{
    orderDes.find().then((orderDes)=>{
        res.json(orderDes)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;