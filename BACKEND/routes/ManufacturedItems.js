const router = require("express").Router();
let ManufacturedItem = require("../models//ManufacturedItem");

//insert
router.route("/add").post((req,res)=>{
    const ItemId = req.body.ItemId;
    const ItemName = req.body.ItemName;
    const Quantity = Number(req.body.Quantity);
    const Material = req.body.Material;
    const Colour =req.body.Colour;
    const Size =req.body.Size;


    const newManufacturedItem = new ManufacturedItem({
        ItemId,
        ItemName,
        Quantity,
        Material,
        Colour,
        Size
    })
 
    newManufacturedItem.save()
    .then(()=>{
        res.json("Manufactured Items Added")
    }).catch((err)=>{
        console.log(err);
    })
})  


//data retrieve 
router.route("/fetch").get((req,res)=>{
    ManufacturedItem.find()
    .then((ManufacturedItems)=>{
        res.json(ManufacturedItems)
    }).catch((err)=>{
        console.log(err);
    })
})




//out of stock data retrieving  
router.route("/Sout").get(async(req,res)=>{
    //select manufactured items where quantity is less than or equals to 50
    ManufacturedItem.find({Quantity: {$lte:50}})
    .then((ManufacturedItems)=>{
        res.json(ManufacturedItems)
    }).catch((err)=>{
        console.log(err);
    })
})


//update 
router.route("/update/:id").put(async(req,res)=>{
    let itemId = req.params.id; 
    const{ItemId,ItemName,Quantity,Material,Colour,Size} = req.body;

    const updateManufacturedItem = {

        ItemId,
        ItemName,
        Quantity,
        Material,
        Colour,
        Size

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