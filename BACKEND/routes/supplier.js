const router = require("express").Router();
const { request } = require("express");
let Supplier = require("../models/Supplier");

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const nic = req.body.nic;
    const address = req.body.address;
    const adminId = req.body.adminId;

    const newSupplier = new Supplier({

        name,
        email,
        phoneNumber,
        nic,
        address,
        adminId
    })
    
    // Add
    newSupplier.save().then(()=>{
        res.json("Supplier Added")
    }).catch ((err)=>{
        console.log(err);
    })

})

//Get all
router.route("/").get((req,res)=>{

    Supplier.find().then((supplier)=>{
        res.json(supplier)
    }).catch((err)=>{
        console.log(err)
    })
})

// Update
router.route("/update/:id").put(async(req,res)=>{
    let supplierID = req.params.id;
    const {name,email,phoneNumber,nic,address,adminId} = req.body;

    const updateSupplier = { 
        name,
        email,
        phoneNumber,
        nic,
        address,
        adminId
    }

    const update = await Supplier.findByIdAndUpdate(supplierID,updateSupplier).then(()=>{
        res.status(200).send({status: "Supplier Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with Updating Data"});
    })
})

//Delete
router.route("/delete/:id").delete(async (req,res)=>{
    let supplierID = req.params.id;

    await Supplier.findByIdAndDelete(supplierID).then(()=>{
        res.status(200).send({status: "User Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Erroe with delete user", error: err.message});
    })
})

//search
router.route("/get/:id").get(async (req,res)=>{
    let supplierID = req.params.id;

    const user = await Supplier.findById(supplierID).then(()=>{
        res.status(200).send({status: "User fetched"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Erroe with search user", error: err.message});
    })
})


module.exports = router;
