import React, { useEffect, useState } from "react";
import axios from "axios";
const Host = "http://localhost:8070/emaintainance";
export default function UpdateEmaintainance({ data, cl }){
   

    
    const [maintainID, setmaintainID] = useState("");
    const [machineCode, setmachineCode] = useState("");
    const [date, setdate] = useState("");
    const [category, setcategory] = useState("");
    const [condition, setcondition] = useState("");
    const [cost, setcost] = useState("");
   
    useEffect(()=>{
        
    setmaintainID(data.maintainID)
    setmachineCode(data.machineCode)
    setdate(data.date)
    setcategory(data.category)
    setcondition(data.condition)
    setcost(data.cost)
    
    },[])
  
  function sendData(e){
    
    e.preventDefault();
          
        const UpdateEmaintainance = {
            maintainID,
            machineCode,
            date,
            category,
            condition,
            cost
          }
          

    axios
      .put(`${Host}/update/${data._id}`,UpdateEmaintainance)
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
            <label for="maintainID" className="form-label">
              Maintain ID :
            </label>
            <input
              type="text"
              className="form-control"
              name="maintainID"
              onChange={(e)=>{
                setmaintainID(e.target.value);
            }}
              value={maintainID}
              disabled
            />
          </div>

          <div className="mb-3">
            <label for="  machineCode" className="form-label">
              Machine Code
            </label>
            <input
              type="text"
              className="form-control"
              name="machineCode"
              onChange={(e)=>{
            setmachineCode(e.target.value);
            }}
              value={machineCode}
            ></input>
          </div>

          <div className="mb-3">
            <label for="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              name="date"
              onChange={(e)=>{
            setdate(e.target.value);
            }}
              value={date}
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

          <div className="mb-3">
            <label for="cost" className="form-label">
              Cost
            </label>
            <input
              type="text"
              className="form-control"
              name="cost"
              onChange={(e)=>{
                setcost(e.target.value);
            }}
              value={cost}
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