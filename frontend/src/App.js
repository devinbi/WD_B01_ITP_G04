import Addexpense from './components/financeManagement/Addexpense.js';
import Addincome from './components/financeManagement/Addincome';
import Viewexpenses from './components/financeManagement/Viewexpenses';
import React from 'react';
import './App.css';
import Viewincomes from './components/financeManagement/Viewincomes';
import Updateexpense from './components/financeManagement/Updateexpense.js';
import Updateincome from './components/financeManagement/Updateincome.js';
import Report from './components/financeManagement/Report';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Topheader from './components/Topheader.js';



function App() {
  return (
    
    <div className='App'>
      <Router>  
      <Topheader/>
          
        <Route path="/adde" exact component={Addexpense}/>
        <Route path= "/addi" exact component={Addincome}/>
        <Route path= "/viewe" exact component={Viewexpenses}/>
        <Route path= "/viewi" exact component={Viewincomes}/>
        <Route path= "/pdatee" exact component={Updateexpense}/>
        <Route path= "/updatei" exact component={Updateincome}/>
        <Route path= "/rep" exact component={Report}/>
        
    
    </Router>
    </div>

  );
}

export default App;
