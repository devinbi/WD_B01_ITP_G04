const router = require("express").Router();
let Customer = require("../models/customer");

router.route("/add").post((req,res)=>{
    const CustomerName = req.body.CustomerName;
    const ContactNumber = Number(req.body.ContactNumber);
    const Email = req.body.Email;
    const Address = req.body.Address;
    const Country = req.body.Country;
    const NIC= req.body.NIC;
    
    
    const newCustomer = new Customer({
        CustomerName,
        ContactNumber,
        Email,
        Address,
        Country,
        NIC
    })
    console.log("new",newCustomer);

    newCustomer.save().then(()=>{
        res.json("Customer Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//http://localhost:8070/customer

router.route("/").get((req,res)=>{

    Customer.find().then((customers)=>{
        res.json(customers)
    }).catch((err)=>{
        console.log(err)
    })
})

//http//localhost:8070/customer/update/324sfasrhdky

router.route("/update/:id").put(async(req,res) => {
    let userId = req.params.id;
    const {CustomerName, ContactNumber, Email, Address, Country, NIC } =req.body;

    const updateCustomer ={
        CustomerName,
        ContactNumber,
        Email,
        Address,
        Country,
        NIC 
    }
    const update = await Customer.findByIdAndUpdate(userId,updateCustomer)
    .then(() => {
        res.status(200).send({status: "User Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data", error: err.message});
    })
})

//http//localhost:8070/customer/delete/rasjdykfui8

router.route("/delete/:id").delete(async(req,res) =>{
    let userId = req.params.id;

    await Customer.findByIdAndDelete(userId)
    .then(() => {
        res.status(200).send({status: "User deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user",error:err.message});
    })
})

router.route("/get/:id").get(async(req,res) =>{
    let userId = req.params.id;
    const user = await Customer.findById(userId)
    .then((customer) => {
        res.status(200).send({status: "User fetched", customer})
    }).catch(() =>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user", error:err.message});
    })
})

module.exports = router;