import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from 'material-table';

export default function AddTechnical(){


  const [deviceCode, setdeviceCode] = useState("");
  const [modelNo, setmodelNo]= useState("");
  const [machineName, setmachineName] = useState("");
  const [employeeId, setId] = useState("");
  const [price, setPrice] = useState("");
  const [department, setdepartment] = useState("");
  const [condition, setcondition] = useState("");
  const [employee, setEmp] = useState([]);

  useEffect(()=>{
        
        
    axios.get('http://localhost:8070/employee/')
    .then((res) =>{
        console.log(res.data);
        setEmp(res.data);
    }).catch((err)=>{
        alert(err.msg);

    })

},[])

  function sendData(e){
      e.preventDefault();
     
      const newTechnical = {
        
        deviceCode,
        modelNo,
        machineName,
        employeeId,
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
        {/*  */}

        <div className="container">
        <div class="container-fluid">
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Employee Details "

                    columns={[
                        { title: "Employee Id", field: "employeeId", type: "string" },
                        { title: "Department", field: "department", type: "string" },
                        { title: "Email", field: "email", type: "string" },
                        

                    ]}

                    data={employee}
                    options={{
                        sorting: true,
                        search:false,
                        paging :true,
                        filtering : true,
                        actionsColumnIndex: -1
                    }}
                   
              />      
                   

                   </div>
        </div>
        

        {/*  */}

        <div className="container pt-5">
        <div className="row justify-content-sm-center pt-5">
      <div className="col-sm-6 shadow round pb-3">
      <h1 className="text-center pt-3 text-secondary">Technical Device Details</h1>
        <form onSubmit={sendData}>
        <div class="form-group">
          <label for="DeviceCode">Device Code</label>
          <input type="text" class="form-control" id="DeviceCode" 
                  pattern="[T][0-9]{4}"  
                  title="ID must include T and 4 digits"
                  onChange={(e)=>{

           setdeviceCode(e.target.value);

       }}
       required
       />
        </div>

        <div class="form-group">
          <label for="ModelNo">Model No</label>
          <input type="text" class="form-control" id="ModelNo" 
                 maxlength="10"
          onChange={(e)=>{

           setmodelNo(e.target.value);

       }}
       required
       />
        </div>

        <div class="form-group">
          <label for="Device">Device</label>
          <input type="text" class="form-control" id="Device" 
                 pattern="[A-Z a-z]{0,15}"
                 title="can't exceed 15 characters"
            
          onChange={(e)=>{

            setmachineName(e.target.value);

        }}
        required
        />
        </div>

        <div class="form-group" >
                            <label for="employeeId">Employee Id</label>
                            <input type="text" class="form-control" id="employeeId" 
                            onChange={(e)=>{
                                setId(e.target.value);
                            }} 
                            required
                            />

        </div>

        <div class="form-group">
          <label for="Price">Price</label>
          <input type="number" class="form-control" id="Price"  onChange={(e)=>{

           setPrice(e.target.value);

        }}
        required
        />
        </div>

        <div class="form-group">
          <label for="Department">Department</label>
          <select class="form-control" id="Department"  onChange={(e)=>{

          setdepartment(e.target.value);

          }}
          required
          >
           <option value="Choose" selected disabled >Choose...</option>
            <option value="Industrial Engineering Department">Industrial Engineering Department </option>
            <option value="EDP/IT department">EDP / IT department </option>
            <option value="Accounting Department">Accounting Department</option>
            <option value="Human Resource and Administration">Human Resource and Administration</option>
            <option value="Shipping and documentation">Shipping and documentation</option>
             </select>
        </div>

       
        <div class="form-group">
          <label for="Condition">Condition</label>
          <select class="form-control" id="Condition"  onChange={(e)=>{

           setcondition(e.target.value);

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