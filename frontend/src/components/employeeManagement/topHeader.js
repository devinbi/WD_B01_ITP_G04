import React from "react";
// import topheaderimage from './src/componenet/Stitchwave.png'
function topHeader(props) {
  return (
    <div>
      <header>
        <nav
          class="navbar navbar-expand-lg navbar-light bg-primary fixed-top"
          id="mainNav"
        >
          <div class="container-fluid" >
            <a class="navbar-brand js-scroll-trigger" href="index.html">
            <img
                className="ml-3"
                src="images/stitch_wave__10_-removebg-preview.png"
                width="150px"
                height="120px"
                border-radius="50%"
              />
              {/* <span className="text-uppercase font-weight-bold text-light ml-5 ">
                stitch wave
              </span> */}
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
                  <a class="nav-link text-light text-xl" href="/home">
                  <h4>Home</h4>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-light" href="/con">
                    <h4>  Contact Us </h4>
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

export default topHeader;
