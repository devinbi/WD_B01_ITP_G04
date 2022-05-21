const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ManufacturedItemSchema = new Schema({
    ItemId:{
        type: String,
        required: true,
        unique: true,
        minlength: 3
    },
    ItemName:{
        type: String,
        required: true
    },

    Quantity:{
        type: Number,
        required: true
    },

    Material:{
        type: String,
        required: true
    },

    Colour:{
        type:String,
        required: true
    },

    Size:{
        type:String,
        required: true
    }
})

const ManufacturedItem = mongoose.model("Manufactured_Item",ManufacturedItemSchema);

module.exports = ManufacturedItem; 