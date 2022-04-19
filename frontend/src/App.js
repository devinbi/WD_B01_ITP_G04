import Addexpense from './components/financeManagement/Addexpense.js';
import Addincome from './components/financeManagement/Addincome';
import Viewexpenses from './components/financeManagement/Viewexpenses';
import React from 'react';
import './App.css';
import Viewincomes from './components/financeManagement/Viewincomes';
import Updateexpense from './components/financeManagement/Updateexpense.js';
import { BrowserRouter as Router, Route} from 'react-router-dom';



function App() {
  return (
    <div className='App'>
     <Viewincomes/>
      <Addexpense/> 
      <Addincome/>
     
      
     <Viewexpenses/>
     <Updateexpense/>
      
      
    </div>
  );
}

export default App;
