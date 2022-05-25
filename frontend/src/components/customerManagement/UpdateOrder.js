import React, { useEffect, useState } from "react";
import axios from "axios";
const Host = "http://localhost:8070/order";
export default function UpdateOrder({ data, cl }){
   
    const [OrderId, setOrderId] = useState("");
    const [TypeOfOrder, setType] = useState("");
    const [UnitPrice, setPrice] = useState("");
    const [NoOfUnit, setUnits] = useState("");
    const [OrderStatus, setStatus] = useState("");
    const [OrderDescription, setDescription] = useState("");
    const [DateOfReceipt, setDateOfReceipt] = useState("");
    const [OrderDeliveryDate, setOrderDeliveryDate] = useState("");
   
    useEffect(()=>{
        
        setOrderId(data.OrderId)
        setType(data.TypeOfOrder)
        setPrice(data.UnitPrice)
        setUnits(data.NoOfUnit)
        setStatus(data.OrderStatus)
        setDescription(data.OrderDescription)
        setDateOfReceipt(data.DateOfReceipt)
        setOrderDeliveryDate(data.OrderDeliveryDate)
    },[])
  
  function sendData(e){
    
    e.preventDefault();
          
        const UpdateOrder = {
            OrderId,
            TypeOfOrder,
            UnitPrice,
            NoOfUnit,
            OrderStatus,
            OrderDescription,
            DateOfReceipt,
            OrderDeliveryDate
          }
          

    axios
      .put(`${Host}/update/${data._id}`,UpdateOrder)
      .then((response) => {
        alert("Order Details updated Successfully !");
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
            <label for="OrderId" className="form-label">
            Order ID :
            </label>
            <input
              type="text"
              className="form-control"
              name="OrderId"
              pattern="[o]{1}[0-9]{4}"
              onChange={(e)=>{
                setOrderId(e.target.value);
            }}
              value={OrderId}
              disabled
              required
            />
          </div>

          <div className="mb-3">
            <label for="TypeOfOrder" className="form-label">
              Type of Order
            </label>
            <input
              type="text"
              className="form-control"
              name="TypeOfOrder"
              pattern="[A-Z a-z]{0,30}" 
              onChange={(e)=>{
                setType(e.target.value);
            }}
              value={TypeOfOrder}
              required
            ></input>
          </div>

          

          <div className="mb-3">
            <label for="unitPrice" className="form-label">
            Unit Price
            </label>
            <input
              type="number"
              className="form-control"
              name="unitPrice"
              onChange={(e)=>{
                setPrice(e.target.value);
            }}
              value={UnitPrice}
              required
            ></input>
          </div>
         
          <div className="mb-3">
            <label for="noOfUnit" className="form-label">
            Number of Units
            </label>
            <input
              type="number"
              className="form-control"
              name="noOfUnit"
              onChange={(e)=>{
                setUnits(e.target.value);
            }}
              value={NoOfUnit}
              required
            ></input>
          </div>

          <label for="orderStatus">Order Status</label>
              <select name="orderStatus" id="orderStatus"  
              onChange={(e)=>{
                setStatus(e.target.value);
            }}
             value={OrderStatus}
        >       <option selected disabled value="">Choose...</option>
                <option value="active">Active</option>
                <option value="process">Process</option>
                
              
              </select>
          
              <div className="mb-3">
            <label for="OrderDescription" className="form-label">
            Description of Order
            </label>
            <input
              type="text"
              className="form-control"
              name="OrderDescription"
              pattern="[A-Z a-z 0-9.-]{0,150}"
              onChange={(e)=>{
                setDescription(e.target.value);
            }}
              value={OrderDescription}
              required
            ></input>
          </div>
 

          <div className="mb-3">
            <label for="DateOfReceipt" className="form-label">
            Date of Receipt of Order
            </label>
            <input
              type="date"
              className="form-control"
              name="DateOfReceipt"
              onChange={(e)=>{
                setDateOfReceipt(e.target.value);
            }}
              value={DateOfReceipt}
              required
            ></input>
          </div>

          <div className="mb-3">
            <label for="OrderDeliveryDate" className="form-label">
            Order Delivery Date
            </label>
            <input
              type="date"
              className="form-control"
              name="OrderDeliveryDate"
              onChange={(e)=>{
                setOrderDeliveryDate(e.target.value);
            }}
              value={OrderDeliveryDate}
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