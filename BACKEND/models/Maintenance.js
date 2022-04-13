const mongoose = require("mongoose");
const Schema =mongoose.Schema;
const maintenanceSchema = new Schema({
    Vehicle_Registration_No :{
        type : String,
        required : true
    },

    Date :{
        type: Date,
        required: true
    },
    Description:{
        type : String,
        required:false
    },

    
    maintenance_Cost:{
        type : String,
        required:false
    }
})

const Maintenance = mongoose.model("Maintenance", maintenanceSchema);
module.exports =Maintenance;
