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


    e.preventDefault(); //prevent normal behaviour of submit
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
                // validation for Transport Id
							pattern="[T][0-9]{4}" title="Transport ID should be TXXXX"
              onChange={(e)=>{
                setTid(e.target.value); //asign values
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
             // validation for Vehicle registration no
							pattern="[A-Z0-9]{2,3}[-][0-9]{4}"
							title="Vehicle registraion number should be CL-XXXX / CLA-XXXX"
              onChange={(e)=>{
                setVid(e.target.value); //asign values
            }}
              // onChange={handleChange}
              value={Vehicle_Registration_No}
              required
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
                setDate(e.target.value); //asign values
            }}
              // onChange={handleChange}
              value={Date}
              required
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
              // validation for driver name
							pattern="[A-Z a-z]{0,12}"
							title="Name max length should be 12"
              onChange={(e)=>{
                setName(e.target.value); //asign values
            }}
              // onChange={handleChange}
              value={Driver_Name}
              required
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
               // validation for Description
							pattern="[A-Z a-z0-9]{0,120}"
							title="Description max length should be 120"
              onChange={(e)=>{
                setDescription(e.target.value); //asign values
            }}
              // onChange={handleChange}
              value={Description}
              required
            ></input>
          </div>
          
          <div className="mb-3">
          <label for="Delivery_Status" className="form-label">Designation</label>
              <select name="Delivery_Status" id="Delivery_Status" 
              className="form-control" 
              onChange={(e)=>{
                setStatus(e.target.value); //asign values
            }} value={Delivery_Status}
            required
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
