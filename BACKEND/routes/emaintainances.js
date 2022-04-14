const router = require("express").Router();
let emaintainance = require("../models/emaintainance");

// add details
router.route("/add").post((req,res)=>{
    const maintainID = req.body.maintainID;
    const machineCode = req.body.machineCode;
    const date= req.body.date;
    const category = req.body.category;
    const condition= req.body.condition;
    const cost = req.body.cost;
    const EID = req.body.EID;
    const ETAID = req.body.ETAID;
   

    const newEmaintainance= new emaintainance({

        maintainID,
        machineCode,
        date,
        category,
        condition,
        cost,
        EID,
        ETAID
    })

    newEmaintainance.save().then(()=>{
          res.json("details Added!!!")

    }).catch((err)=>{
        console.log(err);
    });
})


//display details
router.route("/").get((req,res)=>{

    emaintainance.find().then((emaintainances)=>{
        res.json(emaintainances)
    }).catch((err)=>{
        console.log(err)
    })
})


//update details
router.route("/update/:id").put(async(req,res)=>{
    let maintainCode =req.params.id;
    const{maintainID,machineCode,date,category,condition,cost,EID,ETAID}=req.body;

    const updateEmaintainance ={
        maintainID,
        machineCode,
        date,
        category,
        condition,
        cost,
        EID,
        ETAID
    }

    const update = await emaintainance.findByIdAndUpdate(maintainCode ,updateEmaintainance).then(()=>{

    res.status(200).send({status:"details updated"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with updating data",error:err.message});
})

})

//delete dfetails
router.route("/delete/:id").delete(async(req,res)=>{
    let maintainCode= req.params.id;

    await emaintainance.findByIdAndDelete(maintainCode)
    .then(()=>{
        res.status(200).send({status: "details deleted" });
    }).catch((err)=>{
console.log(err.message);
res.status(500).send({status:"error with delete details",error: err.message});
    })
})

//get details
router.route("/get/:id").get(async(req,res)=>{
    let maintainCode=req.params.id;
    const user = await emaintainance.findById(maintainCode)
    .then((emaintainance)=>{
        res.status(200).send({status: "details fetched", emaintainance})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with get details",error:err.message});
    })
})

module.exports = router;

