const router = require("express").Router();
let ManufacturedItem = require("../models//ManufacturedItem");

//insert
router.route("/add").post((req,res)=>{
    const ItemName = req.body.ItemName;
    const Quantity = Number(req.body.Quantity);
    const Material = req.body.Material;
    const Description =req.body.Description;

    const newManufacturedItem = new ManufacturedItem({
        ItemName,
        Quantity,
        Material,
        Description
    })
 
    newManufacturedItem.save()
    .then(()=>{
        res.json("Manufactured Items Added")
    }).catch((err)=>{
        console.log(err);
    })
})  


//data retrieve 
router.route("/").get((req,res)=>{
    ManufacturedItem.find()
    .then((ManufacturedItems)=>{
        res.json(ManufacturedItems)
    }).catch((err)=>{
        console.log(err);
    })
})


//update 
router.route("/update/:id").put(async(req,res)=>{
    let itemId = req.params.id; 
    const{ItemName,Quantity,Material,Description} = req.body;

    const updateManufacturedItem = {
        ItemName,
        Quantity,
        Material,
        Description
    }   

    const update = await ManufacturedItem.findByIdAndUpdate(itemId,updateManufacturedItem)
    .then(()=>{
        res.status(200).send({status: "item updated"})
    }).catch((err)=>{
        res.status(500).send({status: "Error with updating data"});
    })
})


//delete
router.route("/delete/:id").delete(async(req,res)=>{
    let itemId = req.params.id; 

    await ManufacturedItem.findByIdAndDelete(itemId)
    .then(()=>{
        res.status(200).send({status: "Item deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete item", error: err.message});
    })
})


//search
router.route("/get/:id").get(async(req,res)=>{
    let itemId = req.params.id;

    const item = await ManufacturedItem.findById(itemId)
    .then((ManufacturedItem)=>{
        res.status(200).send({status: "Item fleched", ManufacturedItem});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get item", error: err.message});
    })
})

module.exports = router; 