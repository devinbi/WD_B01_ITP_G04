const router = require("express").Router();
const { request } = require("express");
let Garment = require("../models/Garment");

router.route("/add").post((req,res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const phoneNumber = req.body.phoneNumber;
    const nic = req.body.nic;
    const address = req.body.address;

    const newGarment = new Garment({

        name,
        email,
        phoneNumber,
        nic,
        address
    })
    
    // Add
    newGarment.save().then(()=>{
        res.json("Garment Added")
    }).catch ((err)=>{
        console.log(err);
    })

})

//Get all
router.route("/").get((req,res)=>{

    Garment.find().then((garment)=>{
        res.json(garment)
    }).catch((err)=>{
        console.log(err)
    })
})

// Update
router.route("/update/:id").put(async(req,res)=>{
    let userID = req.params.id;
    const {name,email,phoneNumber,nic,address} = req.body;

    const updateGarment = { 
        name,
        email,
        phoneNumber,
        nic,
        address
    }

    const update = await Garment.findByIdAndUpdate(userID,updateGarment).then(()=>{
        res.status(200).send({status: "User Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with Updating Data"});
    })
})

//Delete
router.route("/delete/:id").delete(async (req,res)=>{
    let userID = req.params.id;

    await Garment.findByIdAndDelete(userID).then(()=>{
        res.status(200).send({status: "User Deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Erroe with delete user", error: err.message});
    })
})

// //search
router.route("/get/:id").get(async (req,res)=>{
    let userID = req.params.id;

    const user = await Garment.findById(userID).then(()=>{
        res.status(200).send({status: "User fetched"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Erroe with search user", error: err.message});
    })
})


module.exports = router;
