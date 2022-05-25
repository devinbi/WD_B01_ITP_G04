const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({

    itemName : {
        type : String,
        require : true
    },

    itemQuantity: {
        type : Number,
        required : true
    },
     
    unitPrice : {
        type : Number,
        required : true
    },

    totalCost : {
        type : Number,
        required : true
    },

    adminId : {
        type : String,
        required : true
    }

    
})

const Item = mongoose.model("Item",itemSchema);

module.exports = Item;