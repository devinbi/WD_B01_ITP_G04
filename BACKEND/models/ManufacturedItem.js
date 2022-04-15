const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ManufacturedItemSchema = new Schema({
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

    Description:{
        type:String,
        required: true
    }
})

const ManufacturedItem = mongoose.model("Manufactured_Item",ManufacturedItemSchema);

module.exports = ManufacturedItem; 