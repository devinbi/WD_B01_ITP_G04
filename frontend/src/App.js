import './App.css';
//import Header from './components/Header';
import AddCustomer from './components/customerManagement/AddCustomer';
import AddOrders from './components/customerManagement/AddOrders';
import AllCustomers from './components/customerManagement/AllCustomers';
import AllOrders from './components/customerManagement/AllOrders';
import UpdateCustomer from './components/customerManagement/UpdateCustomer.js';
import UpdateOrder from './components/customerManagement/UpdateOrder';

// import TopHeader from './components/customerManagement/Topheader';
import Reportcm from './components/customerManagement/Report';
import DeletedCustomer from './components/customerManagement/deletedCustomer';

import AddDressmaking from './components/equipmentManagement/AddDressmaking';
import AddTechnical from './components/equipmentManagement/AddTechnical';
import AddEmaintainance from './components/equipmentManagement/AddEmaintainance';

import AllDressmakings from './components/equipmentManagement/AllDressmakings';
import AllTechnicals from './components/equipmentManagement/AllTechnicals';
import AllEmaintainance from './components/equipmentManagement/AllEmaintainance';
import UpdateDressmaking from './components/equipmentManagement/UpdateDressmaking';
import UpdateTechnical from './components/equipmentManagement/UpdateTechnical';
import UpdateEmaintainance from './components/equipmentManagement/UpdateEmaintainance';


import ReportE from './components/equipmentManagement/Report';
//import Topheader from './components/equipmentManagement/Topheader';
    
import Addexpense from './components/financeManagement/Addexpense.js';
import Addincome from './components/financeManagement/Addincome';
import Viewexpenses from './components/financeManagement/Viewexpenses';
import React from 'react';
import Viewincomes from './components/financeManagement/Viewincomes';
import Updateexpense from './components/financeManagement/Updateexpense.js';
import Updateincome from './components/financeManagement/Updateincome.js';
import Report from './components/financeManagement/Report';

// import TopHeader from './components/Topheader';
import AddProduct from './components/inventoryManagement/AddProduct';
import AddRawMaterial from './components/inventoryManagement/AddRawMaterial';
import AllProductItems from './components/inventoryManagement/AllProductItems';
import AllRawMaterials from './components/inventoryManagement/AllRawMaterials';
import UpdateProductItem from './components/inventoryManagement/UpdateProductItem';
import UpdateRawMaterial from './components/inventoryManagement/UpdateRawMaterial';
import InventoryReport from './components/inventoryManagement/Report';
import OutofStock from './components/inventoryManagement/OutofStock';


import AddTransport from './components/transportManagement/AddTransport';
import AllTransport from './components/transportManagement/AllTransport';
import AddVehicle from './components/transportManagement/AddVehicle';
import AllVehicles from './components/transportManagement/AllVehicles';
import UpdateTransport from './components/transportManagement/UpdateTransport';
import UpdateVehicles from './components/transportManagement/UpdateVehicles';
import AddMaintenance from './components/transportManagement/AddMaintenance';
import AllMaintenance from './components/transportManagement/AllMaintenance';
import EReport from './components/transportManagement/Report';
import Drivers from './components/transportManagement/Drivers';
import OrderDes from './components/transportManagement/addTransportByOrder'
import Dashboard from './components/Dashboard';

import AddEmployee from "./components/employeeManagement/AddEmployee";
import AllEmployee from './components/employeeManagement/AllEmployee';
import AddSalary from './components/employeeManagement/AddSalary';
import AllSalary from './components/employeeManagement/AllSalary';
import UpdateEmployee from './components/employeeManagement/UpdateEmployee';
import UpdateSalary from './components/employeeManagement/UpdateSalary';
import ViewEmployee from './components/employeeManagement/ViewEmployee';
import ViewSalary from './components/employeeManagement/ViewSalary';
import Reports from './components/employeeManagement/Report';
import TopHeader from './components/employeeManagement/topHeader';
import {BrowserRouter, Route} from "react-router-dom";

// Supplier Management 
import AddItem from "./components/supplierManagement/AddItem";
import AllItemDetails from "./components/supplierManagement/AllItemDetails";
import AddSuplire from "./components/supplierManagement/AddSuplire";
import AllSplireDetails from "./components/supplierManagement/AllSplireDetails";
import ReportSM from './components/supplierManagement/Report';
import UpdateItem from './components/supplierManagement/UpdateItem';
import UpdateSupplier from './components/supplierManagement/UpdateSupplier';

function App() {


  return (
 

    <div className="App">
 
    <BrowserRouter >
        
    <TopHeader/>

{/*employeemanagment route paths*/}

            <Route path="/report" exact component={Reports} />
            <Route path="/viewS" exact component={ViewSalary} />
            <Route path="/viewE" exact component={ViewEmployee} />
            <Route path="/adde" exact component ={AddEmployee} />
            <Route path="/adds" exact component ={AddSalary} />
            <Route path="/alle" exact component ={AllEmployee} />
            <Route path="/alls" exact component ={AllSalary} />
            <Route path="/updateS" exact component ={UpdateSalary} />
            <Route path="/updateE" exact component ={UpdateEmployee} />

{/*financemanagment route paths*/}

           <Route path="/addex" exact component={Addexpense}/>
           <Route path= "/addi" exact component={Addincome}/>
           <Route path= "/viewex" exact component={Viewexpenses}/>
           <Route path= "/viewi" exact component={Viewincomes}/>
           <Route path= "/pdatee" exact component={Updateexpense}/>
           <Route path= "/updatei" exact component={Updateincome}/>
           <Route path= "/rep" exact component={Report}/>
             

            <Route  path="/Tadd" exact component={AddTransport}/>
            <Route path= "/Tview" exact component={AllTransport}/>
            <Route path= "/vadd" exact component={AddVehicle}/>
            <Route path= "/vview" exact component={AllVehicles}/>
            <Route path= "/update" exact component={UpdateTransport}/>
            <Route path= "/vupdate" exact component={UpdateVehicles}/>
            <Route path= "/madd" exact component={AddMaintenance}/>
            <Route path= "/mview" exact component={AllMaintenance}/>
            <Route path= "/rview" exact component={EReport}/>
            <Route path= "/viewD" exact component={Drivers}/>
            <Route path= "/viewO" exact component={OrderDes}/>
            <Route path= "/dash" exact component={Dashboard}/>

        <Route path="/add" exact component={AddProduct}></Route> 
        <Route path="/adding" exact component={AddRawMaterial}></Route>
        <Route path="/fetch" exact component={AllProductItems}></Route>
        <Route path="/allR" exact component={AllRawMaterials}></Route>
        <Route path="/update" exact component={UpdateProductItem}></Route>
        <Route path="/update" exact component={UpdateRawMaterial}></Route>
        <Route path="/Sout" exact component={OutofStock}></Route>
        <Route path="/view" exact component={InventoryReport}></Route>


            <Route path='/addDressmaking' exact component = {AddDressmaking} />
            <Route path='/addTechnical' exact component = {AddTechnical} />
            <Route path='/addEmaintainance' exact component = {AddEmaintainance} />
            <Route path='/AllDressmakings' exact component = {AllDressmakings} />
            <Route path='/AllTechnicals' exact component = {AllTechnicals} />
            <Route path='/AllEmaintainance' exact component = {AllEmaintainance} />
            <Route path='/UpdateDressmaking' exact component = {UpdateDressmaking} />
            <Route path='/UpdateTechnical' exact component = {UpdateTechnical} />
            <Route path='/UpdateEmaintainance' exact component = {UpdateEmaintainance} />
            <Route path='/Report' exact component = {Report} />

            <Route path="/deletedCus" exact component = {DeletedCustomer} />
            <Route path="/viewCus" exact component={AllCustomers} />
            <Route path="/viewOrder" exact component={AllOrders} />
            <Route path="/addCustomer" exact component ={AddCustomer}/>
            <Route path="/addOrder" exact component ={AddOrders}/>
            <Route path="/updateCus" exact component ={UpdateCustomer}/>
            <Route path="/updateOrder" exact component ={UpdateOrder}/>
            <Route path="/ReportOc" exact component ={Reportcm}/>


            {/* Supplier Management  */}
            <Route path="/addItem" exact component={AddItem} />
            <Route path="/UpdateItem" exact component ={UpdateItem} />
            <Route path="/viewItem" exact component={AllItemDetails} />
            <Route path="/addSupplier" exact component={AddSuplire} />
            <Route path="/UpdateSupplier" exact component ={UpdateSupplier} />
            <Route path="/viewSupplier" exact component ={AllSplireDetails} />
            <Route path="/reportSupPlierManage" exact component ={ReportSM} />
        
      </BrowserRouter>
      
    </div>

  );
}

export default App;