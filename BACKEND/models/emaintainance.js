const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const emaintainanceSchema = new Schema({
    
    maintainID:{
        type : String,
        required: true
    },

    machineCode:{
        type : String,
        required: true
    },

    date:{
        type : String,
        required: true
    },

    category:{
        type : String,
        required: true
    },

    condition:{
        type : String,
        required: true
    },

    cost:{
        type : String,
        required: true
    } 
  
})

const emaintainance = mongoose.model("equipmentMaintainance",emaintainanceSchema);

module.exports = emaintainance;