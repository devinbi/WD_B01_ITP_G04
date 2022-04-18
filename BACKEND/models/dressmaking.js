const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const dressmakingSchema = new Schema({
    
    machineCode:{
        type : String,
        required: true
    },

    machineName:{
        type : String,
        required: true
    },

    category:{
        type : String,
        required: true
    },

    price:{
        type : String,
        required: true
    },

    condition:{
        type : String,
        required: true
    }

   
})

const dressmaking = mongoose.model("dressmakingTools",dressmakingSchema);

module.exports = dressmaking;