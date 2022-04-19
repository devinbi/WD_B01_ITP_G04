import React from 'react';
import Header from './components/equipmentManagement/Header';
import AddDressmaking from './components/equipmentManagement/AddDressmaking';
import AddTechnical from './components/equipmentManagement/AddTechnical';
import AddEmaintainance from './components/equipmentManagement/AddEmaintainance';
import { BrowserRouter as Router, Route} from "react-router-dom";
import AllDressmakings from './components/equipmentManagement/AllDressmakings';
import AllTechnicals from './components/equipmentManagement/AllTechnicals';
import AllEmaintainance from './components/equipmentManagement/AllEmaintainance';
import UpdateDressmaking from './components/equipmentManagement/UpdateDressmaking';
import UpdateTechnical from './components/equipmentManagement/UpdateTechnical';
import UpdateEmaintainance from './components/equipmentManagement/UpdateEmaintainance';

function App() {
  return ( 
    <div className='container'>
      <Router>
        <div>
           <Header/>
            <Route path='/addDressmaking' exact component = {AddDressmaking} />
            <Route path='/addTechnical' exact component = {AddTechnical} />
            <Route path='/addEmaintainance' exact component = {AddEmaintainance} />
            <Route path='/AllDressmakings' exact component = {AllDressmakings} />
            <Route path='/AllTechnicals' exact component = {AllTechnicals} />
            <Route path='/AllEmaintainance' exact component = {AllEmaintainance} />
            <Route path='/UpdateDressmaking' exact component = {UpdateDressmaking} />
            <Route path='/UpdateTechnical' exact component = {UpdateTechnical} />
            <Route path='/UpdateEmaintainance' exact component = {UpdateEmaintainance} />
        </div>
    </Router>
    
   
    </div>
    

  );
}

export default App;
