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
    useUnifiedTopology: true 
})

const connection = mongoose.connection;
//connect database
 connection.once("open",() => {
    console.log("mongodb Connection Sucess !");
 })

 const garmentRouter = require("./routes/supplier.js");
 const itemRouter = require("./routes/item.js");

 app.use("/supplier",garmentRouter)
 app.use("/item",itemRouter)



const dressmakingRouter= require("./routes/dressmakings.js");
app.use("/dressmaking", dressmakingRouter);

const technicalRouter= require("./routes/technicals.js");
app.use("/technical", technicalRouter);

const emaintainanceRouter= require("./routes/emaintainances.js");
app.use("/emaintainance", emaintainanceRouter);

const RawMaterialRouter = require("./routes/RawMaterials.js");
app.use("/RawMaterial",RawMaterialRouter);


const ManufacturedItemRouter = require("./routes/ManufacturedItems.js");
app.use("/ManufacturedItem",ManufacturedItemRouter);


// const ViewSuppliedItemRouter = require("./routes/ViewSuppliedItems.js");
// app.use("/ViewSuppliedItem",ViewSuppliedItemRouter);


// const ViewOrderDetailsRouter = require("./routes/ViewOrderDetails.js");
// app.use("/ViewOrderDetails",ViewOrderDetailsRouter);

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

//connecting to backand and frontend for resigned
const resignedRouter = require("./routes/resigned.js");
app.use("/resigned",resignedRouter);

//connecting to backand and frontend for login
const loginRouter = require("./routes/login.js");
app.use("/login",loginRouter);

const customerRouter = require("./routes/customers.js");
app.use("/customer",customerRouter);

const orderRouter = require("./routes/orders.js");
app.use("/order", orderRouter);

const deleteRouter = require("./routes/deletedCustomer.js");
app.use("/dcustomer",deleteRouter);



app.listen(PORT, () => {
    console.log(`server is up and running on porT: ${PORT}`);
})
