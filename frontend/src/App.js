import React from 'react';
import Header from './components/supplierManagement/Header';
import AddItem from "./components/supplierManagement/AddItem";
import AddSuplire from './components/supplierManagement/AddSuplire';
import AllItemDetails from './components/supplierManagement/AllItemDetails';
import AllSplireDetails from './components/supplierManagement/AllSplireDetails';
import './App.css'
import {BrowserRouter as Router, Route} from "react-router-dom";
import TopHeader from './components/supplierManagement/TopHeader';
import Report from './components/supplierManagement/Report';



function App() {
  return (
    <Router>
      <div className='App'>
        {/* <Header/> */}
        <TopHeader/>
        <Route path="/addI" exact component={ AddItem } />
        <Route path="/addS" exact component={ AddSuplire } />
        <Route path="/viewI" exact component={ AllItemDetails } />
        <Route path="/viewS" exact component={ AllSplireDetails } />
        <Route path="/report" exact component={ Report } />
        
      </div>
    </Router>
    
  );
}

export default App;