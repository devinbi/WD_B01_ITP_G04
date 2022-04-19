const router =require("express").Router();
const { request } = require("express");
let Maintenance = require("../models/Maintenance");

//http://localhost:8070/Maintenance/add
router.route("/add").post((req,res)=>{
    const Maintenance_ID = req.body.Maintenance_ID;
    const Vehicle_Registration_No = req.body.Vehicle_Registration_No;
    const Date = req.body.Date;
    const Description = req.body.Description;
    const maintenance_Cost = req.body.maintenance_Cost;

    
    const newMaintenance = new Maintenance({
        Maintenance_ID,
        Vehicle_Registration_No,
        Date,
        Description,
        maintenance_Cost

    })
    newMaintenance.save().then(()=>{
        res.json("Maintenance Added")
    }).catch((err)=>{
        console.log(err);
    })

})

http://localhost:8070/Maintenance
router.route("/").get((req,res)=>{
    Maintenance.find().then((Maintenance)=>{
        res.json(Maintenance)
    }).catch((err)=>{
        console.log(err)
    })
})



router.route("/delete/:id").delete(async(req,res)=>{
    let mainID =req.params.id;

    await Maintenance.findByIdAndDelete(mainID).then(()=>{
        res.status(200).send({status:"Maintenance Deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete Maintenance",error:err.message})
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let mainID= req.params.id;
    const user =await Vehicle.findById(mainID).then((Maintenance)=>{
        res.status(200).send({status:"Maintenance Fetch", Maintenance})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get vehicle." ,error:err.message});
    })
})

module.exports=router;