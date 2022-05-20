const router = require("express").Router();
let Employee = require("../models/Employee");


router.route("/").get((req,res)=>{

    Employee.find().then((employee)=> {
        res.json(employee)

    }).catch((err)=>{
        console.log(err);
    })

})

module.exports = router;