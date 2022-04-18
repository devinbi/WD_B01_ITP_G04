const router =require("express").Router();
const { request } = require("express");
let Vehicle = require("../MODELS/Vehicle");

//http://localhost:8070/Vehicle/add
router.route("/add").post((req,res)=>{
    const Vehicle_ID=req.body.Vehicle_ID;
    const Vehicle_Registration_No = req.body.Vehicle_Registration_No;
    const Date = req.body.Date;
    const Vehicle_Type = req.body.Vehicle_Type;
    const Vehicle_Brand = req.body.Vehicle_Brand;
    const Mileage = req.body.Mileage;

    
    const newVehicle = new Vehicle({
        Vehicle_ID,
        Vehicle_Registration_No,
        Date,
        Vehicle_Type,
        Vehicle_Brand,
        Mileage

    })
    newVehicle.save().then(()=>{
        res.json("Vehicle Added")
    }).catch((err)=>{
        console.log(err);
    })

})

http://localhost:8070/Vehicle
router.route("/").get((req,res)=>{
    Vehicle.find().then((Vehicle)=>{
        res.json(Vehicle)
    }).catch((err)=>{
        console.log(err)
    })
})

http://localhost:8070/Vehicle/update/
router.route("/update/:id").put(async(req,res)=>{
   // console.log("requestttttt", req.body);
    let vehiID=req.params.id;
 //  console.log("transport ID",transeId)
    //destructure
    const{Vehicle_ID,Vehicle_Registration_No,Date,Vehicle_Type,Vehicle_Brand,Mileage}=req.body;
    const updateVehicle ={
        Vehicle_ID,
        Vehicle_Registration_No,
        Date,
        Vehicle_Type,
        Vehicle_Brand,
        Mileage
    }
    const update = await Vehicle.findByIdAndUpdate(vehiID,updateVehicle).then(()=>{
        res.status(200).send({status: "Vehicle Updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })   
})



router.route("/delete/:id").delete(async(req,res)=>{
    let transeId =req.params.id;

    await Vehicle.findByIdAndDelete(transeId).then(()=>{
        res.status(200).send({status:"Vehicle Deleted"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with delete user",error:err.message})
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let vehiID= req.params.id;
    const user =await Vehicle.findById(vehiID).then((Vehicle)=>{
        res.status(200).send({status:"Vehicle Fetch", Vehicle})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get vehicle." ,error:err.message});
    })
})

module.exports=router;