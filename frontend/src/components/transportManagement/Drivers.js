import React, { useState, useEffect } from "react"
import axios from 'axios'
import MaterialTable from 'material-table'
import { Modal } from "react-bootstrap"



const HOST = "http://localhost:8070/Drivers"

export default function Drivers() {

    const [Drivers, setDrivers] = useState([]);
    console.log(Drivers,"<<<<<<<<<<<<<<<<<<<");


    useEffect(() => {

        axios.get(HOST + "/viewD")
            .then((res) => {
                setDrivers(res.data.Drivers);
                console.log(Drivers,"<<<<<<<<<<<<<<<<<<<");
                console.log('Data has been received');
            }).catch(() => {
                alert('Error while fetching data')
            })

    }, []);

    



    return (
        // <>
            <div class ="component-body">
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
                                <i class="fa fa-angle-right fa-2x"></i>
                            </a>
                        </li>
                    </ul>

                    <ul class="logout">
                        <li>
                            <a href="/">
                                <i class="fa fa-power-off fa-2x"></i>
                                <span class="nav-text">Logout</span>
                                <i class="fa fa-angle-right fa-2x"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
           
            {/* driver details tabe  */}
            <div className="container-fluid mt-3">
                <MaterialTable  style={{background:"#E3ECFF"}}
                    title=" Driver  Details"
                    

                    columns={[
                        { title: "Name", field: "name", type: "string" },
                        { title: "NIC", field: "nic", type: "string" },
                        { title: "MobileNumber", field: "phone", type: "string" },
                        { title: "Address", field: "address", type: "string" },
                        { title: "Department", field: "department", type: "string" },
                        { title: "Email", field: "email", type: "string" },
                    ]}

                    data={Drivers}
                    options={{
                        sorting: true,
                        actionsColumnIndex: -1,

                    }}

                    
                />

               

            </div>

            <div className="container-fluid"><a href="/addT" class="btn-sm btn-primary btn-lg active float-right " role="button" aria-pressed="true"> + Add New Transport Details </a></div>
        

        {/* </> */}

        </div>
    )

}