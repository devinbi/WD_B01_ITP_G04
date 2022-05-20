const router = require("express").Router();
let Inventory = require("../models/ManufacturedItem");

router.route("/").get((req,res)=>{

    Inventory.find().then((inventory)=>{
        res.json(inventory)
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports = router;