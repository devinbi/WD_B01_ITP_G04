import React, { useEffect, useState } from "react";
import axios from "axios";
const Host = "http://localhost:8070/customer";
export default function UpdateCustomer({ data, cl }){
   
  const [CustomerId, setId] = useState("");
  const [CustomerName, setName] = useState("");
  const [ContactNumber, setNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Country, setCountry] = useState("");
  const [NIC, setNic] = useState("");
   
    useEffect(()=>{
        
    setId(data.CustomerId)
    setName(data.CustomerName)
    setNumber(data.ContactNumber)
    setEmail(data.Email)
    setAddress(data.Address)
    setCountry(data.Country)
    setNic(data.NIC)
    },[])
  
  function sendData(e){
    
    e.preventDefault();
          
        const updateCustomer = {
            CustomerId,
            CustomerName,
            ContactNumber,
            Email,
            Address,
            Country,
            NIC 
          }
          

    axios
      .put(`${Host}/update/${data._id}`,updateCustomer)
      .then((response) => {
        alert("Customer Details updated Successfully !");
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
            <label for="CustomerId" className="form-label">
            Customer ID :
            </label>
            <input
              type="text"
              className="form-control"
              name="CustomerId"
              onChange={(e)=>{
                setId(e.target.value);
            }}
              value={CustomerId}
              disabled
            />
          </div>

          <div className="mb-3">
            <label for="CustomerName" className="form-label">
            Customer Name
            </label>
            <input
              type="text"
              className="form-control"
              name="CustomerName"
              onChange={(e)=>{
                setName(e.target.value);
            }}
              value={CustomerName}
            ></input>
          </div>

          

          <div className="mb-3">
            <label for="ContactNumber" className="form-label">
            Contact Number
            </label>
            <input
              type="number"
              className="form-control"
              name="ContactNumber"
              onChange={(e)=>{
                setNumber(e.target.value);
            }}
              value={ContactNumber}
            ></input>
          </div>
         
          <div className="mb-3">
            <label for="Email" className="form-label">
            Email
            </label>
            <input
              type="email"
              className="form-control"
              name="Email"
              onChange={(e)=>{
                setEmail(e.target.value);
            }}
              value={Email}
            ></input>
          </div>

          <div className="mb-3">
            <label for="Address" className="form-label">
            Address
            </label>
            <input
              type="text"
              className="form-control"
              name="Address"
              onChange={(e)=>{
                setAddress(e.target.value);
            }}
              value={Address}
            ></input>
          </div>
          
              <div className="mb-3">
            <label for="Country" className="form-label">
            Country
            </label>
            <input
              type="text"
              className="form-control"
              name="Country"
              onChange={(e)=>{
                setCountry(e.target.value);
            }}
              value={Country}
            ></input>
          </div>
 

          <div className="mb-3">
            <label for="NIC" className="form-label">
            NIC Number
            </label>
            <input
              type="text"
              className="form-control"
              name="NIC"
              onChange={(e)=>{
                setNic(e.target.value);
            }}
              value={NIC}
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