import React,{useState} from 'react';
import axios from 'axios';


export default function AddSalary(){
    const [employeeId, setId] = useState("");
    const [labourHr, setLabourHr] = useState("");
    const [otHr, setOtHr] = useState("");
    const [leave, setLeave] = useState("");
    const [designation, setDesignation] = useState("");
    const [salary, setSalary] = useState("");
   


    function sendData(e){
        e.preventDefault();
      
        const newSalary = {
          employeeId,
          labourHr,
          otHr,
          leave,
          designation,
          salary
        }
        
     
          axios.post("http://localhost:8070/salary/add",newSalary).then(()=>{
              alert("Success");
              window.location.reload();
              }).catch((err)=>{
                  alert(err);
              })
     
          }
       
 
          return(
            <div>
            <div class="component-body">
        
            <div class="area">
                    <nav class="main-menu bg-primary" >
                        <ul>
                        <li class="has-subnav">
                                <a href="#">
                                <i class="fa fa-house"></i>
                                    <span class="nav-text">Dash Board</span>
                                    <i class="fa fa-angle-right"></i>
                                </a>
                            </li>
                            <hr></hr>
                            <li class="has-subnav">
                                <a href="/viewE">
                                    <i class="fa fa-users"></i>
                                    <span class="nav-text">View Employee List</span>
                                    <i class="fa fa-angle-right"></i>
                                </a>
                                </li>
                            <li class="has-subnav">
                                <a href="/adde">
                                <i class="fa fa-user-plus"></i>
                                    <span class="nav-text">Add Employee</span>
                                    <i class="fa fa-angle-right"></i>
                                </a>
                            </li>
                            <hr></hr>
                            
                            <li class="has-subnav">
                                <a href="/viewS">
                                <i class="fa fa-wallet"></i>
                                    <span class="nav-text">View Salary Details</span>
                                    <i class="fa fa-angle-right"></i>
                                </a>
                            </li>
                            <li class="has-subnav">
                                <a href="/adds">
                                <i class="fa fa-hand-holding-dollar"></i>
                                    <span class="nav-text">Add Salary Detials</span>
                                    <i class="fa fa-angle-right"></i>
                                </a>
                            </li>
                            <hr></hr>
                            <li class="has-subnav">
                                <a href="/alle">
                                <i class="fa fa-users-gear"></i>
                                    <span class="nav-text">Manage Employee</span>
                                    <i class="fa fa-angle-right"></i>
                                </a>
                            </li>
                            <hr></hr>
                            <li class="has-subnav">
                                <a href="/alls">
                                <i class="fa fa-scale-balanced"></i>
                                    <span class="nav-text">Salary Maintains</span>
                                    <i class="fa fa-angle-right"></i>
                                </a>
                            </li>
                            <hr></hr>
                            <li class="has-subnav">
                                <a href="/report">
                                <i class="fa fa-download" aria-hidden="true"></i>
                                    <span class="nav-text">Reports</span>
                                    <i class="fa fa-angle-right"></i>
                                </a>
                            </li>
                        </ul>
    
                    </nav>
                </div>
                </div>
               
                
                
                <div className="container">
                    <form onSubmit={sendData}>
                    <div class="form-group" >
                            <label for="employeeId">Employee Id :</label>
                            <input type="text" class="form-control" id="employeeId"  placeholder="Enter "
                            onChange={(e)=>{
                                setId(e.target.value);
                            }}/>
                        
                        </div>
                        <div className="form-group">
                            <label for="name">Labour Hours :</label>
                            <input type="text" class="form-control" id="name"  placeholder="Enter" onChange={(e)=>{
                                setLabourHr(e.target.value);
                            }}/>
                        
                        </div>

                        <div className="form-group">
                            <label for="otHr">OT Hours :</label>
                            <input type="text" class="form-control" id="otHr" onChange={(e)=>{
                                setOtHr(e.target.value);
                            }}/>
                        </div>


                        <div class="form-group">
                            <label for="leave">Leaves :</label>
                            <input type="text" class="form-control" id="leave" 
                            onChange={(e)=>{
                                setLeave(e.target.value);
                            }}/>
                        </div>
                        <div class="form-group">
                            <label for="Designation">Designation :</label>
                            <select name="Designation" id="Designation"  class="form-control"
                                    onChange={(e)=>{
                        
                                setDesignation(e.target.value);
                                }
                                }>      <option>Choose</option>
                                        <option value="driver">Driver</option>
                                        <option value="Officer">Officer</option>
                                        <option value="worker">Worker</option>
              
                            </select>
                           
                        </div>
                        <div className="form-group">
                            <label for="salary">OT Hours :</label>
                            <input type="text" class="form-control" id="salary" onChange={(e)=>{
                                setSalary(e.target.value);
                            }}/>
                        </div>

            
                    <button type="submit" class="btn btn-info btn-lg">ADD</button>
                    </form>
                    
                </div>
                </div>

               


            
            )


}