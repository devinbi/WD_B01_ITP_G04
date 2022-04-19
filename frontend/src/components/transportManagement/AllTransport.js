import React,{useState,useEffect} from "react";
import axios from "axios";
import MaterialTable from 'material-table';
import { Modal } from "react-bootstrap";
import UpdateTransport from "./UpdateTransport";


export default function AllTransport(){
    const[transportData,setTData]=useState([]);

    const [StateUpdate, setStateUpdate] = useState(false)
    const [TransportUpdate, setTransportUpdate] = useState()

    useEffect(()=>{
        axios.get("http://localhost:8070/Transport").then((res)=>{
            console.log(res.data);
            setTData(res.data);
        }).catch((err)=>{
            alert(err.msg);
        })
    },[])
  return(
    <div class ="component-body">
         <div className="container-fluid ">
             <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Transport Details "

                    columns={[
                        { title: "Transport Id", field: "Transport_ID", type: "string" },
                        { title: "Vehicle Registration No", field: "Vehicle_Registration_No", type: "string" },
                        { title: "Date", field: "Date", type: "string" },
                        { title: " Driver Name", field: "Driver_Name", type: "string" },
                        { title: "Description", field: "Description", type: "string" },
                        { title: "Delivery Status", field: "Delivery_Status", type: "string" },

                    ]}

                    data={transportData}
                    options={{
                        sorting: true,
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



         </div>
  );

}
