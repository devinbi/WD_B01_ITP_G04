const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salSchema = new Schema({
    employeeId:{
        type : String,
        required : true
        

    },
    labourHr:{
        type : Number,
        required : true

    },
   otHr:{
        type : Number,
        required : true

    },
    leave:{
        type : Number,
        required : true

    },
    designation:{
        type : String,
        required : true

    },
    month:{
        type : String,
        required : true
    },
    salary:{
        type : Number,
        required : true

    }


    })

 const Salary = mongoose.model("Salary",salSchema);
 module.exports = Salary;
