import React from 'react';
import './App.css';
import AddEmployee from "./components/employeeManagement/AddEmployee";
import AllEmployee from './components/employeeManagement/AllEmployee';
import AddSalary from './components/employeeManagement/AddSalary';
import AllSalary from './components/employeeManagement/AllSalary';
import UpdateEmployee from './components/employeeManagement/UpdateEmployee';
import UpdateSalary from './components/employeeManagement/UpdateSalary';
import ViewEmployee from './components/employeeManagement/ViewEmployee';
import ViewSalary from './components/employeeManagement/ViewSalary';
import Report from './components/employeeManagement/Report';
import TopHeader from './components/employeeManagement/topHeader';
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
 
    <BrowserRouter>
        
    <TopHeader/>
            <Route path="/report" exact component={Report} />
            <Route path="/viewS" exact component={ViewSalary} />
            <Route path="/viewE" exact component={ViewEmployee} />
            <Route path="/adde" exact component ={AddEmployee} />
            <Route path="/adds" exact component ={AddSalary} />
            <Route path="/alle" exact component ={AllEmployee} />
            <Route path="/alls" exact component ={AllSalary} />
            <Route path="/updateS" exact component ={UpdateSalary} />
            <Route path="/updateE" exact component ={UpdateEmployee} />
             
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
