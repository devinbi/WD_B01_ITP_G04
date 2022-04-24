import React,{useState} from "react";
import axios from "axios";


export default function AddTransport(){
    const [Transport_ID,setTid] = useState("");
    const [Vehicle_Registration_No,setVid] = useState("");
    const [Date,setDate] = useState("");
    const [Driver_Name,setName] = useState("");
    const [Description,setDescription] = useState("");
    const [Delivery_Status,setStatus] = useState("");
    // console.log("description",description)
    
    function sendData(e){
        e.preventDefault();
        const newTransport ={
            Transport_ID,
            Vehicle_Registration_No,
            Date,
            Driver_Name,
            Description,
            Delivery_Status
        }
            console.log("new Transpot",newTransport);
        axios.post("http://localhost:8070/Transport/add",newTransport).then(()=>{
        alert("Transport Added")
        // setTid("");
        // setVid("");
        // setDate("");
        // setName("");
        // setDescription("");
        // setStatus("");
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
                    <label for="tid">Transport ID :</label>
                    <input type="text" class="form-control" id="vid" placeholder="TXXXX"
							pattern="[T][0-9]{4}" title="Transport ID should be TXXXX"
                    onChange={(e)=>{
                        setTid(e.target.value);
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
                    <label for="name">Driver Name :</label>
                    <input type="text" class="form-control" id="name"
                    onChange={(e)=>{
                        setName(e.target.value);
                    }}
                    required
                    />
                </div>

                <div class="form-group">
                    <label for="description">Description :</label>
                    <input type="text" class="form-control" id="description" 
                    onChange={(e)=>{
                        setDescription(e.target.value);
                    }}
                    required
                    />
                </div>
                <div class="form-group">
                    <label for="inputState">Status :</label>
                    <select id="status" class="form-control" onChange={(e)=>{
                        setStatus(e.target.value);
                    }}
                    required
                    >
                        <option  selected>choose..</option>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
               

                
            <button type="submit" class="btn btn-info btn-lg">ADD</button>
            </form>
            
        </div>
    </div>
    </div>
    )

}

//  export default viewTransport;