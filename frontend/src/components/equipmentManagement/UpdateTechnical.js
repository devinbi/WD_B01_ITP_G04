import React, { useEffect, useState } from "react";
import axios from "axios";
const Host = "http://localhost:8070/technical";
export default function UpdateDressmaking({ data, cl }){
   
    
    const [deviceCode, setdeviceCode] = useState("");
    const [modelNo, setmodelNo] = useState("");
    const [machineName, setmachineName] = useState("");
    const [price, setprice] = useState("");
    const [department, setdepartment] = useState("");
    const [condition, setcondition] = useState("");
    
   
    useEffect(()=>{
        
    setdeviceCode(data.deviceCode)
    setmodelNo(data.modelNo)
    setmachineName(data.machineName)
    setprice(data.price)
    setdepartment(data.department)
    setcondition(data.condition)
    
    },[])
  
  function sendData(e){
    
    e.preventDefault();
          
        const UpdateTechnicals = {
                deviceCode,
                modelNo,
                machineName,
                price,
                department,
                condition,
          }
          

    axios
      .put(`${Host}/update/${data._id}`,UpdateTechnicals)
      .then((response) => {
        alert("Details updated Successfully !");
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
            <label for="deviceCode" className="form-label">
              Device Code:
            </label>
            <input
              type="text"
              className="form-control"
              name="deviceCode"
              onChange={(e)=>{
                setdeviceCode(e.target.value);
            }}
              value={deviceCode}
              disabled
            />
          </div>

          <div className="mb-3">
            <label for=" modelNo" className="form-label">
              Model No
            </label>
            <input
              type="text"
              className="form-control"
              name="modelNo"
              onChange={(e)=>{
            setmodelNo(e.target.value);
            }}
              value={modelNo}
            ></input>
          </div>

          <div className="mb-3">
            <label for=" machineName" className="form-label">
              Machine Name
            </label>
            <input
              type="text"
              className="form-control"
              name="machineName"
              onChange={(e)=>{
            setmachineName(e.target.value);
            }}
              value={machineName}
            ></input>
          </div>

          <div className="mb-3">
            <label for="price" className="form-label">
              Price
            </label>
            <input
              type="text"
              className="form-control"
              name="price"
              onChange={(e)=>{
                setprice(e.target.value);
            }}
              value={price}
            ></input>
          </div>

          <div className="mb-3">
          <label for="department" className="form-label">Department</label>
              <select name="department" id="department"  
              className="form-control"
              onChange={(e)=>{
                setdepartment(e.target.value);
            }}
             value={department}
        >      
            <option>Choose...</option>
            <option>Industrial Engineering Department </option>
            <option>EDP / IT department </option>
            <option>Accounting Department</option>
            <option>Human Resource and Administration</option>
            <option>Shipping and documentation</option>   
              
              </select>
</div>
         

          <div className="mb-3">
          <label for="condition" className="form-label">Condition</label>
              <select name="condition" id="condition"  
              className="form-control"
              onChange={(e)=>{
                setcondition(e.target.value);
            }}
             value={condition}
        >      
            <option>Choose...</option>
            <option>New</option>
            <option>Old</option>
            <option>Have to repair</option>
            <option>Have to replace</option>    
              
              </select>
         
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