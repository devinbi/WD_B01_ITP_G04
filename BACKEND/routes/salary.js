const router = require("express").Router();
let Salary = require("../models/Salary");


//Add Employee

router.route("/add").post(async(req,res)=>{

    const{employeeId,labourHr,otHr,leave,designation,salary} = req.body;

    const newSalary = await new Salary({
        employeeId,
        labourHr,
        otHr,
        leave,
        designation,
        salary
    })
    newSalary.save().then(()=>{
        res.json("Salary Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//Get Employee Details

router.route("/").get((req,res)=>{

    Salary.find().then((salary)=> {
        res.json(salary)

    }).catch((err)=>{
        console.log(err);
    })

})

//Update Employee Details

router.route("/update/:id").put(async (req,res)=>{

    let salaryID = req.params.id;
    
    const{employeeId,labourHr,otHr,leave,designation,salary} = req.body;

    //Create object

    const updateSalary = {
        employeeId,
        labourHr,
        otHr,
        leave,
        designation,
        salary
    }

    const update = await Salary.findByIdAndUpdate(salaryID, updateSalary)
    .then(()=>{
        res.status(200).send({status: "User Updated"});
    }).catch((err)=>{
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

//Delete Employee

router.route("/delete/:id").delete(async (req, res)=>{

    let salaryID = req.params.id;
  
     await Salary.findByIdAndDelete(salaryID).then(()=>{
        res.status(200).send({status: "User Delete"})
    }).catch((err)=>{
        console.log(err.messsage);
        res.status(500).send({status: "Error eith delete User", error: err.message})
    })
  })

//One User Details
  
router.route("/get/:id").get(async (req, res)=> {
    let salaryID = req.params.id;
    
    const salary = await Salary.findById(salaryID)
    .then((Salary)=>{
        res.status(200).send({status: "User fetched", Salary})
    }).catch((err)=>{
        res.status(500).send({status: "Error eith fetched User", error: error.message})
    })
})

module.exports = router;