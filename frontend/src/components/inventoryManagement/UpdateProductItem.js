import React, { useEffect, useState } from "react";
import axios from "axios";
const Host = "http://localhost:8070/ManufacturedItem";


export default function UpdateProductItem({ data, cl }){
   
    const [ItemId, setItemId] = useState("");
    const [ItemName, setItemName] = useState("");
    const [Quantity, setQuantity] = useState("");
    const [Material, setMaterial] = useState("");
    const [Colour, setColour] = useState("");
    const [Size, setSize] = useState("");
   
    useEffect(()=>{
        
        setItemId(data.ItemId)
        setItemName(data.ItemName)
        setQuantity(data.Quantity)
        setMaterial(data.Material)
        setColour(data.Colour)
        setSize(data.Size)
    },[])
  
  function sendData(e){
    
    e.preventDefault();
          
        const updateProductItems = {
            ItemId,
            ItemName,
            Quantity,
            Material,
            Colour,
            Size
          }
          

    axios.put(`${Host}/update/${data._id}`,updateProductItems)
      .then((response) => {
        alert("Product Item Details Updated Successfully!");
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
            <label for="ItemId" className="form-label">
              Item Id :
            </label>
            <input
                type="text"
                className="form-control"
                name="ItemId"
                placeholder="PXXXX"
							  pattern="[P][0-9]{4}"
                required
                onChange={(e)=>{
                setItemId(e.target.value);
            }}
                value={ItemId}
                disabled
            />
          </div>


          <div className="mb-3">
            <label for="ItemName" className="form-label">
              Item Name :
            </label>
            <input
                type="text"
                className="form-control"
                name="ItemName"
                pattern="[A-Z a-z ()]{0,20}"
                required
                onChange={(e)=>{
                setItemName(e.target.value);
            }}
                value={ItemName}>
            </input>
          </div>


          <div className="mb-3">
            <label for="Quantity" className="form-label">
              Quantity :
            </label>
            <input
                type="number"
                min={0}
                className="form-control"
                name="Quantity"
                title="Minimum quantity you can enter is 0"
                required
                onChange={(e)=>{
                setQuantity(e.target.value);
            }}
                value={Quantity}>
                  
            </input>
          </div>
         

          <div className="mb-3">
            <label for="Material" className="form-label">
              Material :
            </label>
            <input
                type="text"
                className="form-control"
                name="Material"
                pattern="[A-Z a-z]{0,10}"
                required
                onChange={(e)=>{
                setMaterial(e.target.value);
            }}
                value={Material} >
            </input>
          </div>

          <div className="mb-3">
            <label for="Colour" className="form-label">
              Colour :
            </label>
            <input
                type="text"
                className="form-control"
                name="Colour"
                pattern="[A-Z a-z]{0,10}"
                title='enter valid colour name'
                required
                onChange={(e)=>{
                setColour(e.target.value);
            }}
                value={Colour} >

            </input>
          </div>


          <div className="mb-3">
          <label for="Size">
            Size :
          </label>
          <select 
            name="Size"
            id="Size"
            required  
            onChange={(e)=>{

            setSize(e.target.value);

            }}

            value={Size} > 

                <option selected disabled value="">Select Size</option>
                <option value="S">Small</option>
                <option value="L">Large</option>
                <option value="XL">XL</option>
                <option value="2XL">2XL</option>
                <option value="3XL">3XL</option>
                <option value="4XL">4XL</option>
              
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