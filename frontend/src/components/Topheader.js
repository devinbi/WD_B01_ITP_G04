import React from "react";

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
                  <a class="nav-link text-light" href="/addItem">
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

      {/*<div class="area"></div>
      <nav class="main-menu bg-primary fixed-top">
        <ul>
          <li>
            <a href="/">
              <i class="fa fa-home fa-2x"></i>
              <span class="nav-text">Home</span>
              <i class="fa fa-angle-right fa-2x"></i>
            </a>
          </li>
          <li class="has-subnav">
            <a href="/empList">
              <i class="fa fa-users fa-2x"></i>
              <span class="nav-text">View Employee List</span>
              <i class="fa fa-angle-right fa-2x"></i>
            </a>
          </li>
          <li class="has-subnav">
            <a href="/addEmp">
              <i class="fa fa-user-plus fa-2x"></i>
              <span class="nav-text">Add New Employee</span>
              <i class="fa fa-angle-right fa-2x"></i>
            </a>
          </li>
          <hr></hr>
          <li class="has-subnav">
            <a href="/leaveList">
              <i class="fa fa-calendar fa-2x"></i>
              <span class="nav-text">View Leave List</span>
              <i class="fa fa-angle-right fa-2x"></i>
            </a>
          </li>
          <li class="has-subnav">
            <a href="/addLeave">
              <i class="fa fa-calendar-plus-o fa-2x"></i>
              <span class="nav-text">Add Leave Details</span>
              <i class="fa fa-angle-right fa-2x"></i>
            </a>
          </li>
          <hr></hr>
          <li class="has-subnav">
            <a href="/attendaceMark">
              <i class="fa fa-edit fa-2x"></i>
              <span class="nav-text">Mark Attendance</span>
              <i class="fa fa-angle-right fa-2x"></i>
            </a>
          </li>
          <li class="has-subnav">
            <a href="/attendanceList">
              <i class="fa fa-tasks fa-2x"></i>
              <span class="nav-text">View Attendance List</span>
              <i class="fa fa-angle-right fa-2x"></i>
            </a>
          </li>
        </ul>

        <ul class="logout">
          <li>
            <a href="#">
              <i class="fa fa-power-off fa-2x"></i>
              <span class="nav-text">Logout</span>
              <i class="fa fa-angle-right fa-2x"></i>
            </a>
          </li>
        </ul>
  </nav>*/}
    </div>

    /*<nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <a className="navbar-brand" href="#">
        SIGIRI FURNITURES
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto ">
          <li className="nav-item">
            <a className="nav-link" href="/empList">
              Employee List
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/addEmp">
              Add Employee
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/attendaceMark">
              Attendance
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/attendanceList">
              Attendance List
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/addLeave">
              Add Leave
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/leaveList">
              Leave List
            </a>
          </li>
        </ul>
      </div>
    </nav>*/
  );
}

export default topHeader;
