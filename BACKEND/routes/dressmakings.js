const router = require("express").Router();
let dressmaking = require("../models/dressmaking");

// add details
router.route("/add").post((req,res)=>{
    const machineCode = req.body.machineCode;
    const machineName = req.body.machineName;
    const category = req.body.category;
    const price= req.body.price;
    const condition= req.body.condition;
    const ETAID = req.body.ETAID;
    const maintainanceID = req.body.maintainanceID;

    const newDressmaking= new dressmaking({

        machineCode,
        machineName,
        category,
        price,
        condition,
        ETAID,
        maintainanceID
    })

    newDressmaking.save().then(()=>{
          res.json("details Added!!!")

    }).catch((err)=>{
        console.log(err);
    });
})


//display details
router.route("/").get((req,res)=>{

    dressmaking.find().then((dressmakings)=>{
        res.json(dressmakings)
    }).catch((err)=>{
        console.log(err)
    })
})


//update details
router.route("/update/:id").put(async(req,res)=>{
    let machineId =req.params.id;
    const{machineCode,machineName,category,price,condition,ETAID,maintainanceID}=req.body;

    const updateDressmaking ={
        machineCode,
        machineName,
        category,
        price,
        condition,
        ETAID,
        maintainanceID
    }

    const update = await dressmaking.findByIdAndUpdate(machineId,updateDressmaking).then(()=>{

    res.status(200).send({status:"details updated"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with updating data",error:err.message});
})

})

//delete details
router.route("/delete/:id").delete(async(req,res)=>{
    let machineId= req.params.id;

    await dressmaking.findByIdAndDelete(machineId)
    .then(()=>{
        res.status(200).send({status: "details deleted" });
    }).catch((err)=>{
console.log(err.message);
res.status(500).send({status:"error with delete details",error: err.message});
    })
})


router.route("/get/:id").get(async(req,res)=>{
    let machineId=req.params.id;
    const user = await dressmaking.findById(machineId)
    .then((dressmaking)=>{
        res.status(200).send({status: "details fetched", dressmaking})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with get details",error:err.message});
    })
})

module.exports = router;

