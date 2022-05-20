import './App.css';
//import Header from './components/Header';
import AddCustomer from './components/customerManagement/AddCustomer';
import AddOrders from './components/customerManagement/AddOrders';
import AllCustomers from './components/customerManagement/AllCustomers';
import AllOrders from './components/customerManagement/AllOrders';
import UpdateCustomer from './components/customerManagement/UpdateCustomer.js';
import UpdateOrder from './components/customerManagement/UpdateOrder';
import {BrowserRouter as Router,Route} from "react-router-dom"
import TopHeader from './components/customerManagement/Topheader';
import Report from './components/customerManagement/Report';
import DeletedCustomer from './components/customerManagement/deletedCustomer';

function App() {
  return (
    <Router>
    <div>
      <TopHeader></TopHeader>
      <Route path="/deleted" exact component = {DeletedCustomer} />
      <Route path="/" exact component={AllCustomers} />
      <Route path="/view" exact component={AllOrders} />
      <Route path="/add" exact component ={AddCustomer}/>
      <Route path="/addO" exact component ={AddOrders}/>
      <Route path="/updateO" exact component ={UpdateCustomer}/>
      <Route path="/update" exact component ={UpdateOrder}/>
      <Route path="/Report" exact component ={Report}/>
    </div>
    </Router>
  );
}

export default App;
