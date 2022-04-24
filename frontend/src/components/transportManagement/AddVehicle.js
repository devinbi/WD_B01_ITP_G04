import React,{useState} from "react";
import axios from "axios";


export default function AddVehicle(){
    const [Vehicle_ID,setVid] = useState("");
    const [Vehicle_Registration_No,setVrid] = useState("");
    const [Date,setDate] = useState("");
    const [Vehicle_Type,setType] = useState("");
    const [Vehicle_Brand,setBrand] = useState("");
    const [Mileage,setMilage] = useState("");
    // console.log("description",description)
    
    function sendData(e){
        e.preventDefault();
        const newVehicle ={
            Vehicle_ID,
            Vehicle_Registration_No,
            Date,
            Vehicle_Type,
            Vehicle_Brand,
            Mileage
        }
            console.log("new Vehicle",newVehicle);
        axios.post("http://localhost:8070/Vehicle/add",newVehicle).then(()=>{
        alert("Vehicle Added...!!")
        
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
                        <li class="has-subnav">
                            <a href="/add">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text">Add Transort Detials</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <li class="has-subnav">
                            <a href="/view">
                            <i class="fa fa-file-text-o" aria-hidden="true"></i>
                                <span class="nav-text">View Transport Details</span>
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
            <div>
        <div className="container">
            <form onSubmit={sendData}>
               <div class="form-group">
                    <label for="vid">Vehicle ID :</label>
                    <input type="text" class="form-control" id="vid"  placeholder="VXXXX"
							pattern="[V][0-9]{4}"
							title="Vehicle ID should be VXXXX"
                    onChange={(e)=>{
                        setVid(e.target.value);
                    }}
                    required
                    />
                   
                </div>
                <div className="form-group">
                    <label for="vrid">Vehicle Registration No :</label>
                    <input type="text" class="form-control" id="vrid"  placeholder="CL-XXXX or CLA-XXXX"
							pattern="[A-Z0-9]{2,3}[-][0-9]{4}"
							title="Vehicle registraion number should be CL-XXXX / CLA-XXXX" onChange={(e)=>{
                        setVrid(e.target.value);
                    }}
                    required
                    />
                   
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
                    <label for="inputState">Vehicle Type :</label>
                    <select id="type" class="form-control" onChange={(e)=>{
                        setType(e.target.value);
                    }}
                    required
                    >
                        <option  selected>choose..</option>
                        <option value="Van">Van</option>
                        <option value="Bus">Bus</option>
                        <option value="Lorry">Lorry</option>
                    </select>
                </div>

                 {/* <div class="form-group">
                    <label for="type">Vehicle Type :</label>
                    <input type="text" class="form-control" id="type"
                    onChange={(e)=>{
                        setType(e.target.value);
                    }} />
                </div> */}

                <div class="form-group">
                    <label for="brand">Vehicle Brand :</label>
                    <input type="text" class="form-control" id="brand" 
                    onChange={(e)=>{
                        setBrand(e.target.value);
                    }}
                    required
                    />
                </div>

                <div class="form-group">
                    <label for="milage">Milage :</label>
                    <input type="text" class="form-control" id="milage" 
                    onChange={(e)=>{
                        setMilage(e.target.value);
                    }}/>
                </div>

                
            <button type="submit" class="btn btn-primary">ADD</button>
            </form>
            
        </div>
        </div>
        </div>
    )

}