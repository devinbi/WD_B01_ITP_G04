import React from "react";


function Header(){

    return (
        //nav bar
        <ul class="nav">
  <li class="nav-item">
    <a href="/addDressmaking" className="nav-link">addD</a>
  </li>

  <li class="nav-item">
    <a href="/addTechnical" className="nav-link">addT</a>
  </li>

  <li class="nav-item">
    <a href="/addEmaintainance" className="nav-link">addM</a>
  </li>

<li>
<a href="#" className="nav-link">view</a>
  </li>
</ul>
    )
}

export default Header;