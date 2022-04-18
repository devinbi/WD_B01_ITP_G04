import './App.css';
import Header from './components/customerManagement/Header';
import AddCustomer from './components/customerManagement/AddCustomer';
import AddOrders from './components/customerManagement/AddOrders';
import AllCustomers from './components/customerManagement/AllCustomers';
import AllOrders from './components/customerManagement/AllOrders';
import {BrowserRouter as Router,Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div classname ='Ápp'>
      <Header/>
      <Route path="/" exact component={AllCustomers} />
      <Route path="/view" exact component={AllOrders} />
      <Route path="/add" exact component ={AddCustomer}/>
      <Route path="/addO" exact component ={AddOrders}/>
      
    </div>
    </Router>
  );
}

export default App;
