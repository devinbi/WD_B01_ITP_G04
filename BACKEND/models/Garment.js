const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const garmentSchema = new Schema({

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
    
})

const Garment = mongoose.model("Garment",garmentSchema);

module.exports = Garment;