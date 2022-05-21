import React from "react";

function Header() {

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#p">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    
                    <a class="nav-link" href="/view">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/addI">Add Item</a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link" href="/addS">Add Supplier</a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link" href="/viewI">View Item</a>
                    </li>

                    <li class="nav-item">
                    <a class="nav-link" href="/viewS">View Supplier</a>
                    </li>
                    
                     
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header;