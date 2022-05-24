const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const resignSchema = new Schema({
    
    employeeId:{
        type : String,
        required : true,
        unique : true,
        minlength : 3

    },
    name :{
        type : String,
        required : true
    },
    
    address: {
        type : String,
        required : true
    },

    dob: {
        type : Date,
        required : true
    },

    gender: {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },

    phone : {
        type : Number,
        required : true
    },

    nic : {
         
        type : String,
        required : true
    },

    eQuality : {

        type : String,
        required : true
    },

    wExperence : {
         type : String,
         required : true
    },

    department : {
        
        type : String,
        required : true
    },

    designation : {

        type : String,
        required : true
    },

    jDate : {
        type : Date,
        required : true
    },

    resignd : {

        type : String,
        required : true
    }
    

})

const Resigned = mongoose.model("Resigned",resignSchema);
module.exports = Resigned;