import React, { useEffect, useState } from "react";
import axios from "axios";
const Host = "http://localhost:8070/item";
export default function UpdateItem({ data, cl }){
   
    const [itemName, setName] = useState("");
    const [itemQuantity, setQuantity] = useState("");
    const [unitPrice, setPrice] = useState("");
    const [totalCost, setCost] = useState("");
    const [adminId, setId] = useState("");
    
   
    useEffect(()=>{
        
        setName(data.itemName)
        setQuantity(data.itemQuantity)
        setPrice(data.unitPrice)
        setCost(data.totalCost)
        setId(data.adminId)
    
    },[])
  
  function sendData(e){
    
    e.preventDefault();
          
        const updateItems = {
            itemName,
            itemQuantity,
            unitPrice,
            totalCost,
            adminId
            
          }
          

    axios
      .put(`${Host}/update/${data._id}`,updateItems)
      .then((response) => {
        alert("Item Details updated Successfully !");
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
            <label for="itemName" className="form-label">
              Item Name :
            </label>
            <input
              type="text"
              className="form-control"
              name="itemName"
              onChange={(e)=>{
                setName(e.target.value);
            }}
              value={itemName}
              disabled
            />
          </div>

          <div className="mb-3">
            <label for="itemQuantity" className="form-label">
              Item Quantity
            </label>
            <input
              type="text"
              className="form-control"
              name="itemQuantity"
              onChange={(e)=>{
                setQuantity(e.target.value);
            }}
              value={itemQuantity}
            ></input>
          </div>

          

          <div className="mb-3">
            <label for="unitPrice" className="form-label">
              Unit Price
            </label>
            <input
              type="text"
              className="form-control"
              name="unitPrice"
              onChange={(e)=>{
                setPrice(e.target.value);
            }}
              value={unitPrice}
            ></input>
          </div>
         
          <div className="mb-3">
            <label for="totalCost" className="form-label">
              Total Cost
            </label>
            <input
              type="text"
              className="form-control"
              name="totalCost"
              onChange={(e)=>{
                setCost(e.target.value);
            }}
              value={totalCost}
            ></input>
          </div>


          <div className="mb-3">
            <label for="adminId" className="form-label"> Admin ID </label>
            <select 
              className="form-control"
              name="Size"
              id="adminId"
              required  
              onChange={(e)=>{

                setId(e.target.value);

              }}

              value={adminId} > 

                <option selected disabled value="">Select Admin</option>
                <option value="Admin 01">Admin 01</option>
                <option value="Admin 02">Admin 02</option>
                <option value="Admin 03">Admin 03</option>
                
              </select>
            </div>

          
          {/* <div className="mb-3">
            <label for="adminId" className="form-label">
              Admin ID
            </label>
            <input
              type="text"
              className="form-control"
              name="adminId"
              onChange={(e)=>{
                setId(e.target.value);
            }}
              value={adminId}
            ></input>
          </div> */}

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