const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({

    name : {
        type : String,
        require : true
    },

    email: {
        type : String,
        required : true
    },
     
    phoneNumber : {
        type : String,
        required : true
    },

    nic : {
        type : String,
        required : true
    },

    address : {
        type : String,
        required : true
    },

    adminId : {
        type : String,
        required : true
    }

    
})

const Supplier = mongoose.model("Supplier",supplierSchema);

module.exports = Supplier;