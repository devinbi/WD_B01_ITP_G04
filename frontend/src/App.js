import React from 'react';
import Header from './components/supplierManagement/Header';
import AddItem from "./components/supplierManagement/AddItem";
import AllItemDetails from './components/supplierManagement/AllItemDetails';

import {BrowserRouter as Router, Route} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className='App'>
        <Header/>

        <Route path="/add" exact component={ AddItem } />
        <Route path="/view" exact component={ AllItemDetails } />
        
      </div>
    </Router>
    
  );
}

export default App;