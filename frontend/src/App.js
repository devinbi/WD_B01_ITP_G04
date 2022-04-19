import React from 'react';
import './App.css';
import AddEmployee from "./components/employeeManagement/AddEmployee";
import AllEmployee from './components/employeeManagement/AllEmployee';
import AddSalary from './components/employeeManagement/AddSalary';
import Headers from "./components/employeeManagement/Headers";
import AllSalary from './components/employeeManagement/AllSalary';
import {BrowserRouter, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
 
    <BrowserRouter>
        
            <Headers/>
            <Route path="/add" exact component={AddEmployee} />
            <Route path="/allE" exact component={AllEmployee} />
            <Route path="/addS" exact component={AddSalary} />
            <Route path="/allS" exact component={AllSalary} />
             
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
