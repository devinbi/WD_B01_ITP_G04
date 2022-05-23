const router = require("express").Router();
let DeletedCustomer = require("../models/deletedCustomer");

router.route("/add").post((req,res)=>{
    const CustomerId = req.body.CustomerId;
    const CustomerName = req.body.CustomerName;
    const ContactNumber = Number(req.body.ContactNumber);
    const Email = req.body.Email;
    const Address = req.body.Address;
    const Country = req.body.Country;
    const NIC= req.body.NIC;
    
    
    const deletedCustomer = new DeletedCustomer({
        CustomerId,
        CustomerName,
        ContactNumber,
        Email,
        Address,
        Country,
        NIC
    })
    console.log("new",DeletedCustomer);

    deletedCustomer.save().then(()=>{
        res.json("DeletedCustomer Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//http://localhost:8070/customer

router.route("/").get((req,res)=>{

    DeletedCustomer.find().then((deletedCustomer)=>{
        res.json(deletedCustomer)
    }).catch((err)=>{
        console.log(err)
    })
})
module.exports = router;