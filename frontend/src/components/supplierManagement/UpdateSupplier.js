import React, { useEffect, useState } from "react";
import axios from "axios";
const Host = "http://localhost:8070/supplier";
export default function UpdateSupplier({ data, cl }){
   
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [nic, setNic] = useState("");
    const [address, setAddress] = useState("");
    const [adminId, setAdminId] = useState("");
    
    
    useEffect(()=>{
        
        setName(data.name)
        setEmail(data.email)
        setPhoneNumber(data.phoneNumber)
        setNic(data.nic)
        setAddress(data.address)
        setAdminId(data.adminId)
    
    },[])
  
  function sendData(e){
    
    e.preventDefault();
          
        const updateSupplier = {
          name,
          email,
          phoneNumber,
          nic,
          address,
          adminId
          }
          

    axios
      .put(`${Host}/update/${data._id}`,updateSupplier)
      .then((response) => {
        alert("Supplier Details updated Successfully !");
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
            <label for="name" className="form-label">
              Item Name :
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={(e)=>{
                setName(e.target.value);
            }}
              value={name}
              disabled
            />
          </div>

          <div className="mb-3">
            <label for="email" className="form-label">
              Item Quantity
            </label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={(e)=>{
                setEmail(e.target.value);
            }}
              value={email}
            ></input>
          </div>

          

          <div className="mb-3">
            <label for="phoneNumber" className="form-label">
              Unit Price
            </label>
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              onChange={(e)=>{
                setPhoneNumber(e.target.value);
            }}
              value={phoneNumber}
            ></input>
          </div>
         
          <div className="mb-3">
            <label for="nic" className="form-label">
              Total Cost
            </label>
            <input
              type="text"
              className="form-control"
              name="nic"
              onChange={(e)=>{
                setNic(e.target.value);
            }}
              value={nic}
            ></input>
          </div>

          
          <div className="mb-3">
            <label for="address" className="form-label">
              Admin ID
            </label>
            <input
              type="text"
              className="form-control"
              name="address"
              onChange={(e)=>{
                setAddress(e.target.value);
            }}
              value={address}
            ></input>
          </div>

          <div className="mb-3">
            <label for="adminId" className="form-label">
              Admin ID
            </label>
            <input
              type="text"
              className="form-control"
              name="adminId"
              onChange={(e)=>{
                setAdminId(e.target.value);
            }}
              value={adminId}
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