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
      <div className="container-fluid">
        <form onSubmit={sendData}>
          <div className="mb-3">
            <label for="CustomerId" className="form-label">
            Customer ID :
            </label>
            <input
              type="text"
              className="form-control"
              name="CustomerId"
              pattern="[c]{1}[0-9]{4}"
              onChange={(e)=>{
                setId(e.target.value);
            }}
              value={CustomerId}
              disabled
              required
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
              pattern="[A-Z a-z]{0,50}" 
              onChange={(e)=>{
                setName(e.target.value);
            }}
              value={CustomerName}
              required
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
              pattern="[0-9]{10}"
              onChange={(e)=>{
                setNumber(e.target.value);
            }}
              value={ContactNumber}
              required
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
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onChange={(e)=>{
                setEmail(e.target.value);
            }}
              value={Email}
              required
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
              pattern="[A-Z a-z 0-9]{0,70}"
              onChange={(e)=>{
                setAddress(e.target.value);
            }}
              required
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
              pattern="[A-Z a-z]{0,20}"
              onChange={(e)=>{
                setCountry(e.target.value);
            }}
              value={Country}
              required
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
              pattern="[0-9]{9}[V]{1}"
              onChange={(e)=>{
                setNic(e.target.value);
            }}
              value={NIC}
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