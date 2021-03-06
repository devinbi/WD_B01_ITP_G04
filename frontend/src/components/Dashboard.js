import React from "react";
import { Link } from "react-router-dom";

function Dashboard(props) {
  return (
    <div>
      <div class="component-body">
        <div class="dashboard">
          <div class="container">
            <div class="row">
              <div class="col-sm">
                <a href="/empList">
                  <button type="button" class=" dbutton" id="btn-dash">
                    {/* <i class="fa fb fa-group" ></i> */}
                    
                    <span class="lead align-top ">Employee Management</span>
                  </button>
                </a>
              </div>
              <div class="col-sm">
              <a href="/AllT">
                <button type="button" class="dbutton" id="btn-dash">
                  
                  {/* <i class="fa fb fa-truck mr-4" id="fa fa-2x"></i> */}
                  <span class="lead align-top">Transport Management</span>
                  
                </button>
                </a>
              </div>
              <div class="col-sm">
                <a href="/ViewFinancial">
                  <button type="button" class="dbutton" id="btn-dash">
                    {/* <i class="fa fb fa-money mr-4" id="fa fa-2x"></i> */}
                    <span class="lead align-top">Financial Management</span>
                  </button>
                </a>
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                <Link to="/allCustomer">
                  <button type="button" class=" dbutton" id="btn-dash">
                    {/* <i class="fa fb fa-shopping-cart pr-5"></i> */}
                    <span class="lead align-top ">Customer Management</span>
                  </button>
                </Link>
              </div>
              <div class="col-sm">
                <Link to="/allview">
                  <button type="button" class="dbutton" id="btn-dash">
                    {/* <i class="fa fb fa-percent mr-4" id="fa fa-2x"></i> */}
                    <span class="lead align-top">Inventory Management</span>
                  </button>
                </Link>
              </div>
              <div class="col-sm">
                <Link to ="/alltenders">
                <button type="button" class="dbutton" id="btn-dash">
                  {/* <i class="fa fb fa-cubes mr-4" id="fa fa-2x"></i> */}
                  <span class="lead align-top">Supply Management</span>
                </button></Link>
              </div>
            <div class="row">
             
              <div class="col-sm">
                <a href="/view">
                  <button type="button" class=" dbutton" id="btn-dash">
                    {/* <i class="fa fb fa-tasks mr-4" id="fa fa-2x"></i> */}
                    <span class="lead align-top">Equiepment Management</span>
                  </button>
                </a>
              </div>
              <div class="col-sm">
                <a href="/">
                  <button type="button" class=" dbutton" id="btn-dash">
                    {/* <i class="fa fb fa-sign-out mr-4"></i> */}
                    <span class="lead align-top">Exit</span>
                  </button>
                </a>
              </div>
              <div class="col-sm">
                {/* <a href="/view"> */}
                  {/* <button type="button" class=" dbutton" id="btn-dash"> */}
                    {/* <i class="fa fb fa-tasks mr-4" id="fa fa-2x"></i> */}
                    {/* <span class="lead align-top">Equiepment Management</span> */}
                  {/* </button> */}
                {/* </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  
  );
}

export default Dashboard;
