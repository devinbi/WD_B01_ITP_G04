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

      <div>
          <div class="component-body">
        
        <div class="area">
                <nav class="main-menu bg-primary">
                    <ul>
                        <li>
                            <a href="/AllT">
                                <i class="fa fa-home"></i>
                                <span class="nav-text">Dashboard</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/addDressmaking">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text">Add Dressmaking</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <li class="has-subnav">
                            <a href="/AllDressmakings">
                            <i class="fa fa-file" aria-hidden="true"></i>
                                <span class="nav-text">View Dressmaking</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/addTechnical">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text">Add Technical</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <li class="has-subnav">
                            <a href="/AllTechnicals">
                            <i class="fa fa-file" aria-hidden="true"></i>
                                <span class="nav-text">View Technical</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/addEmaintainance">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text">Add Maintenance</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>

                        <li class="has-subnav">
                            <a href="/AllEmaintainance">
                               <i class="fa fa-file" aria-hidden="true"></i>
                                <span class="nav-text">View Maintainance </span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/Report">
                            <i class="fa fa-download" aria-hidden="true"></i>
                                <span class="nav-text">Equipment Maintainance Report</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                       
                    </ul>

                    <ul class="logout">
                        <li>
                            <a href="/">
                                <i class="fa fa-power-off"></i>
                                <span class="nav-text">Logout</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>
        <div className="container">
        <center><h3>ADD MAINTAINANCE DETAILS</h3></center>
        <form onSubmit={sendData}>

        <div class="form-group">
          <label for="MaintainanceID">Maintainance ID</label>
          <input type="text" class="form-control" id="MaintainanceID" pattern="[M][0-9]{4}" onChange={(e)=>{

                  setmaintainID(e.target.value);

        }}/>
        </div>

        <div class="form-group">
          <label for="MachineCode">Device/Machine Code</label>
          <input type="text" class="form-control" id="MachineCode" pattern="[D,T][0-9]{4}" onChange={(e)=>{

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
             <option value="Choose" selected disabled >Choose...</option>
            <option value="Dressmaking Tools">Dressmaking Tools</option>
            <option value="Technical Devices">Technical Devices</option>
             </select>
        </div>

        <div class="form-group">
          <label for="Condition">Condition</label>
          <select class="form-control" id="Condition" onChange={(e)=>{

                  setcondition(e.target.value);

           }}>
            
            <option value="Choose" selected disabled >Choose...</option>
            <option value="Have to repair">Have to repair</option>
            <option value="Have to replace">Have to replace</option>
            
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
      </div>
    )

}