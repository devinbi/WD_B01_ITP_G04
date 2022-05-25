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
        
       {/* navigation bar for transport management */}
       <div class="area">
                <nav class="main-menu bg-primary">
                    <ul>
                        <li>
                            {/* navigation path to Dashboard */}
                            <a href="/dashT"> 
                                <i class="fa fa-home "></i>
                                <span class="nav-text">Dashboard</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                             {/* navigation path to add vehicle page */}
                            <a href="/vadd">
                                <i class="fa fa-plus-circle"></i>
                                <span class="nav-text">Add Vehicle</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <li class="has-subnav">
                            {/* navigation path to view vehicle page */}
                            <a href="/vview">
                             <i class="fa fa-truck " ></i>
                                <span class="nav-text">Vehicle List</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li>
                            <a href="/viewO">
                            {/* navigation path to add transport by order page */}
                                <i class="fa fa-truck-arrow-right "></i>
                                <span class="nav-text">Order Details</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            {/* navigation path to add transport page */}
                            <a href="/Tadd">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text">Add Transort Detials</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <li class="has-subnav">
                            {/* navigation path to view transport page */}
                            <a href="/Tview">
                            <i class="fa fa-file-text-o" aria-hidden="true"></i>
                                <span class="nav-text">Transport Details</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            {/* navigation path to add maintenance page */}
                            <a href="/madd">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>

                                <span class="nav-text">Add Maintenance Details</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <li class="has-subnav">
                            {/* navigation path to view maintenance page */}
                            <a href="/mview">
                                <i class="fa fa-wrench "></i>
                                <span class="nav-text">View Maintenance</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            {/* navigation path to view Drivers page */}
                            <a href="/viewD">
                                <i class="fa fa-users" aria-hidden="true"></i>
                                <span class="nav-text">Driver Details</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            {/* navigation path to Report page */}
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
            
            <div>
            <div className="container mb-2">
            <div className="row justify-content-sm-center pt-5">
            <div className="col-sm-6 shadow round pb-3">

                {/* vehicle details form */}
            <h1 className="text-center pt-3 text-secondary">Vehicle Details</h1>
            <form onSubmit={sendData}>
               <div class="form-group">
                    <label for="vid">Vehicle ID :</label>
                    <input type="text" class="form-control" id="vid"  placeholder="VXXXX"
							pattern="[V][0-9]{4}" //validation for vehicle id
							title="Vehicle ID should be VXXXX"
                    onChange={(e)=>{
                        setVid(e.target.value); //asign values for vehicle id
                    }}
                    required
                    />
                   
                </div>
                <div className="form-group">
                    <label for="vrid">Vehicle Registration No :</label>
                    <input type="text" class="form-control" id="vrid"  placeholder="CL-XXXX or CLA-XXXX"
							pattern="[A-Z0-9]{2,3}[-][0-9]{4}" //validation for vehicle registration number
							title="Vehicle registraion number should be CL-XXXX / CLA-XXXX" 
                            onChange={(e)=>{
                        setVrid(e.target.value); //asign values for vehicle registration number
                    }}
                    required
                    />
                   
                </div>

                <div className="form-group">
                    <label for="date">Date :</label>
                    <input type="date" class="form-control" id="date"
                    onChange={(e)=>{
                        setDate(e.target.value); // asign values for date
                    }}
                    required
                    />
                </div>

                <div class="form-group">
                    <label for="inputState">Vehicle Type :</label>
                    <select id="type" class="form-control" onChange={(e)=>{
                        setType(e.target.value); //assign values for vehicle type
                    }}
                    required
                    >
                        <option  selected disabled value="">choose..</option>
                        <option value="Van">Van</option>
                        <option value="Bus">Bus</option>
                        <option value="Lorry">Lorry</option>
                    </select>
                </div>


                <div class="form-group">
                    <label for="brand">Vehicle Brand :</label>
                    <input type="text" class="form-control" id="brand" 
                     // validations for vehicle brand
                     pattern="[A-Z a-z0-9]{0,20}"
                     title="Vehicle brand max length should be 20" 
                    onChange={(e)=>{
                        setBrand(e.target.value); //asign values for vehicle brand
                    }}
                    required
                    />
                </div>

                <div class="form-group">
                    <label for="milage">Milage :</label>
                    <input type="text" class="form-control" id="milage" 
                    placeholder="Milage should be in KM"
                     // validations for milage
                     pattern="[0-9]{1,}"
                     title="milage Should be number input" 
                    onChange={(e)=>{
                        setMilage(e.target.value); //asign values for milage
                    }}/>
                </div>

                
            <button type="submit" class="btn btn-primary">ADD</button>
            </form>
            
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
    )

}

