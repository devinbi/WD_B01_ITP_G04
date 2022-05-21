import Addexpense from './components/financeManagement/Addexpense.js';
import Addincome from './components/financeManagement/Addincome';
import Viewexpenses from './components/financeManagement/Viewexpenses';
import React from 'react';
import './App.css';

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

import Viewincomes from './components/financeManagement/Viewincomes';
import Updateexpense from './components/financeManagement/Updateexpense.js';
import Updateincome from './components/financeManagement/Updateincome.js';
import Report from './components/financeManagement/Report';



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


function App() {


  return (
    
    
    <div className="App">
 
    <BrowserRouter>
        
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
        
      </BrowserRouter>
      
    </div>

  );
}

export default App;
