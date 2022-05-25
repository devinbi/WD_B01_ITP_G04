import React, { useState } from "react";
import axios from "axios";

export default function AddEmployee() {
  const [employeeId, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setBdate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [eQuality, setEquality] = useState("");
  const [wExperence, setWexperence] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [jDate, setJdate] = useState("");

  function sendData(e) {
    e.preventDefault();

    const newEmployee = {
      employeeId,
      name,
      address,
      dob,
      gender,
      email,
      phone,
      nic,
      eQuality,
      wExperence,
      department,
      designation,
      jDate,
    };

    axios
      .post("http://localhost:8070/employee/add", newEmployee)
      .then(() => {
        alert("Success");
        window.location.href = "/alle";
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
            <h1 className="text-center pt-3 text-secondary">
              Employee Details
            </h1>
            <form onSubmit={sendData}>
              <div className="form-group">
                <label for="employeeId">Employee Id :</label>
                <input
                  type="text"
                  className="form-control"
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
                <label for="name">Name :</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter"
                  pattern="[A-Z a-z]{5,20}"
							    title="Name max length should be 20"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="form-group">
                <label for="address">Address :</label>
                <textarea
                  type="text"
                  className="form-control"
                  id="address"
                  pattern="[A-Z a-z]{5,100}"
							    title="Address max length should be 100"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  required
                ></textarea>
              </div>

              <div class="form-group">
                <label for="birthday">Birthday :</label>
                <input
                  type="date"
                  class="form-control"
                  id="birthday"
                  onChange={(e) => {
                    setBdate(e.target.value);
                  }}
                  required
                />
              </div>

              <div className="form-group">
                <label for="gender">Gender :</label>
                <input
                  type="radio"
                  id="gender"
                  name="gender"
                  value="Male"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  required
                />{" "}
                Male
                <input
                  type="radio"
                  id="gender"
                  name="gender"
                  value="Female"
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  required
                />
                Female
              </div>

              <div class="form-group">
                <label for="email">Email :</label>
                <input
                  type="text"
                  class="form-control"
                  id="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                  title="Email should be isura@gmail.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  
                  required
                />
              </div>

              <div class="form-group">
                <label for="phone">Phone :</label>
                <input
                  type="text"
                  class="form-control"
                  pattern="[0-9]{10}"
                  title="Invalid Tel-number"
                  id="phone"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  required
                />
              </div>

              <div class="form-group">
                <label for="nic">Nic :</label>
                <input
                  type="text"
                  class="form-control"
                  id="nic"
                  pattern="[0-9]{9}[V]{1}"
                  onChange={(e) => {
                    setNic(e.target.value);
                  }}
                  required
                />
              </div>

              <div class="form-group">
                <label for="equalification">Equalification :</label>
                <input
                  type="text"
                  class="form-control"
                  id="equalification"
                  onChange={(e) => {
                    setEquality(e.target.value);
                  }}
                  required
                />
              </div>

              <div class="form-group">
                <label for="wexperience">Working Expirence :</label>
                <input
                  type="text"
                  class="form-control"
                  id="wexperience"
                  onChange={(e) => {
                    setWexperence(e.target.value);
                  }}
                  required
                />
              </div>
              <div class="form-group">
                <label for="Department">Department :</label>
                <select
                  name="Department"
                  id="Department"
                  class="form-control"
                  onChange={(e) => {
                    setDepartment(e.target.value);
                  }}
                >
                  {" "}
                  <option selected disabled value="">Choose</option>
                  <option value="Industrial Engineering Department">
                    Industrial Engineering Department{" "}
                  </option>
                  <option value="EDP/IT department">
                    EDP / IT department{" "}
                  </option>
                  <option value="Accounting Department">
                    Accounting Department
                  </option>
                  <option value="Human Resource and Administration">
                    Human Resource and Administration
                  </option>
                  <option value="Shipping and documentation">
                    Shipping and documentation
                  </option>
                </select>
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
                <label for="jdate">Joined Date :</label>
                <input
                  type="date"
                  class="form-control"
                  id="jdate"
                  onChange={(e) => {
                    setJdate(e.target.value);
                  }}
                  required
                />
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
