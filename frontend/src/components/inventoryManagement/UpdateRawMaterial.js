import React, { useEffect, useState } from "react";
import axios from "axios";
const Host = "http://localhost:8070/RawMaterial";


export default function UpdateRawMaterial({ data, cl }){
   
    const [ItemId, setItemId] = useState("");
    const [ItemName, setItemName] = useState("");
    const [Quantity, setQuantity] = useState("");
    const [ItemType, setItemType] = useState("");
   
    useEffect(()=>{
        
        setItemId(data.ItemId)
        setItemName(data.ItemName)
        setQuantity(data.Quantity)
        setItemType(data.ItemType)
        
    },[])
  
  function sendData(e){
    
    e.preventDefault();
          
        const updateRawMaterial = {
            ItemId,
            ItemName,
            Quantity,
            ItemType,
          }
          

    axios.put(`${Host}/update/${data._id}`,updateRawMaterial)
      .then((response) => {
        alert("Raw Material Details Updated Successfully!");
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
            <label for="ItemId" className="form-label">
                Item Id :
            </label>
            <input
                type="text"
                className="form-control"
                name="ItemId"
                placeholder="RXXXX"
							  pattern="[R][0-9]{4}"
                onChange={(e)=>{
                setItemId(e.target.value);
            }}
                value={ItemId}
                disabled
            />
          </div>


          <div className="mb-3">
            <label for="ItemName" className="form-label">
                Item Name:
            </label>
            <input
                type="text"
                className="form-control"
                name="ItemName"
                onChange={(e)=>{
                setItemName(e.target.value);
            }}
                value={ItemName}>
            </input>
          </div>


          <div className="mb-3">
            <label for="Quantity" className="form-label">
                Quantity
            </label>
            <input
                type="text"
                className="form-control"
                name="Quantity"
                onChange={(e)=>{
                setQuantity(e.target.value);
            }}
                value={Quantity}>
            </input>
          </div>
         

          <div className="mb-3">
          <label for="ItemType">Item Type</label>

          <select name="ItemType" id="ItemType"  
            onChange={(e)=>{

            setItemType(e.target.value);

            }}

            value={ItemType} > 

                <option selected>Select Item Type</option>
                <option value="Fabric">Fabric</option>
                <option value="Trims">Trims</option>
                <option value="Accessories">Accessories</option>
                <option value="Fabric Paints">Fabric Paints</option>
            </select>
            </div>


          <button
            type="submit"
            className="btn btn-success"
            style={{ margin: "5px" }}>
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