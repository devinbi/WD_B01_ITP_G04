import React from 'react';
import Header from './components/supplierManagement/Header';
import AddItem from "./components/supplierManagement/AddItem";
import AddSuplire from './components/supplierManagement/AddSuplire';
import AllItemDetails from './components/supplierManagement/AllItemDetails';
import AllSplireDetails from './components/supplierManagement/AllSplireDetails';

import {BrowserRouter as Router, Route} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className='App'>
        <Header/>

        <Route path="/addI" exact component={ AddItem } />
        <Route path="/addS" exact component={ AddSuplire } />
        <Route path="/viewI" exact component={ AllItemDetails } />
        <Route path="/viewS" exact component={ AllSplireDetails } />
        
      </div>
    </Router>
    
  );
}

export default App;