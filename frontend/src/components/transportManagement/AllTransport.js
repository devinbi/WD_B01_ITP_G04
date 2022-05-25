import React,{useState,useEffect} from "react";
import axios from "axios";
import MaterialTable from 'material-table';
import { Modal } from "react-bootstrap";
import UpdateTransport from "./UpdateTransport";

const HOST = "http://localhost:8070/Transport"

export default function AllTransport(){
    const[transportData,setTData]=useState([]);

    const [StateUpdate, setStateUpdate] = useState(false)
    const [TransportUpdate, setTransportUpdate] = useState()

    const [StateDelete, setStateDelete] = useState(false)
    const [TransportDelete, setTransportDelete] = useState()

    useEffect(()=>{
        axios.get("http://localhost:8070/Transport").then((res)=>{
            console.log(res.data);
            setTData(res.data);
        }).catch((err)=>{
            alert(err.msg);
        })
    },[])

     //delete trasport function
     function onDelete() {
        axios.delete(HOST + "/delete/" + TransportDelete)
            .then((res) => {
                console.log(res)
                alert('Transport detail deleted')
                window.location.reload(true)//reload page

            }).catch(() => {
                alert('error while deleting Transport Detail')
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
            </div>
        
        <div class ="container">
         < div className="container-fluid ">
           
             <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Transport Details "

                    columns={[
                        { title: "Transport Id", field: "Transport_ID", type: "string" },
                        { title: "Vehicle Registration No", field: "Vehicle_Registration_No", type: "string" },
                        { title: "Date", field: "Date", type: "date" },
                        { title: " Driver Name", field: "Driver_Name", type: "string" },
                        { title: "Description", field: "Description", type: "string" },
                        { title: "Delivery Status", field: "Delivery_Status", type: "string" },

                    ]}

                    data={transportData}
                    options={{
                        sorting: true,
                        search:false,
                        filtering : true,
                        actionsColumnIndex: -1,
                     
                    }}
                    actions={[
                        {
                            icon: () => <button class="btn btn-sm btn-outline-warning">Update</button>,
                            onClick: (event, rowData) => {
                                setTransportUpdate(rowData); //setTransportDetailswithID
                                setStateUpdate(true); //setStatetrue
                            }
                        },
                        {
                            icon: () => <button class="btn btn-sm btn-outline-danger">Delete</button>,
                            onClick: (event, rowData) => {
                                setTransportDelete(rowData._id) //setidto delete
                                setStateDelete(true);   //setstatetrue
                            }
                        },
                    ]}
                    />
                  
         


           {/* update modal */}
           <Modal show={StateUpdate} size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
>
                    <Modal.Body>
                        <UpdateTransport data={TransportUpdate} cl={() => setStateUpdate(false)} />
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
