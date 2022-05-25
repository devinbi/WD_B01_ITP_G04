const router = require("express").Router();
let Resigned = require("../models/Resigned");

//Add Employee

router.route("/add").post(async(req,res)=>{

    const{employeeId,name,address,dob,gender,email,phone,nic,eQuality,wExperence,department,designation,jDate,resignd} = req.body;

    const newResignEmployee = await new Resigned({
        employeeId,
        name,
        address,
        dob,
        gender,
        email,
        phone,
        nic,
        eQuality,
        wExperence,
        department,
        designation,
        jDate,
        resignd
    })
    newResignEmployee.save().then(()=>{
        res.json("Resiged Employee Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//Get Employee Details

router.route("/").get((req,res)=>{

    Resigned.find().then((resigned)=> {
        res.json(resigned)

    }).catch((err)=>{
        console.log(err);
    })

})

module.exports = router;