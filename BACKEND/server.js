
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();



const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
 
    
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  

});
    


const connection = mongoose.connection;
connection.once("open" , () => {
    console.log("Mongodb connection success");
})

const RawMaterialRouter = require("./routes/RawMaterials.js");
app.use("/RawMaterial",RawMaterialRouter);


const ManufacturedItemRouter = require("./routes/ManufacturedItems.js");
app.use("/ManufacturedItem",ManufacturedItemRouter);

app.listen(PORT, () => {
    console.log(`server is up and running on porT: ${PORT}`);

})
