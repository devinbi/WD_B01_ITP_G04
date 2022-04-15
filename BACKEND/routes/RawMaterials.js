const router = require("express").Router();
let RawMaterial = require("../models/RawMaterial");


//insert
router.route("/add").post((req,res)=>{
    const ItemName = req.body.ItemName;
    const Quantity = Number(req.body.Quantity);
    const ItemType = req.body.ItemType;

    const newRawMaterial = new RawMaterial({ 
        ItemName,
        Quantity,
        ItemType
    })
 
    newRawMaterial.save()
    .then(()=>{
        res.json("Raw Material Added")
    }).catch((err)=>{
        console.log(err);
    })
})  


//data retrieve 
router.route("/").get((req,res)=>{
    RawMaterial.find()
    .then((RawMaterials)=>{
        res.json(RawMaterials)
    }).catch((err)=>{
        console.log(err);
    })
})


//update 
router.route("/update/:id").put(async(req,res)=>{
    let itemId = req.params.id; 
    const{ItemName,Quantity,ItemType} = req.body;

    const updateRawItem = {
        ItemName,
        Quantity,
        ItemType
    }   

    const update = await RawMaterial.findByIdAndUpdate(itemId,updateRawItem)
    .then(()=>{
        res.status(200).send({status: "item updated"})
    }).catch((err)=>{
        res.status(500).send({status: "Error with updating data"});
    })
})


//delete
router.route("/delete/:id").delete(async(req,res)=>{
    let itemId = req.params.id; 

    await RawMaterial.findByIdAndDelete(itemId)
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

    const item = await RawMaterial.findById(itemId)
    .then((RawMaterial)=>{
        res.status(200).send({status: "Item fleched", RawMaterial});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with get item", error: err.message});
    })
})

module.exports = router;