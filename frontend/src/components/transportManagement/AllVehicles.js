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
                        paging :false,
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
  );

}
