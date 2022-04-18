
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
const dressmakingRouter= require("./routes/dressmakings.js");
app.use("/dressmaking", dressmakingRouter);

const technicalRouter= require("./routes/technicals.js");
app.use("/technical", technicalRouter);

const emaintainanceRouter= require("./routes/emaintainances.js");
app.use("/emaintainance", emaintainanceRouter);

app.listen(PORT, () => {
    console.log(`server is up and running on porT: ${PORT}`);

})
