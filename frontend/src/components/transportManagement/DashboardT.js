import React, { useState, useEffect } from "react"
import axios from 'axios'
import MaterialTable from 'material-table'




const HOST1 = "http://localhost:8070/Transport"
const HOST2 = "http://localhost:8070/Vehicle"



export default  function DashboardT(){

    const [TransportDetails, setTransportDetails] = useState([]);
    const [Vehicles, setVehicles] = useState([]);
    

    useEffect(() => {

        axios.get(HOST1 + "/")
            .then((res) => {
                setTransportDetails(res.data);
                console.log('Data has been received');
            }).catch(() => {
                alert('Error while fetching data')
            })

    }, []);
    useEffect(() => {

        axios.get(HOST2 + "/")
            .then((res) => {
                setVehicles(res.data);
                console.log('Data has been received');
            }).catch(() => {
                alert('Error while fetching data')
            })

    }, []);
    
  

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
            <div className="container">
           
            <div class="d-flex justify-content-start mt-5">
            <a href="/vadd" class="btn btn-primary active ml-3 " role="button" aria-pressed="true"> + Add Vehicle Details </a>
            <a href="/addT" class="btn btn-primary active ml-4 " role="button" aria-pressed="true"> + Add Transport Details </a>
            </div>


            <div className="container-fluid pt-5">
            <MaterialTable style={{background:"#E3ECFF"}}
                    title="  Transport Details "

                    columns={[
                        { title: "Transport Id", field: "Transport_ID", type: "string" },
                        { title: "Vehicle Registration No", field: "Vehicle_Registration_No", type: "string" },
                        { title: "Date", field: "Date", type: "date" },
                        { title: " Driver Name", field: "Driver_Name", type: "string" },
                        { title: "Description", field: "Description", type: "string" },
                        { title: "Delivery Status", field: "Delivery_Status", type: "string" },
                    ]}

                    data={TransportDetails}
                    options={{
                        sorting: false,
                        search:false,
                        actionsColumnIndex: -1,
                        

                    }}
      
                
                    />
                    
                
                </div>


           
                
            <div className="container-fluid">
                <MaterialTable style={{background:"#E3ECFF"}}
                    title=" Vehicles Details "

                    columns={[
                        { title: "Vehicle Id", field: "Vehicle_ID", type: "string" },
                        { title: "Vehicle Registration No", field: "Vehicle_Registration_No", type: "string" },
                        { title: "Date", field: "Date", type: "date" },
                        { title: " Vehicle Type", field: "Vehicle_Type", type: "string" },
                        { title: "Vehicle Brand", field: "Vehicle_Brand", type: "string" },
                        { title: "Mileage", field: "Mileage", type: "string" },
                    ]}

                    data={Vehicles}
                    options={{
                        sorting: false,
                        search:false,
                        actionsColumnIndex: -1,
                      

                    }}

                    
                />

                
            </div>



           


        </div>
        </div>
        </div>

    )

    



}