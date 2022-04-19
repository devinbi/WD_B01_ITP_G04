import React, { useEffect, useState } from "react";
import axios from "axios";

const HOST = "http://localhost:8070/Transport";

export default function UpdateTransport({ data, cl }) {

  const [Transport_ID,setTid] = useState("");
  const [Vehicle_Registration_No,setVid] = useState("");
  const [Date,setDate] = useState("");
  const [Driver_Name,setName] = useState("");
  const [Description,setDescription] = useState("");
  const [Delivery_Status,setStatus] = useState("");

  useEffect(()=>{

    setTid(data.Transport_ID)
    setVid(data.Vehicle_Registration_No)
    setDate(data.Date)
    setName(data.Driver_Name)
    setDescription(data.Description)
    setStatus(data.Delivery_Status)


  },[])

  function sendData(e){


    e.preventDefault();
    const updtTransport ={
        Transport_ID,
        Vehicle_Registration_No,
        Date,
        Driver_Name,
        Description,
        Delivery_Status
    }
  

        console.log("form detailsssssssssss",updtTransport);
    axios .put(
        `${HOST}/update/${data._id}`,
        updtTransport
        
      )
       .then((response) => {
        alert("Transport Details updated Successfully !");
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
            <label for="TransportID" className="form-label">
              Transport ID :
            </label>
            <input
              type="text"
              className="form-control"
              name="Transport_ID"
              placeholder="Vehicle ID"
              onChange={(e)=>{
                setTid(e.target.value);
            }}
              // onChange={handleChange}
              value={Transport_ID}
              disabled
            ></input>
          </div>

          <div className="mb-3">
            <label for="regNo" className="form-label">
              Vehicle Registration No:
            </label>
            <input
              type="text"
              className="form-control"
              name="Vehicle_Registration_No"
              placeholder="Registration Number ABC-XXXX"
              onChange={(e)=>{
                setVid(e.target.value);
            }}
              // onChange={handleChange}
              value={Vehicle_Registration_No}
            />
          </div>


          <div className="mb-3">
            <label for="Date" className="form-label">
              Date :
            </label>
            <input
              type="date"
              className="form-control"
              name="Date"
              placeholder="Date"
              onChange={(e)=>{
                setDate(e.target.value);
            }}
              // onChange={handleChange}
              value={Date}
            ></input>
          </div>
          <div className="mb-3">
            <label for="DriverName" className="form-label">
              Driver Name :
            </label>
            <input
              type="text"
              className="form-control"
              name="Driver_Name"
              placeholder="Driver Name"
              onChange={(e)=>{
                setName(e.target.value);
            }}
              // onChange={handleChange}
              value={Driver_Name}
            ></input>
          </div>
          <div className="mb-3">
            <label for="Description" className="form-label">
              Description :
            </label>
            <input
              type="text"
              className="form-control"
              name="Description"
              placeholder="Description"
              onChange={(e)=>{
                setDescription(e.target.value);
            }}
              // onChange={handleChange}
              value={Description}
            ></input>
          </div>
          
          <div className="mb-3">
          <label for="Delivery_Status" className="form-label">Designation</label>
              <select name="Delivery_Status" id="Delivery_Status" 
              className="form-control" 
              onChange={(e)=>{
                setStatus(e.target.value);
            }} value={Delivery_Status}
            >
                <option>Choose</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              
              
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
