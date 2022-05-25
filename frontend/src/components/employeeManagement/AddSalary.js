import React, { useState } from "react";
import axios from "axios";

export default function AddSalary() {
  const [employeeId, setId] = useState("");
  const [labourHr, setLabourHr] = useState("");
  const [otHr, setOtHr] = useState("");
  const [leave, setLeave] = useState("");
  const [designation, setDesignation] = useState("");
  const [month, setMonth] = useState("");
  const [salary, setSalary] = useState("");

  function sendData(e) {
    e.preventDefault();

    let lHours = parseInt(labourHr);
    let oHours = parseInt(otHr);
    let leaves = parseInt(leave);
    let salary;
    if (designation == "driver")
      salary = 120 * lHours + 100 * oHours - 750 * leaves;
    else if (designation == "Officer")
      salary = 110 * lHours + 100 * oHours - 750 * leaves;
    else if (designation == "worker")
      salary = 110 * lHours + 100 * oHours - 750 * leaves;
    else salary = 0;

    const newSalary = {
      employeeId,
      labourHr,
      otHr,
      leave,
      designation,
      month,
      salary,
    };

    axios
      .post("http://localhost:8070/salary/add", newSalary)
      .then(() => {
        alert("Success");
        window.location.href = "/alls";
        // window.location.reload();
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <div class="component-body">
        <div class="area">
          <nav class="main-menu bg-primary">
            <ul>
              <li class="has-subnav">
                <a href="#">
                  <i class="fa fa-house"></i>
                  <span class="nav-text">Dash Board</span>
                  <i class="fa fa-angle-right"></i>
                </a>
              </li>
              <hr></hr>
              <li class="has-subnav">
                <a href="/viewE">
                  <i class="fa fa-users"></i>
                  <span class="nav-text">View Employee List</span>
                  <i class="fa fa-angle-right"></i>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/adde">
                  <i class="fa fa-user-plus"></i>
                  <span class="nav-text">Add Employee</span>
                  <i class="fa fa-angle-right"></i>
                </a>
              </li>
              <hr></hr>

              <li class="has-subnav">
                <a href="/viewS">
                  <i class="fa fa-wallet"></i>
                  <span class="nav-text">View Salary Details</span>
                  <i class="fa fa-angle-right"></i>
                </a>
              </li>
              <li class="has-subnav">
                <a href="/adds">
                  <i class="fa fa-hand-holding-dollar"></i>
                  <span class="nav-text">Add Salary Detials</span>
                  <i class="fa fa-angle-right"></i>
                </a>
              </li>
              <hr></hr>
              <li class="has-subnav">
                <a href="/alle">
                  <i class="fa fa-users-gear"></i>
                  <span class="nav-text">Manage Employee</span>
                  <i class="fa fa-angle-right"></i>
                </a>
              </li>
              <hr></hr>
              <li class="has-subnav">
                <a href="/alls">
                  <i class="fa fa-scale-balanced"></i>
                  <span class="nav-text">Salary Maintains</span>
                  <i class="fa fa-angle-right"></i>
                </a>
              </li>
              <hr></hr>
              <li class="has-subnav">
                <a href="/resign">
                  <i class="fa fa-users-slash"></i>
                  <span class="nav-text">Resigned Employee</span>
                  <i class="fa fa-angle-right"></i>
                </a>
              </li>
              <hr></hr>
              <li class="has-subnav">
                <a href="/report">
                  <i class="fa fa-download" aria-hidden="true"></i>
                  <span class="nav-text">Reports</span>
                  <i class="fa fa-angle-right"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="container pt-3">
        <div className="row justify-content-sm-center pt-3">
          <div className="col-sm-6 shadow round pb-3">
            <h1 className="text-center pt-3 text-secondary">Employee Salary</h1>
            <form onSubmit={sendData}>
              <div class="form-group">
                <label for="employeeId">Employee Id :</label>
                <input
                  type="text"
                  class="form-control"
                  id="employeeId"
                  placeholder="Enter"
                  pattern="[E]{1}[m]{1}[p]{1}[0-9]{3}"
                  title="Employee ID should be Empxxx"
                  onChange={(e) => {
                    setId(e.target.value);
                  }}
                  required
                />
              </div>
              <div className="form-group">
                <label for="name">Labour Hours :</label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter"
                  pattern="[0-9]{1,}"
                  title="Should Be numbers"
                  onChange={(e) => {
                    setLabourHr(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="form-group">
                <label for="otHr">OT Hours :</label>
                <input
                  type="text"
                  class="form-control"
                  id="otHr"
                  placeholder="Enter"
                  pattern="[0-9]{1,}"
                  title="Should Be numbers"
                  onChange={(e) => {
                    setOtHr(e.target.value);
                  }}
                  required
                />
              </div>

              <div class="form-group">
                <label for="leave">Leaves :</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter"
                  pattern="[0-9]{1,}"
                  title="Should Be numbers"
                  id="leave"
                  onChange={(e) => {
                    setLeave(e.target.value);
                  }}
                  required
                />
              </div>
              <div class="form-group">
                <label for="Designation">Designation :</label>
                <select
                  name="Designation"
                  id="Designation"
                  class="form-control"
                  onChange={(e) => {
                    setDesignation(e.target.value);
                  }}
                  required
                >
                  {" "}
                  <option selected disabled value="">Choose</option>
                  <option value="driver">Driver</option>
                  <option value="Officer">Officer</option>
                  <option value="worker">Worker</option>
                </select>
              </div>
              <div class="form-group">
                <label for="month">Month :</label>
                <select
                  name="month"
                  id="month"
                  class="form-control"
                  onChange={(e) => {
                    setMonth(e.target.value);
                  }}
                  required
                >
                  {" "}
                  <option selected disabled value="">Choose</option>
                  <option value="January">January</option>
                  <option value="February">February</option>
                  <option value="March">March</option>
                  <option value="April">April</option>
                  <option value="May">May</option>
                  <option value="June">June</option>
                  <option value="July">July</option>
                  <option value="August">August</option>
                  <option value="September">September</option>
                  <option value="October">October</option>
                  <option value="November">November</option>
                  <option value="December">December</option>
                </select>
              </div>
              <center>
                <button type="submit" class="btn btn-info btn-lg">
                  ADD
                </button>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
