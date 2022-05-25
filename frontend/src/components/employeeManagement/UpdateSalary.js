import React, { useEffect, useState } from "react";
import axios from "axios";
export default function UpdateSalary({ data, cl }) {
  const [employeeId, setId] = useState("");
  const [labourHr, setLabourHr] = useState("");
  const [otHr, setOtHr] = useState("");
  const [leave, setLeave] = useState("");
  const [designation, setDesignation] = useState("");
  const [month, setMonth] = useState("");
  const [salary, setSalary] = useState("");

  useEffect(() => {
    setId(data.employeeId);
    setLabourHr(data.labourHr);
    setOtHr(data.otHr);
    setLeave(data.leave);
    setDesignation(data.designation);
    setMonth(data.month);
    setSalary(data.salary);
  }, []);

  function sendData(e) {
    e.preventDefault();

    const updateSalaries = {
      employeeId,
      labourHr,
      otHr,
      leave,
      designation,
      month,
      salary,
    };

    axios
      .put(`http://localhost:8070/salary/update/${data._id}`, updateSalaries)
      .then((response) => {
        alert("Salary Details updated Successfully !");
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
            <label for="labourHr" className="form-label">
              Labour Hours
            </label>
            <input
              type="text"
              id="labourHr"
              className="form-control"
              name="labourHr"
              pattern="[0-9]{1,}"
              title="Should Be numbers"
              onChange={(e) => {
                setLabourHr(e.target.value);
              }}
              value={labourHr}
              required
            ></input>
          </div>

          <div className="mb-3">
            <label for="otHr" className="form-label">
              Ot Hours
            </label>
            <input
              type="text"
              className="form-control"
              name="otHr"
              id="otHr"
              pattern="[0-9]{1,}"
              title="Should Be numbers"
              onChange={(e) => {
                setOtHr(e.target.value);
              }}
              value={otHr}
              required
            ></input>
          </div>

          <div className="mb-3">
            <label for="leave" className="form-label">
              Leaves
            </label>
            <input
              type="text"
              id="leave"
              className="form-control"
              name="leave"
              pattern="[0-9]{1,}"
                  title="Should Be numbers"
              onChange={(e) => {
                setLeave(e.target.value);
              }}
              value={leave}
              required
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
               <option selected disabled value="">Choose</option>
              <option value="driver">Driver</option>
              <option value="Officer">Officer</option>
              <option value="worker">Worker</option>
            </select>
          </div>
          <div className="mb-3">
            <label for="salary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control"
              name="salary"
              onChange={(e) => {
                setSalary(e.target.value);
              }}
              value={salary}
              required
            ></input>
             <div className="mb-3">
            <label for="month" className="form-label">
              Month
            </label>
            <select
              name="month"
              id="month"
              className="form-control"
              onChange={(e) => {
                setMonth(e.target.value);
              }}
              value={month}
            >
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
