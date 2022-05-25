import React,{useState} from "react";
import axios from "axios";

export default function AddMaintenance(){
    const [Maintenance_ID,setMid] = useState("");
    const [Vehicle_Registration_No,setVid] = useState("");
    const [Date,setDate] = useState("");
    const [Description,setDescription] = useState("");
    const [maintenance_Cost,setCost] = useState("");
  
    
    function sendData(e){
        e.preventDefault();
        const newMaintenance ={
            Maintenance_ID,
            Vehicle_Registration_No,
            Date,
            Description,
            maintenance_Cost
        }
            console.log("new Maintenanace",newMaintenance);
        axios.post("http://localhost:8070/Maintenance/add",newMaintenance).then(()=>{
        alert("Maintenance Added")
        window.location.reload();

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
                                <i class="fa fa-home "></i>
                                <span class="nav-text">Dashboard</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/vadd">
                                <i class="fa fa-plus-circle"></i>
                                <span class="nav-text">Add Vehicle</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <li class="has-subnav">
                            <a href="/vview">
                             <i class="fa fa-truck " ></i>
                                <span class="nav-text">Vehicle List</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li>
                            <a href="/viewO">
                            
                                <i class="fa fa-truck-arrow-right "></i>
                                <span class="nav-text">Order Details</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/Tadd">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text">Add Transort Detials</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <li class="has-subnav">
                            <a href="/Tview">
                            <i class="fa fa-file-text-o" aria-hidden="true"></i>
                                <span class="nav-text">Transport Details</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/madd">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>

                                <span class="nav-text">Add Maintenance Details</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <li class="has-subnav">
                            <a href="/mview">
                                <i class="fa fa-wrench "></i>
                                <span class="nav-text">View Maintenance</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/viewD">
                                <i class="fa fa-users" aria-hidden="true"></i>
                                <span class="nav-text">Driver Details</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/rview">
                            <i class="fa fa-download" aria-hidden="true"></i>
                                <span class="nav-text">Transport Reports</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                    </ul>

                    <ul class="logout">
                        <li>
                            <a href="/">
                                <i class="fa fa-power-off "></i>
                                <span class="nav-text">Logout</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>
            
            {/* form */}
        <div >
        <div className="container  mb-2">
        <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
        <h1 className="text-center pt-3 text-secondary">Maintainence Details</h1>
                    <form onSubmit={sendData}>
                    <div class="form-group">
                            <label for="tid">Maintenance ID :</label>
                            <input type="text" class="form-control" id="vid" placeholder="M-XXXX"
							pattern="[M][0-9]{4}"
                            onChange={(e)=>{
                                setMid(e.target.value);
                            }}
                            required
                            />
                        
                        </div>
                        <div className="form-group">
                            <label for="vid">Vehicle Registration No :</label>
                            <input type="text" class="form-control" id="vid"  placeholder="CL-XXXX or CLA-XXXX"
							pattern="[A-Z0-9]{2,3}[-][0-9]{4}"
							title="Vehicle registraion number should be CL-XXXX / CLA-XXXX" onChange={(e)=>{
                                setVid(e.target.value);
                            }}
                            required/>
                        
                        </div>

                        <div className="form-group">
                            <label for="date">Date :</label>
                            <input type="date" class="form-control" id="date" onChange={(e)=>{
                                setDate(e.target.value);
                            }}
                            required
                            />
                        </div>


                        <div class="form-group">
                            <label for="description">Description :</label>
                            <input type="text" class="form-control" id="description"
                            	pattern="[A-Z a-z0-9]{0,120}"
                                title="Description max length should be 120" 
                            onChange={(e)=>{
                                setDescription(e.target.value);
                            }}
                            required
                            />
                        </div>
                        <div class="form-group">
                            <label for="cost">maintenance Cost :</label>
                            <input type="text" class="form-control" id="cost" 
                            onChange={(e)=>{
                                setCost(e.target.value);
                            }}
                            required
                            />
                        </div>
            
                    <button type="submit" class="btn btn-primary">ADD</button>
                    </form>
                    
                </div>
                </div>
                </div>

        </div>
      </div>
    )

}