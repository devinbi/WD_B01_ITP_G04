import React from 'react';
import './App.css';
import TopHeader from './components/Topheader';
import AddProduct from './components/inventoryManagement/AddProduct';
import AddRawMaterial from './components/inventoryManagement/AddRawMaterial';
import AllProductItems from './components/inventoryManagement/AllProductItems';
import AllRawMaterials from './components/inventoryManagement/AllRawMaterials';
import UpdateProductItem from './components/inventoryManagement/UpdateProductItem';
import UpdateRawMaterial from './components/inventoryManagement/UpdateRawMaterial';
import Report from './components/inventoryManagement/Report';
import {BrowserRouter as Router,Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <TopHeader></TopHeader>
        <Route path="/add" exact component={AddProduct}></Route> 
        <Route path="/adding" exact component={AddRawMaterial}></Route>
        <Route path="/fetch" exact component={AllProductItems}></Route>
        <Route path="/" exact component={AllRawMaterials}></Route>
        <Route path="/update" exact component={UpdateProductItem}></Route>
        <Route path="/update" exact component={UpdateRawMaterial}></Route>
        <Route path="/view" exact component={Report}></Route>

      </div>
    </Router>
  );
}

export default App;
