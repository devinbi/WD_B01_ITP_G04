const router = require("express").Router();
const { request } = require("express");
let Item = require("../models/Item");

router.route("/add").post((req,res)=>{
    console.log("requess", req.body);

    //const{itemName,itemQuantity,unitPrice,totalCost,adminId} = req.body;
    const itemName = req.body.name;
    const itemQuantity =req.body.quantity;
    const unitPrice = req.body.price;
    const totalCost = req.body.cost;

    


    // const itemQuantity =Number(req.body.itemQuantity);
    // const unitPrice = Number(req.body.unitPrice);
    // const totalCost = Number(req.body.totalCost);
     const adminId = req.body.adminid;

    const newItem = new Item({

        itemName,
        itemQuantity,
        unitPrice,
        totalCost,
        adminId
    })
    
    // Add
    newItem.save().then(()=>{
        res.json("Item Added")
    }).catch ((err)=>{
        console.log(err);
    })

})

//Get all
router.route("/").get((req,res)=>{

    console.log("Fetch Data");

    Item.find().then((item)=>{
        res.json(item)
    }).catch((err)=>{
        console.log(err)
    })
})

// Update
router.route("/update/:id").put(async(req,res)=>{
    let itemID = req.params.id;
    const {itemName,itemQuantity,unitPrice,totalCost,adminId} = req.body;

    const updateItem = { 
        itemName,
        itemQuantity,
        unitPrice,
        totalCost,
        adminId
    }

    const update = await Item.findByIdAndUpdate(itemID,updateItem).then(()=>{
        res.status(200).send({status: "Item Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with Updating Data"});
    })
})

//Delete
router.route("/delete/:id").delete(async (req,res)=>{
    let itemID = req.params.id;

    await Item.findByIdAndDelete(itemID).then(()=>{
        res.status(200).send({status: "Item Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Erroe with delete user", error: err.message});
    })
})

//search
router.route("/get/:id").get(async (req,res)=>{
    let itemID = req.params.id;

    const user = await Item.findById(itemID).then(()=>{
        res.status(200).send({status: "User fetched"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Erroe with search user", error: err.message});
    })
})


module.exports = router;
