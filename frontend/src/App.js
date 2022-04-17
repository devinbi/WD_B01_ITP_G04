
import React from 'react';
import './App.css';
import AddTransport from './components/transportManagement/AddTransport';
import AddStudent from './components/transportManagement/AddStudent';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';


function App() {


  return (
    <Router>
    <div>
      <Routes>
        <Route exact path="/add"  element={<AddTransport/>}/>
      </Routes>
     
      {/* <Transport/>  */}
    </div>
    </Router>
  );
}

export default App;
