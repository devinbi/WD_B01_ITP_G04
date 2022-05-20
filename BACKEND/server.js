
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

const transportRouter = require("./routes/Transports.js");
app.use("/Transport",transportRouter);

const vehicleRouter = require("./routes/vehicles.js");
app.use("/Vehicle",vehicleRouter);

const maintenanceRouter = require("./routes/Maintenances.js");
app.use("/Maintenance",maintenanceRouter);

const driverRouter = require("./routes/Drivers.js");
app.use("/Drivers",driverRouter);

const orderDesRouter = require("./routes/orderDes.js");
app.use("/OrderDes",orderDesRouter);

app.listen(PORT, () => {
    console.log(`server is up and running on porT: ${PORT}`);

})
