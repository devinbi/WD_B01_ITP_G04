import React,{useState} from 'react';
import axios from 'axios';

export  default function AddEmployee(){

  const [employeeId, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setBdate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [eQuality, setEquality]= useState("");
  const [wExperence, setWexperence] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [jDate, setJdate] = useState("");



  const [NICErr, setNICErr] = useState("");
  

  function sendData(e){
      e.preventDefault();
      const NICValid = NICValidation();
     

      if(NICValid){

      const newEmployee = {
        employeeId,
        name,
        address,
        dob,
        gender,
        email,
        phone,
        nic,
        eQuality,
        wExperence,
        department,
        designation,
        jDate
      }
      
      console.log(newEmployee)
        axios.post("http://localhost:8070/employee/add",newEmployee).then(()=>{
            alert("Success");
            window.location.reload();
            }).catch((err)=>{
                alert(err);
            })
        }
        } 
    
        //validate function
       const NICValidation = () => {

        const NICErr = {}; //State
        let NICValid = true; //setting flag


        if (nic.trim().length > 12) {

            NICErr.InValidNIC = " Invalid NIC Number"; // error msg
            // alert("**Invalid NIC Number");
           
            NICValid = false;
        } else if (nic.trim().length < 10) {
            NICErr.InValidNIC = " Invalid NIC Number"; // error msg
            // alert("**Invalid NIC Number");
            NICValid = false;
        }


        setNICErr(NICErr);//update error objects
        return NICValid;


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
            
            <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
      <div className="col-sm-6 shadow round pb-3">
      <h1 className="text-center pt-3 text-secondary">Employee Details</h1>
                    <form onSubmit={sendData}>
                    <div class="form-group" >
                            <label for="employeeId">Employee Id :</label>
                            <input type="text" class="form-control" id="employeeId"  placeholder="Enter "
                            onChange={(e)=>{
                                setId(e.target.value);
                            }}/>
                        
                        </div>
                        <div className="form-group">
                            <label for="name">Name :</label>
                            <input type="text" class="form-control" id="name"  placeholder="Enter" onChange={(e)=>{
                                setName(e.target.value);
                            }}/>
                        
                        </div>

                        <div className="form-group">
                            <label for="address">Address :</label>
                            <textarea type="text" class="form-control" id="address" onChange={(e)=>{
                                setAddress(e.target.value);
                            }}>
                            </textarea>
                        </div>


                        <div class="form-group">
                            <label for="birthday">Birthday :</label>
                            <input type="date" class="form-control" id="birthday" 
                            onChange={(e)=>{
                              setBdate(e.target.value);
                            }}/>
                        </div>

                        <div className="form-group">
                            <label for="gender">Gender :</label>
                            <input type="radio"  id="gender" name="Male" value="Male" onChange={(e)=>{
                                setGender(e.target.value);
                            }}/> Male
                         
                            <input type="radio"  id="gender" name="Female" value="Female" onChange={(e)=>{
                                setGender(e.target.value);
                            }}/>Female
                        </div>

                        <div class="form-group">
                            <label for="email">Email :</label>
                            <input type="email" class="form-control" id="email" 
                            onChange={(e)=>{
                              setEmail(e.target.value);
                            }}/>
                        </div>

                        <div class="form-group">
                            <label for="phone">Phone :</label>
                            <input type="text" class="form-control"  pattern="[0-9]{10}"
                            title="Invalid Tel-number"
                             id="phone" 
                            onChange={(e)=>{
                              setPhone(e.target.value);
                            }}/>

                        </div>

                        <div class="form-group">
                            <label for="nic">Nic :</label>
                            <input type="text" class="form-control" id="nic" 
                            onChange={(e)=>{
                              setNic(e.target.value);
                            }}/>
                            {Object.keys(NICErr).map((key) => {
                             return <div style={{ color: "red" }}>{NICErr[key]}</div>
                                                    })}

                        </div>

                        <div class="form-group">
                            <label for="equalification">Equalification :</label>
                            <input type="text" class="form-control" id="equalification" 
                            onChange={(e)=>{
                              setEquality(e.target.value);
                            }}/>
                        </div>

                        <div class="form-group">
                            <label for="wexperience">Working Expirence :</label>
                            <input type="text" class="form-control" id="wexperience" 
                            onChange={(e)=>{
                              setWexperence(e.target.value);
                            }}/>
                        </div>
                        <div class="form-group">
                            <label for="Department">Department :</label>
                            <select name="Department" id="Department"  class="form-control"
                                    onChange={(e)=>{
                        
                                      setDepartment(e.target.value);
                                }
                                }>    <option>choose</option>
                                      <option value="it">It</option>
                                      <option value="Production">Production</option>
                                      <option value="HR">HR</option>
                                      <option value="Account">Account</option>
              
                            </select>
                           
                        </div>
                        <div class="form-group">
                            <label for="Designation">Designation :</label>
                            <select name="Designation" id="Designation"  class="form-control"
                                    onChange={(e)=>{
                        
                                setDesignation(e.target.value);
                                }
                                }>      <option>choose</option>
                                        <option value="driver">Driver</option>
                                        <option value="Officer">Officer</option>
                                        <option value="worker">Worker</option>
              
                            </select>
                           
                        </div>
                        <div class="form-group">
                            <label for="jdate">Joined Date :</label>
                            <input type="date" class="form-control" id="jdate" 
                            onChange={(e)=>{
                              setJdate(e.target.value);
                            }}/>
                        </div>
                       

            <center>
                    <button type="submit" class="btn btn-info btn-lg">ADD</button>
                    </center>
                    </form>
                    
                </div>
                </div>
                </div>
 
          </div>
          )
}

