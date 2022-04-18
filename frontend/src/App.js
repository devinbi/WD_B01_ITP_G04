import React from 'react';
import Header from './components/supplierManagement/Header';
import AddItem from "./components/supplierManagement/AddItem";

import {BrowserRouter as Router, Route} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className='App'>
        <Header/>

        <Route path="/add" component={ AddItem } />
        
      </div>
    </Router>
    
  );
}

export default App;