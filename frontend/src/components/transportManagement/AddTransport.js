import React,{useEffect,useState} from "react";
import MaterialTable from "material-table";
import axios from "axios";


export default function AddTransport(){

    //use States for transport details
    const [Transport_ID,setTid] = useState("");
    const [Vehicle_Registration_No,setVid] = useState("");
    const [Date,setDate] = useState("");
    const [Driver_Name,setName] = useState("");
    const [Description,setDescription] = useState("");
    const [Delivery_Status,setStatus] = useState("");

    // console.log("description",Description)
    
    
    
    function sendData(e){
        e.preventDefault();
      
        console.log("Date.....",Date);

 
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
       
        window.location.reload();

    }).catch((err)=>{
        alert(err)
    })
    
    }
    
     //validate function
    //  const DateValidation = () => {

    //     const DateErr = {}; //State
    //     let DateValid = true; //setting flag
    //     const dateRegx=/^(0?[1-9]|1[0-2])[\/](0?[1-9]|[12]\d|3[01])[\/](19|20)\d{2}$/


    //     if (Date.trim().length > 12) {

    //         DateErr.InvalidDate = " Invalid Date ";
             // error msg
            // alert("**Invalid NIC Number");
           
        //     DateValid = false;
        // } else if (Date.trim().length < 10) {
        //     DateErr.InvalidDate = " Invalid Date "; 
            // error msg
            // alert("**Invalid NIC Number");
        //     DateValid = false;
        // }


        // setNICErr(DateErr);//update error objects
        // return DateValid;


    //    }
   
  
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

                    
                </nav>
            </div>
            </div>
            <div>

            {/* transport details Form */}
        <div className="container mb-2">
        <div className="row justify-content-sm-center pt-4">
      <div className="col-sm-6 shadow round pb-3">
      <h1 className="text-center pt-3 text-secondary">Transport Details</h1>
            <form onSubmit={sendData }>
               <div class="form-group">
                    <label for="tid">Transport ID :</label>
                    <input type="text" class="form-control" id="vid" placeholder="TXXXX" 
                    // validation for Transport Id
							pattern="[T][0-9]{4}" title="Transport ID should be TXXXX"
                    onChange={(e)=>{
                        setTid(e.target.value);  //asign values
                    }}
                    required
                    />
                   
                </div>
                <div className="form-group">
                    <label for="vid">Vehicle Registration No :</label>
                    <input type="text" class="form-control" id="vid"  placeholder="CL-XXXX or CLA-XXXX"
                     // validation for Vehicle registration no
							pattern="[A-Z0-9]{2,3}[-][0-9]{4}"
							title="Vehicle registraion number should be CL-XXXX / CLA-XXXX" onChange={(e)=>{
                        setVid(e.target.value);  //asign values
                    }}
                    required
                    />
                   
                </div>

                <div className="form-group">
                    <label for="date">Date :</label>
                    <input type="date" class="form-control" id="date" 
                    onChange={(e)=>{
                        setDate(e.target.value); //asign values
                    }}
                    required
                    />
                </div>

                 <div class="form-group">
                    <label for="name">Driver Name :</label>
                    <input type="text" class="form-control" id="name"  placeholder="Driver Name"
                      // validation for driver name
							pattern="[A-Z a-z]{0,12}"
							title="Name max length should be 12"
                    onChange={(e)=>{
                        setName(e.target.value); //asign values
                    }}
                    required
                    />
                     
                </div>

                <div class="form-group">
                    <label for="description">Description :</label>
                    <input type="text" class="form-control" id="description" placeholder="Add a description"
                      // validation for Description
							pattern="[A-Z a-z0-9]{0,120}"
							title="Description max length should be 120"
                    onChange={(e)=>{
                        setDescription(e.target.value); //asign values
                    }}
                    required
                    />
                </div>
                <div class="form-group">
                    <label for="inputState">Status :</label>
                    <select id="status" class="form-control"
                    required
                    onChange={(e)=>{
                        setStatus(e.target.value);  //asign values
                    }}
                    >
                        <option selected disabled value="" >choose..</option>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
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
