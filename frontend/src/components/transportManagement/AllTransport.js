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
    <div class ="component-body">
         <div className="container-fluid ">
             <br></br>
             <br></br>
             <br></br>
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
                        paging :false,
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
                  
         </div>


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
  );

}
