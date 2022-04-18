import Addexpense from './components/financeManagement/Addexpense.js';
import Addincome from './components/financeManagement/Addincome';
import Viewexpenses from './components/financeManagement/Viewexpenses';
import React from 'react';
import './App.css';
import Viewincomes from './components/financeManagement/Viewincomes';


function App() {
  return (
    <div className='App'>
  
       <Addexpense/> 
       <Addincome/> 
      <Viewexpenses/>
      <Viewincomes/>
      <Viewexpenses/>
      
      
    </div>
  );
}

export default App;
