import React,{useState,useEffect} from "react";
import axios from "axios";
import MaterialTable from 'material-table';
import { Modal } from "react-bootstrap";
import UpdateVehicles from "./UpdateVehicles";

const HOST = "http://localhost:8070/Vehicle"

export default function AllVehicles(){
    const[vehicleData,setVData]=useState([]);

    const [StateUpdate, setStateUpdate] = useState(false)
    const [VehicleUpdate, setVehicleUpdate] = useState()

    const [StateDelete, setStateDelete] = useState(false)
    const [VehicleDelete, setVehicleDelete] = useState()

    useEffect(()=>{
        axios.get("http://localhost:8070/Vehicle").then((res)=>{
            console.log(res.data);
            setVData(res.data);
        }).catch((err)=>{
            alert(err.msg);
        })
    },[])

      //delete trasport function
      function onDelete() {
        axios.delete(HOST + "/delete/" + VehicleDelete)
            .then((res) => {
                console.log(res)
                alert('Vehicle detail deleted')
                window.location.reload(true)//reload page

            }).catch(() => {
                alert('error while deleting Vehicle Detail')
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
                            <a href="/add">
                                <i class="fa fa-plus-circle"></i>
                                <span class="nav-text">Add Vehicle</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <li class="has-subnav">
                            <a href="/view">
                             <i class="fa fa-truck " ></i>
                                <span class="nav-text">Vehicle List</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                       
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/vadd">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text">Add Transort Detials</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <li class="has-subnav">
                            <a href="/vview">
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
         <div className="component-body">
             <div className="container-fluid ">
             <br/>
             <br/>
             <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Vehicle Details "

                    columns={[
                        { title: "Vehicle Id", field: "Vehicle_ID", type: "string" },
                        { title: "Vehicle Registration No", field: "Vehicle_Registration_No", type: "string" },
                        { title: "Date", field: "Date", type: "date" },
                        { title: " Vehicle Type", field: "Vehicle_Type", type: "string" },
                        { title: "Vehicle Brand", field: "Vehicle_Brand", type: "string" },
                        { title: "Mileage", field: "Mileage", type: "string" },

                    ]}

                    data={vehicleData}
                    options={{
                        sorting: true,
                        search:false,
                        filtering : true,
                        actionsColumnIndex: -1
                     
                    }}
                    actions={[
                        {
                            icon: () => <button class="btn btn-sm btn-outline-warning">Update</button>,
                            onClick: (event, rowData) => {
                                setVehicleUpdate(rowData); //setTransportDetailswithID
                                setStateUpdate(true); //setStatetrue
                            }
                        },
                        {
                            icon: () => <button class="btn btn-sm btn-outline-danger">Delete</button>,
                            onClick: (event, rowData) => {
                                setVehicleDelete(rowData._id) //setidto delete
                                setStateDelete(true);   //setstatetrue
                            }
                        },
                    ]}

        />
         </div>
        {/* update modal  */}
           <Modal show={StateUpdate} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
>
                    <Modal.Body>
                        <UpdateVehicles data={VehicleUpdate} cl={() => setStateUpdate(false)} />
                    </Modal.Body>
                </Modal>

                 {/* delete modal */}
                 <Modal show={StateDelete}>
                    <Modal.Body>
                        <p>You Want to delete this Transpot details ?</p>
                        <button type="button" class="btn btn-outline-danger mr-3 pl-3" onClick={onDelete}>Delete</button>
                        <button type="button" class="btn btn-outline-secondary pl-3" onClick={() => setStateDelete(false)}>Cancel</button>
                    </Modal.Body>
                </Modal>
         </div>
         </div>
         </div>
  );

}
