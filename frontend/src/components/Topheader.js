import React from "react";

function TopHeader(props) {
  return (
    <div>
      <header>
        <nav
          class="navbar navbar-expand-lg navbar-light bg-primary fixed-top"
          id="mainNav"
        >
          <div class="container-fluid" >
            <a class="navbar-brand js-scroll-trigger" href="index.html">
            
              <span className="text-uppercase font-weight-bold text-light ml-5">
                Stitch Wave
              </span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link text-light" href="/">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header> 
    </div>
  );
}

export default TopHeader;





