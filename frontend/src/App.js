
import React from 'react';
import './App.css';
import AddTransport from './components/transportManagement/AddTransport';
import AllTransport from './components/transportManagement/AllTransport';
import { BrowserRouter as Router, Route} from 'react-router-dom';


function App() {


  return (
    <Router>
    <div>
        <Route  path="/add" exact component={AddTransport}/>
        <Route path= "/view" exact component={AllTransport}/>
     
      {/* <Transport/>  */}
    </div>
    </Router>
  );
}

export default App;
