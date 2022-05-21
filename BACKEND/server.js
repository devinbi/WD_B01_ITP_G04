
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
 
    
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  

});
    

const connection = mongoose.connection;
connection.once("open" , () => {
    console.log("Mongodb connection success");
})

//connecting to backand and frontend for incomingfinance
const incomingfinanceRouter = require("./routes/incomingfinances.js");

app.use("/incomingfinance",incomingfinanceRouter);

//connecting to backand and frontend for expense
const expenseRouter = require("./routes/expenses.js");

app.use("/expense",expenseRouter);

//connecting to backand and frontend for employee
const employeeRouter = require("./routes/employee.js");
app.use("/employee",employeeRouter);

//connecting to backand and frontend for salary
const salaryRouter = require("./routes/salary.js");
app.use("/salary",salaryRouter);


app.listen(PORT, () => {
    console.log(`server is up and running on porT: ${PORT}`);
})
