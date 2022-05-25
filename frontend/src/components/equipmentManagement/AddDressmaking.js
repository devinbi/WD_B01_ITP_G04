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
                            <a href="/ReportE">
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
            <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
      <div className="col-sm-6 shadow round pb-3">
      <h1 className="text-center pt-3 text-secondary">Dressmaking Tools Details</h1>
        <form onSubmit={sendData}>
        <div class="form-group">
          <label for="MachineCode">Machine Code</label>
          <input type="text" class="form-control" id="MachineCode" 
                 pattern="[D][0-9]{4}"
                 title="ID must include D and 4 digits"
   onChange={(e)=>{

           setMachineCode(e.target.value);

          }}
          required
          />
        </div>

        <div class="form-group">
          <label for="MachineName">Machine Name</label>
          <input type="text" class="form-control" id="MachineName"
                 pattern="[A-Z a-z]{0,15}"
                 title="can't exceed 15 characters"
          onChange={(e)=>{
             
             setMachineName(e.target.value);

          }}
          required
          />
        </div>

        <div class="form-group">
          <label for="Category">Category</label>
          <select class="form-control" id="Category" onChange={(e)=>{

            setCategory(e.target.value);

          }}
          required
          >
            <option value="Choose" selected disabled >Choose...</option>
            <option value="Sewing Tools">Sewing Tools</option>
            <option value="Pressing Tools">Pressing Tools</option>
            <option value="Fabric Measuring Tools">Fabric Measuring Tools</option>
            <option value="Dress Cutting Tools">Dress Cutting Tools</option>
             </select>
        </div>

        <div class="form-group">
          <label for="Price">Price</label>
          <input type="number" class="form-control" id="Price" onChange={(e)=>{

           setPrice(e.target.value);

          }} 
          required
          />
        </div>

        <div class="form-group">
          <label for="Condition">Condition</label>
          <select class="form-control" id="Condition"  onChange={(e)=>{

            setCondition(e.target.value);

          }}
          required
          >
            <option value="Choose" selected disabled >Choose...</option>
            <option value="New">New</option>
            <option value="Old">Old</option>
            <option value="Have to repair">Have to repair</option>
            <option value="Have to replace">Have to replace</option>
            
          </select>
       
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
       
      </form>
      </div>
      </div>
      </div>
      </div>
    )

}