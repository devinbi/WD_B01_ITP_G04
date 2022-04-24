import React, { useEffect, useState } from "react";
import axios from "axios";

const HOST = "http://localhost:8070/Vehicle";

export default function UpdateVehicles({ data, cl }) {

  const [Vehicle_ID,setVid] = useState("");
  const [Vehicle_Registration_No,setVrid] = useState("");
  const [Date,setDate] = useState("");
  const [Vehicle_Type,setType] = useState("");
  const [Vehicle_Brand,setBrand] = useState("");
  const [Mileage,setMilage] = useState("");

  useEffect(()=>{

    setVid(data.Vehicle_ID)
    setVrid(data.Vehicle_Registration_No)
    setDate(data.Date)
    setType(data.Vehicle_Type)
    setBrand(data.Vehicle_Brand)
    setMilage(data.Mileage)


  },[])

  function sendData(e){


    e.preventDefault();
    const updtVehicle ={
        Vehicle_ID,
        Vehicle_Registration_No,
        Date,
        Vehicle_Type,
        Vehicle_Brand,
        Mileage
    }
  

        console.log("form detailsssssssssss",updtVehicle);
    axios .put(
        `${HOST}/update/${data._id}`,
        updtVehicle
        
      )
       .then((response) => {
        alert("Vehicle Details updated Successfully !");
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
            <label for="Vehicle_ID" className="form-label">
              Vehicle ID :
            </label>
            <input
              type="text"
              className="form-control"
              name="Vehicle_ID"
              placeholder="Vehicle_ID"
              onChange={(e)=>{
                setVid(e.target.value);
            }}
              // onChange={handleChange}
              value={Vehicle_ID}
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
                setVrid(e.target.value);
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
                setDate(e.target.value);
            }}
              // onChange={handleChange}
              value={Date}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label for="Vehicle_Type" className="form-label">
             Vehicle Type :
            </label>
            <input
              type="text"
              className="form-control"
              name="Vehicle_Type"
              placeholder="Vehicle_Type"
              onChange={(e)=>{
                setType(e.target.value);
            }}
              // onChange={handleChange}
              value={Vehicle_Type}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label for="Vehicle_Brand" className="form-label">
            Vehicle Brand :
            </label>
            <input
              type="text"
              className="form-control"
              name="Vehicle_Brand"
              placeholder="Vehicle Brand"
              onChange={(e)=>{
                setBrand(e.target.value);
            }}
              // onChange={handleChange}
              value={Vehicle_Brand}
              required
            ></input>
          </div>
          <div className="mb-3">
            <label for="Mileage" className="form-label">
            Mileage :
            </label>
            <input
              type="text"
              className="form-control"
              name="Mileage"
              placeholder="Mileage"
              onChange={(e)=>{
                setMilage(e.target.value);
            }}
              // onChange={handleChange}
              value={Mileage}
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
