const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    OrderId : {
        type: String,
        required : true
    },

    TypeOfOrder : {
        type: String,
        required : true
    },

    UnitPrice : {
        type: Number,
        required : true
    },

    NoOfUnit : {
        type: Number,
        required : true
    },

    OrderStatus : {
        type: String,
        required : true
    },

    OrderDescription : {
        type: String,
        required : true
    },

    DateOfReceipt : {
        type: Date,
        required : true
    },

    OrderDeliveryDate : {
        type : Date,
        required : true
    }
    
})

const Order = mongoose.model("Order",orderSchema);

module.exports= Order;