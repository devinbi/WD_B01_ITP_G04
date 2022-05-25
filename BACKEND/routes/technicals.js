const router = require("express").Router();
let technical = require("../models/technical");

// add details
router.route("/add").post((req,res)=>{
    const deviceCode = req.body.deviceCode;
    const modelNo = req.body.modelNo;
    const machineName = req.body.machineName;
    const employeeId=req.body.employeeId;
    const price= req.body.price;
    const department= req.body.department;
    const condition = req.body.condition;
   
    

    const newTechnical= new technical({

        deviceCode,
        modelNo,
        machineName,
        employeeId,
        price,
        department,
        condition
        
    })
    console.log("data",req.body);

    newTechnical.save().then(()=>{

          res.json("details Added!!!")

    }).catch((err)=>{
        console.log(err);
    });
})


//display details
router.route("/").get((req,res)=>{

    technical.find().then((technicals)=>{
        res.json(technicals)
    }).catch((err)=>{
        console.log(err)
    })
})


//update details
router.route("/update/:id").put(async(req,res)=>{
    let techID =req.params.id;
    const{DeviceCode,ModelNo,MachineName,employeeId,price,Department,Condition,ETAID,MaintainanceID}=req.body;

    const updateTechnical ={
        DeviceCode,
        ModelNo,
        MachineName,
        employeeId,
        price,
        Department,
        Condition
      
    }

    const update = await technical.findByIdAndUpdate(techID,updateTechnical).then(()=>{

    res.status(200).send({status:"details updated"})
}).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"Error with updating data",error:err.message});
})

})

//delete dfetails
router.route("/delete/:id").delete(async(req,res)=>{
    let techID= req.params.id;

    await technical.findByIdAndDelete(techID)
    .then(()=>{
        res.status(200).send({status: "details deleted" });
    }).catch((err)=>{
console.log(err.message);
res.status(500).send({status:"error with delete details",error: err.message});
    })
})


router.route("/get/:id").get(async(req,res)=>{
    let techID=req.params.id;
    const user = await technical.findById(techID)
    .then((technical)=>{
        res.status(200).send({status: "details fetched", technical})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with get details",error:err.message});
    })
})

module.exports = router;

