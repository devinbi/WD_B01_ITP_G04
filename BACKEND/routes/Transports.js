const router =require("express").Router();
const { request } = require("express");
let Transport = require("../MODELS/Transport");

//http://localhost:8070/Transport/add
router.route("/add").post((req,res)=>{
    const Vehicle_Registration_No = req.body.Vehicle_Registration_No;
    const Date = req.body.Date;
    const Driver_Name = req.body.Driver_Name;
    const Description = req.body.Description;
    const Delivery_Status = req.body.Delivery_Status;

    
    const newTransport = new Transport({
        Vehicle_Registration_No,
        Date,
        Driver_Name,
        Description,
        Delivery_Status

    })
    newTransport.save().then(()=>{
        res.json("Transport Added")
    }).catch((err)=>{
        console.log(err);
    })

})

http://localhost:8070/Transport/
router.route("/").get((req,res)=>{
    Transport.find().then((Transport)=>{
        res.json(Transport)
    }).catch((err)=>{
        console.log(err)
    })
})

http://localhost:8070/Transport/update/
router.route("/update/:id").put(async(req,res)=>{
   // console.log("requestttttt", req.body);
    let transeId=req.params.id;
 //  console.log("transport ID",transeId)
    //destructure
    const{Vehicle_Registration_No,Date,Driver_Name,Description,Delivery_Status}=req.body;
    const updateTransport ={
        Vehicle_Registration_No,
        Date,
        Driver_Name,
        Description,
        Delivery_Status
    }
    const update = await Transport.findByIdAndUpdate(transeId,updateTransport).then(()=>{
        res.status(200).send({status: "Transport Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })   
})



router.route("/delete/:id").delete(async(req,res)=>{
    let transeId =req.params.id;

    await Transport.findByIdAndDelete(transeId).then(()=>{
        res.status(200).send({status:"Transport Deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.message})
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let transeId = req.params.id;
    const user =await Transport.findById(transeId).then((Transport)=>{
        res.status(200).send({status:"Transport Fetch", Transport})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get transport." ,error:err.message});
    })
})

module.exports=router;