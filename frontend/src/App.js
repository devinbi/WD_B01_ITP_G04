import Addexpense from './components/Addexpense.js';
import Addincome from './components/Addincome.js';
import AddEmployee from './components/AddEmployee.js';
import React from 'react';
import './App.css';


function App() {
  return (
    <div className='App'>
      <AddEmployee/>
      <Addincome/>
      <Addexpense/>
      
      
    </div>
  );
}

export default App;
