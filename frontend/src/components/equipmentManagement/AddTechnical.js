import React,{useState} from "react"
import axios from "axios";

export default function AddTechnical(){


  const [deviceCode, setdeviceCode] = useState("");
  const [modelNo, setmodelNo]= useState("");
  const [machineName, setmachineName] = useState("");
  const [price, setPrice] = useState("");
  const [department, setdepartment] = useState("");
  const [condition, setcondition] = useState("");

  function sendData(e){
      e.preventDefault();
     
      const newTechnical = {
        
        deviceCode,
        modelNo,
        machineName,
        price,
        department,
        condition
        

      }
       console.log("new add",newTechnical)
     axios.post("http://localhost:8070/technical/add",newTechnical).then(()=>{
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
        <form onSubmit={sendData}>
        <div class="form-group">
          <label for="DeviceCode">Device Code</label>
          <input type="text" class="form-control" id="DeviceCode" pattern="[T][0-9]{4}"   onChange={(e)=>{

           setdeviceCode(e.target.value);

       }}/>
        </div>

        <div class="form-group">
          <label for="ModelNo">Model No</label>
          <input type="text" class="form-control" id="ModelNo"  onChange={(e)=>{

           setmodelNo(e.target.value);

       }}/>
        </div>

        <div class="form-group">
          <label for="Device">Device</label>
          <input type="text" class="form-control" id="Device"  onChange={(e)=>{

            setmachineName(e.target.value);

        }}/>
        </div>

        <div class="form-group">
          <label for="Price">Price</label>
          <input type="text" class="form-control" id="Price"  onChange={(e)=>{

           setPrice(e.target.value);

        }}/>
        </div>

        <div class="form-group">
          <label for="Department">Department</label>
          <select class="form-control" id="Department"  onChange={(e)=>{

          setdepartment(e.target.value);

          }}>
            <option>Choose...</option>
            <option>Industrial Engineering Department </option>
            <option>EDP / IT department </option>
            <option>Accounting Department</option>
            <option>Human Resource and Administration</option>
            <option>Shipping and documentation</option>
             </select>
        </div>

       
        <div class="form-group">
          <label for="Condition">Condition</label>
          <select class="form-control" id="Condition"  onChange={(e)=>{

           setcondition(e.target.value);

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
      </div>
    )

}