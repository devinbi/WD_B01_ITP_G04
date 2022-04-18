import React,{useState} from "react"
import axios from "axios";

export default function AddEmaintainance(){

  const [maintainID, setmaintainID] = useState("");
  const [machineCode, setmachineCode]= useState("");
  const [date, setdate] = useState("");
  const [category, setcategory] = useState("");
  const [condition, setcondition] = useState("");
  const [cost, setcost] = useState("");
 

  function sendData(e){
      e.preventDefault();
     
      const newEmaintainance = {
        
        maintainID,
        machineCode,
        date,
        category,
        condition,
        cost
        

      }
       console.log("new add",newEmaintainance)
     axios.post("http://localhost:8070/emaintainance/add",newEmaintainance).then(()=>{
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
          <label for="MaintainanceID">Maintainance ID</label>
          <input type="text" class="form-control" id="MaintainanceID" onChange={(e)=>{

                  setmaintainID(e.target.value);

        }}/>
        </div>

        <div class="form-group">
          <label for="MachineCode">Device/Machine Code</label>
          <input type="text" class="form-control" id="MachineCode" onChange={(e)=>{

             setmachineCode(e.target.value);

        }}/>
        </div>

        <div class="form-group">
          <label for="Date">Date</label>
          <input type="date" class="form-control" id="Date" onChange={(e)=>{

            setdate(e.target.value);

           }}/>
        </div>

        <div class="form-group">
          <label for="Category">Category</label>
          <select class="form-control" id="Category" onChange={(e)=>{

               setcategory(e.target.value);

           }}>
            <option>Choose...</option>
            <option>Dressmaking Tools</option>
            <option>Technical Devices</option>
             </select>
        </div>

        <div class="form-group">
          <label for="Condition">Condition</label>
          <select class="form-control" id="Condition" onChange={(e)=>{

                  setcondition(e.target.value);

           }}>
            
            <option>Choose...</option>
            <option>New</option>
            <option>Old</option>
            <option>Have to repair</option>
            <option>Have to replace</option>
            
          </select>
        </div>

        <div class="form-group">
          <label for="Cost">Cost</label>
          <input type="text" class="form-control" id="Cost" onChange={(e)=>{

            setcost(e.target.value);

           }}/>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
       
      </form>
      </div>
    )

}