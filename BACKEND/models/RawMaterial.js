const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RawMaterialSchema = new Schema({

    ItemId : {
        type : String,
        required : true,
        unique: true,
        minlength: 3
    },

    ItemName : {
        type : String,
        required : true 
    },

    Quantity : {
        type : String,
        require : true 
    },

    ItemType : {
        type : String,
        require : true
    }

})

const RawMaterial = mongoose.model("Raw_Material",RawMaterialSchema);

module.exports = RawMaterial;