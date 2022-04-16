
import './App.css';
import Header from './components/Header';
import AddCustomer from './components/AddCustomer';
import {BrowserRouter as Router,Route} from "react-router-dom"

function App() {
  return (
    <Router>
    <div>
      <Header/>

     <Route path="/add" exact component ={AddCustomer}/>

      
    </div>
    </Router>
  );
}

export default App;
