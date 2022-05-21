
import React, { useEffect, useState } from "react";
import axios from "axios";
const Host = "http://localhost:8060/salary";
export default function UpdateSalary({ data, cl }){
   
    const [employeeId, setId] = useState("");
    const [labourHr, setLabourHr] = useState("");
    const [otHr, setOtHr] = useState("");
    const [leave, setLeave] = useState("");
    const [designation, setDesignation] = useState("");
    const [salary, setSalary] = useState("");
   
    useEffect(()=>{
        
    setId(data.employeeId)
    setLabourHr(data.labourHr)
    setOtHr(data.otHr)
    setLeave(data.leave)
    setDesignation(data.designation)
    setSalary(data.salary)
    
    },[])
  
  function sendData(e){
    
    e.preventDefault();
          
        const updateSalaries = {
            employeeId,
            labourHr,
            otHr,
            leave,
            designation,
            salary
          }
          

    axios
      .put(`http://localhost:8070/salary/update/${data._id}`,updateSalaries)
      .then((response) => {
        alert("Salary Details updated Successfully !");
        window.location.reload(true);
      })
      .catch((err) => {
          console.log(err)
        alert("Error occured !");
      });
    
  };

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
              onChange={(e)=>{
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
              className="form-control"
              name="labourHr"
              onChange={(e)=>{
            setLabourHr(e.target.value);
            }}
              value={labourHr}
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
              onChange={(e)=>{
                setOtHr(e.target.value);
            }}
              value={otHr}
            ></input>
          </div>
         
          <div className="mb-3">
            <label for="leave" className="form-label">
              Leaves
            </label>
            <input
              type="text"
              className="form-control"
              name="leave"
              onChange={(e)=>{
                setLeave(e.target.value);
            }}
              value={leave}
            ></input>
          </div>
          <div className="mb-3">
          <label for="designation" className="form-label" >Designation</label>
              <select name="designation" id="designation" className="form-control" 
              onChange={(e)=>{
                setDesignation(e.target.value);
            }}
             value={designation}
        >       <option>Choose</option>
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
              onChange={(e)=>{
                setSalary(e.target.value);
            }}
              value={salary}
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