import React,{useState} from "react"
import axios from "axios";

export default function AddDressmaking(){

  const [machineCode, setMachineCode] = useState("");
  const [machineName, setMachineName]= useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
 

  function sendData(e){
      e.preventDefault();
     
      const newDressmaking = {
        
        machineCode,
        machineName,
        category,
        price,
        condition
        

      }
       console.log("new add",newDressmaking)
     axios.post("http://localhost:8070/dressmaking/add",newDressmaking).then(()=>{
      //  console.log(res.data)
     alert("details added")
     }).catch((err)=>{
       alert(err)
     })

  }
    return(
        <div className="container">
        <form onSubmit={sendData}>
        <div class="form-group">
          <label for="MachineCode">Machine Code</label>
          <input type="text" class="form-control" id="MachineCode" onChange={(e)=>{

           setMachineCode(e.target.value);

          }}/>
        </div>

        <div class="form-group">
          <label for="MachineName">Machine Name</label>
          <input type="text" class="form-control" id="MachineName"onChange={(e)=>{
             
             setMachineName(e.target.value);

          }}/>
        </div>

        <div class="form-group">
          <label for="Category">Category</label>
          <select class="form-control" id="Category" onChange={(e)=>{

            setCategory(e.target.value);

          }}>
            <option>Choose...</option>
            <option>Sewing Tools</option>
            <option>Pressing Tools</option>
            <option>Fabric Measuring Tools</option>
            <option>Dress Cutting Tools</option>
             </select>
        </div>

        <div class="form-group">
          <label for="Price">Price</label>
          <input type="text" class="form-control" id="Price" onChange={(e)=>{

           setPrice(e.target.value);

          }}/>
        </div>

        <div class="form-group">
          <label for="Condition">Condition</label>
          <select class="form-control" id="Condition"  onChange={(e)=>{

            setCondition(e.target.value);

          }}>
            <option>Choose...</option>
            <option>New</option>
            <option>Old</option>
            <option>Have to repair</option>
            <option>Have to replace</option>
            
          </select>
       
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
       
      </form>
      </div>
    )

}