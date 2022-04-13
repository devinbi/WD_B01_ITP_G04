const router = require("express").Router();
let Employee = require("../models/Employee");

//Add Employee

router.route("/add").post(async(req,res)=>{

    const{employeeId,name,address,dob,gender,email,phone,nic,eQuality,wExperence,department,designation,jDate} = req.body;

    const newEmployee = await new Employee({
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
        jDate
    })
    newEmployee.save().then(()=>{
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//Get Employee Details

router.route("/").get((req,res)=>{

    Employee.find().then((employee)=> {
        res.json(employee)

    }).catch((err)=>{
        console.log(err);
    })

})

//Update Employee Details

router.route("/update/:id").put(async (req,res)=>{

    let employeeID = req.params.id;
    
    const{employeeId,name,address,dob,gender,email,phone,nic,eQuality,wExperence,department,designation,jDate} = req.body;

    //Create object

    const updateEmployee = {
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
        jDate
    }

    const update = await Employee.findByIdAndUpdate(employeeID, updateEmployee)
    .then(()=>{
        res.status(200).send({status: "User Updated"});
    }).catch((err)=>{
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
})

//Delete Employee

router.route("/delete/:id").delete(async (req, res)=>{

    let employeeID = req.params.id;
  
     await Employee.findByIdAndDelete(employeeID).then(()=>{
        res.status(200).send({status: "User Delete"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error eith delete User", error: err.message})
    })
  })

//One User Details
  
router.route("/get/:id").get(async (req, res)=> {
    let employeeID = req.params.id;
    
    const manager = await Employee.findById(employeeID)
    .then((Employee)=>{
        res.status(200).send({status: "User fetched", Employee})
    }).catch((err)=>{
        res.status(500).send({status: "Error eith fetched User", error: error.message})
    })
})


module.exports = router;