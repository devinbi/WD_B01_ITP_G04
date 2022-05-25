import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UpdateEmployee({ data, cl }) {
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

  useEffect(() => {
    setId(data.employeeId);
    setName(data.name);
    setAddress(data.address);
    setBdate(data.dob);
    setGender(data.gender);
    setEmail(data.email);
    setPhone(data.phone);
    setNic(data.nic);
    setEquality(data.eQuality);
    setWexperence(data.wExperence);
    setDepartment(data.department);
    setDesignation(data.designation);
    setJdate(data.jDate);
  }, []);

  function sendData(e) {
    e.preventDefault();

    const updateEmployee = {
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
      .put(`http://localhost:8070/employee/update/${data._id}`, updateEmployee)
      .then((response) => {
        alert("Employee Details updated Successfully !");
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
        alert("Error occured !");
      });
  }

  return (
    <div class="area">
      <div className="container">
        <form onSubmit={sendData}>
          <div className="mb-3">
            <label for="employeeId" className="form-label">
              Employee Id :
            </label>
            <input
              type="text"
              className="form-control"
              name="employeeId"
              onChange={(e) => {
                setId(e.target.value);
              }}
              value={employeeId}
              disabled
            />
          </div>

          <div className="mb-3">
            <label for="name" className="form-label">
              name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              pattern="[A-Z a-z]{5,20}"
              title="Name max length should be 20"
              onChange={(e) => {
                setName(e.target.value);
              }}
              value={name}
            ></input>
          </div>

          <div className="mb-3">
            <label for="address" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              name="address"
              pattern="[A-Z a-z]{5,100}"
              title="Address max length should be 100"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              value={address}
            ></textarea>
          </div>

          <div className="mb-3">
            <label for="dob" className="form-label">
              Date Of Birth
            </label>
            <input
              id="dob"
              type="date"
              className="form-control"
              value={dob}
              name="dob"
              onChange={(e) => {
                setBdate(e.target.value);
              }}
              required
            ></input>
          </div>

          <div className="mb-3">
            <label for="gender" className="form-label">
              Gender
            </label>
            <select
              name="gender"
              id="gender"
              className="form-control"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              value={gender}
            >
              {" "}
              <option selected disabled value="">
                Choose
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="mb-3">
            <label for="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
              title="Email should be isura@gmail.com"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            ></input>
          </div>

          <div className="mb-3">
            <label for="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              name="phone"
              pattern="[0-9]{10}"
              title="Invalid Tel-number"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={phone}
            ></input>
          </div>

          <div className="mb-3">
            <label for="nic" className="form-label">
              Nic
            </label>
            <input
              type="text"
              className="form-control"
              name="nic"
              pattern="[0-9]{9}[V]{1}"
              onChange={(e) => {
                setNic(e.target.value);
              }}
              value={nic}
            ></input>
          </div>

          <div className="mb-3">
            <label for="eQuality" className="form-label">
              Qualification :
            </label>
            <input
              type="text"
              className="form-control"
              name="eQuality"
              onChange={(e) => {
                setEquality(e.target.value);
              }}
              required
              value={eQuality}
            ></input>
          </div>

          <div className="mb-3">
            <label for="department" className="form-label">
              Department
            </label>
            <select
              name="Department"
              id="department"
              className="form-control"
              onChange={(e) => {
                setDepartment(e.target.value);
              }}
              value={department}
            >
              <option selected disabled value="">
                Choose
              </option>
              <option value="Industrial Engineering Department">
                Industrial Engineering Department{" "}
              </option>
              <option value="EDP/IT department">EDP / IT department </option>
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

          <div className="mb-3">
            <label for="wExperence" className="form-label">
              Working Experence :
            </label>
            <input
              type="text"
              className="form-control"
              name="wExperence"
              id="wExperence"
              onChange={(e) => {
                setWexperence(e.target.value);
              }}
              value={wExperence}
            ></input>
          </div>

          <div className="mb-3">
            <label for="designation" className="form-label">
              Designation
            </label>
            <select
              name="designation"
              id="designation"
              className="form-control"
              onChange={(e) => {
                setDesignation(e.target.value);
              }}
              value={designation}
            >
              {" "}
              <option selected disabled value="">Choose</option>
              <option value="driver">Driver</option>
              <option value="Officer">Officer</option>
              <option value="worker">Worker</option>
            </select>
          </div>

          <div className="mb-3">
            <label for="jDate" className="form-label">
              Joined Date
            </label>
            <input
              id="jDate"
              type="date"
              className="form-control"
              value={jDate}
              name="jDate"
              onChange={(e) => {
                setJdate(e.target.value);
              }}
              required
            ></input>
          </div>

          <button
            type="submit"
            className="btn btn-success"
            style={{ margin: "5px" }}
          >
            Update
          </button>
          <button type="button" class="btn btn-primary " onClick={cl}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
