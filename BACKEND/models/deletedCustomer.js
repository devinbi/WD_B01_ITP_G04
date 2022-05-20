const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DeletedcustomerSchema = new Schema({
    CustomerId : {
        type: String,
        required : true
    },

    CustomerName : {
        type: String,
        required : true
    },

    ContactNumber : {
        type: Number,
        required : true
    },

    Email : {
        type: String,
        required : true
    },

    Address : {
        type: String,
        required : true
    },

    Country : {
        type: String,
        required : true
    },

    NIC : {
        type: String,
        required : true
    }
    
})

const DeletedCustomer = mongoose.model("DeletedCustomer",DeletedcustomerSchema);

module.exports= DeletedCustomer;