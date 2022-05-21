const mongoose = require("mongoose");
const Schema =mongoose.Schema;
const vehicleSchema = new Schema({
    Vehicle_ID :{
        type : String,
        required : true,
        unique : true
    },


    Vehicle_Registration_No :{
        type : String,
        required : true,
        unique : true
    },

    Date :{
        type: String,
        required: true
    },
    Vehicle_Type:{
        type : String,
        required:false
    },

    Vehicle_Brand:{
        type : String,
        required:false
    },
    Mileage:{
        type : String,
        required:false
    }
   
})

const Vehicle = mongoose.model("Vehicle", vehicleSchema);
module.exports =Vehicle;
