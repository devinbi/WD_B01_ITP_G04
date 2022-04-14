const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const technicalSchema = new Schema({
    
    deviceCode:{
        type : String,
        required: true
    },

    modelNo:{
        type : String,
        required: true
    },

    machineName:{
        type : String,
        required: true
    },

    price:{
        type : String,
        required: true
    },

    department:{
        type : String,
        required: true
    },
    condition:{
        type : String,
        required: true
    },

    ETAID:{
        type : String,
        required: true
    } ,
    maintainanceID:{
        type : String
        
    }
})

const technical = mongoose.model("technicalDevices",technicalSchema);

module.exports = technical;