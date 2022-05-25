import '../Home.css';
import React from 'react';
export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Stitch Wave</h1>
          </div>
        </div>

        <div className="rowsizeing">
        
          <div className="col ">
            <div className="card card1">
              <h5>Employee Management</h5>
              <p></p>
            </div>
          </div>
          <div className="col">
            <div className="card card2">
              <h5>Finance Management</h5>
              <p></p>
            </div>
          </div>
          <div className="col">
            <div className="card card3">
              <h5>Supplier Management</h5>
              <p></p>
            </div>
          </div>
          <div className="col">
            <div className="card card4">
              <h5>Transport Management</h5>
              <p></p>
            </div>
          </div>
        </div>

        <div className="rowsizeing1">
     <span></span>
          <div className="col">
            <div className="card card5">
              <h5>Equipment Management </h5>
              <p></p>
            </div>
          </div>
          <div className="col">
            <div className="card card6" id="card6">
              <h5>Inventory Management</h5>
              
              <p></p>
            </div>
          </div>
        
          <div className="col">
            <div className="card card7">
              <h5>Order Management</h5>
              <p></p>
            </div>
          </div>
          <span></span>
        </div>
      </div>
    </div>
  );
}
