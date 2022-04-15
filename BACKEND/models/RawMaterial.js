const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RawMaterialSchema = new Schema({

    ItemName : {
        type : String,
        required : true 
    },

    Quantity : {
        type : Number,
        require : true 
    },

    ItemType : {
        type : String,
        require : true
    }

})

const RawMaterial = mongoose.model("Raw_Material",RawMaterialSchema);

module.exports = RawMaterial;