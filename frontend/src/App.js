
import React from 'react';
import './App.css';
import AddTransport from './components/transportManagement/AddTransport';
import AllTransport from './components/transportManagement/AllTransport';
import AddVehicle from './components/transportManagement/AddVehicle';
import AllVehicles from './components/transportManagement/AllVehicles';
import UpdateTransport from './components/transportManagement/UpdateTransport';
import UpdateVehicles from './components/transportManagement/UpdateVehicles';
import AddMaintenance from './components/transportManagement/AddMaintenance';
import AllMaintenance from './components/transportManagement/AllMaintenance';
import EReport from './components/transportManagement/Report';
import TopHeader from './components/TopHeader';
import Drivers from './components/transportManagement/Drivers';
import OrderDes from './components/transportManagement/addTransportByOrder'
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {


  return (
    <Router>
    <div>
    <TopHeader/>
        <Route  path="/Tadd" exact component={AddTransport}/>
        <Route path= "/Tview" exact component={AllTransport}/>
        <Route path= "/vadd" exact component={AddVehicle}/>
        <Route path= "/vview" exact component={AllVehicles}/>
        <Route path= "/update" exact component={UpdateTransport}/>
        <Route path= "/vupdate" exact component={UpdateVehicles}/>
        <Route path= "/madd" exact component={AddMaintenance}/>
        <Route path= "/mview" exact component={AllMaintenance}/>
        <Route path= "/rview" exact component={EReport}/>
        <Route path= "/viewD" exact component={Drivers}/>
        <Route path= "/viewO" exact component={OrderDes}/>
        <Route path= "/dash" exact component={Dashboard}/>
    </div>
    </Router>
  );
}

export default App;
