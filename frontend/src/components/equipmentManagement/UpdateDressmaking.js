import React, { useEffect, useState } from "react";
import axios from "axios";
const Host = "http://localhost:8070/dressmaking";
export default function UpdateDressmaking({ data, cl }){
   
   
    const [machineCode, setmachineCode] = useState("");
    const [machineName, setmachineName] = useState("");
    const [category, setcategory] = useState("");
    const [price, setprice] = useState("");
    const [condition, setcondition] = useState("");
    
   
    useEffect(()=>{
        
    setmachineCode(data.machineCode)
    setmachineName(data.machineName)
    setcategory(data.category)
    setprice(data.price)
    setcondition(data.condition)
    
    },[])
  
  function sendData(e){
    
    e.preventDefault();
          
        const UpdateDressmakings = {
            machineCode,
            machineName,
            category,
            price,
            condition,
          }
          

    axios
      .put(`${Host}/update/${data._id}`,UpdateDressmakings)
      .then((response) => {
        alert("Details updated Successfully !");
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
            <label for="machineCode" className="form-label">
              Machine Code :
            </label>
            <input
              type="text"
              className="form-control"
              name="machineCode"
              onChange={(e)=>{
                setmachineCode(e.target.value);
            }}
              value={machineCode}
              disabled
            />
          </div>

          <div className="mb-3">
            <label for=" machineName" className="form-label">
              Machine Name
            </label>
            <input
              type="text"
              className="form-control"
              name="machineName"
              pattern="[A-Z a-z]{0,25}"
              title="can't exceed 25 characters"
              onChange={(e)=>{
            setmachineName(e.target.value);
            }}
              value={machineName}
            ></input>
          </div>

          <div className="mb-3">
          <label for="category" className="form-label">Category</label>
              <select name="category" id="category"  
              className="form-control"
              onChange={(e)=>{
                setcategory(e.target.value);
            }}
             value={category}
        >      
            <option>Choose...</option>
            <option>Sewing Tools</option>
            <option>Pressing Tools</option>
            <option>Fabric Measuring Tools</option>
            <option>Dress Cutting Tools</option>    
              
              </select>
</div>
          <div className="mb-3">
            <label for="price" className="form-label">
              Price
            </label>
            <input
              type="number"
              className="form-control"
              name="price"
              onChange={(e)=>{
                setprice(e.target.value);
            }}
              value={price}
            ></input>
          </div>

          <div className="mb-3">
          <label for="condition" className="form-label">Condition</label>
              <select name="condition" id="condition"  
              className="form-control"
              onChange={(e)=>{
                setcondition(e.target.value);
            }}
             value={condition}
        >      
            <option>Choose...</option>
            <option>New</option>
            <option>Old</option>
            <option>Have to repair</option>
            <option>Have to replace</option>    
              
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