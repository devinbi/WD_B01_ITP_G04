import React from "react";
import {a} from 'react-router-dom';

function Header(){

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="/" className= "nav-link active">Home</a>
              </li>
              <li class="nav-item">
                <a href="/add" className= "nav-link">Add Customer</a>
              </li>
              <li class="nav-item">
                <a href="/addO" className= "nav-link">Add Order</a>
              </li>
              <li class="nav-item">
                <a href="/view" className= "nav-link">View Orders</a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    ) 
}
export default Header;