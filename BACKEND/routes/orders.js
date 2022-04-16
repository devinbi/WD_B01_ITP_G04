const router = require("express").Router();
let Order = require("../models/order");

router.route("/add").post((req,res)=>{
    const TypeOfOrder = req.body.TypeOfOrder;
    const UnitPrice = Number(req.body.UnitPrice);
    const NoOfUnit = Number(req.body.NoOfUnit);
    const OrderStatus = req.body.OrderStatus;
    const OrderDescription = req.body.OrderDescription;
    const DateOfReceipt= Date(req.body.DateOfReceipt);
    const OrderDeliveryDate = Date(req.body.OrderDeliveryDate);
    

    const newOrder = new Order({
        TypeOfOrder,
        UnitPrice,
        NoOfUnit,
        OrderStatus,
        OrderDescription,
        DateOfReceipt,
        OrderDeliveryDate
    })


    newOrder.save().then(()=>{
        res.json("Order Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//http://localhost:8070/customer

router.route("/").get((req,res)=>{

    Order.find().then((orders)=>{
        res.json(orders)
    }).catch((err)=>{
        console.log(err)
    })
})

//http//localhost:8070/customer/update/324sfasrhdky

router.route("/update/:id").put(async(req,res) => {
    let orderId = req.params.id;
    const {TypeOfOrder, UnitPrice, NoOfUnit, OrderStatus, OrderDescription, DateOfReceipt, OrderDeliveryDate } = req.body;

    const updateOrder ={
        TypeOfOrder,
        UnitPrice,
        NoOfUnit,
        OrderStatus,
        OrderDescription,
        DateOfReceipt,
        OrderDeliveryDate
    }
    const update = await Order.findByIdAndUpdate(orderId,updateOrder)
    .then(() => {
        res.status(200).send({status: "Order Updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status:"Error with updating data", error: err.message});
    })
})

//http//localhost:8070/customer/delete/rasjdykfui8

router.route("/delete/:id").delete(async(req,res) =>{
    let orderId = req.params.id;

    await Order.findByIdAndDelete(orderId)
    .then(() => {
        res.status(200).send({status: "Order deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user",error:err.message});
    })
})

router.route("/get/:id").get(async(req,res) =>{
    let orderId = req.params.id;
    const order = await Order.findById(orderId)
    .then((order) => {
        res.status(200).send({status: "Order fetched", order})
    }).catch(() =>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user", error:err.message});
    })
})

module.exports = router;