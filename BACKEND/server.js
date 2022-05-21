
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

const incomingfinanceRouter = require("./routes/incomingfinances.js");
//http://Localhost:8070/incomingfinance

app.use("/incomingfinance",incomingfinanceRouter);

const expenseRouter = require("./routes/expenses.js");
// http://Localhost:8070/expense

app.use("/expense",expenseRouter);

app.listen(PORT, () => {
    console.log(`server is up and running on porT: ${PORT}`);


// const  salaryRouter = require("./routes/Salarys.js");
// app.use("/salary",salaryRouter);

// const  maintenanceRouter = require("./routes/Maintenances.js");
// app.use("/Maintenance",maintenanceRouter);

// const orderRouter = require("./routes/Orders.js");
// app.use("/Order", orderRouter);

})
