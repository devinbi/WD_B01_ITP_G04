const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
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

const Customer = mongoose.model("Customer",customerSchema);

module.exports= Customer;