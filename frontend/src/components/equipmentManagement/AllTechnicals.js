import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';
import { Modal } from "react-bootstrap";
import UpdateTechnical from "./UpdateTechnical";

export default function AllTechnicals(props){
    const [alltechnical, setTechnical] = useState([]);
    
    const [StateUpdate, setStateUpdate] = useState(false)
    const [TechnicalUpdate, setTechnicalUpdate] = useState()

    const [StateDelete, setStateDelete] = useState(false)
    const [TechnicalDelete, setTechnicalDelete] = useState()


    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/technical/')
            .then((res) =>{
                console.log(res.data);
                setTechnical(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])

    function onDelete() {
        axios.delete( "http://localhost:8070/technical/delete/"+ TechnicalDelete)
            .then((res) => {
                console.log(res)
                alert('Details deleted')
                window.location.reload(true)//reload page

            }).catch(() => {
                alert('error while deleting details')
            })

    }

    console.log(alltechnical.data);
    return(
        <div>
        <div class="container-fluid">
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Technical Devices"

                    columns={[
                        { title: "Device Code", field: "deviceCode", type: "string" },
                        { title: "Model No", field: "modelNo", type: "string" },
                        { title: "Machine Name", field: "machineName", type: "string" },
                        { title: "Price", field: "price", type: "string" },
                        { title: "Department", field: "department", type: "string" },
                        { title: "Condition", field: "condition", type: "string" }
                      

                    ]}

                    data={alltechnical}
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
                                setTechnicalUpdate(rowData); //setTechnicalDeviceDetailswithID
                                setStateUpdate(true); //setStatetrue
                            }
                        },
                        {
                            icon: () => <button class="btn btn-sm btn-outline-danger">Delete</button>,
                            onClick: (event, rowData) => {
                                setTechnicalDelete(rowData._id) //setidto delete
                                setStateDelete(true);   //setstatetrue
                            }
                        },
                        
                    ]}

        />
         
          {/* update modal */}
          <Modal show={StateUpdate}>
                    <Modal.Body>
                        <UpdateTechnical data={TechnicalUpdate} cl={() => setStateUpdate(false)} />
                    </Modal.Body>
                </Modal>
                
                {/* delete modal */}
                <Modal show={StateDelete}>
                    <Modal.Body>
                        <p>Do you want to delete these details ?</p>
                        <button type="button" class="btn btn-outline-danger mr-3 pl-3" onClick={onDelete}>Delete</button>
                        <button type="button" class="btn btn-outline-secondary pl-3" onClick={() => setStateDelete(false)}>Cancel</button>
                    </Modal.Body>
                </Modal>
        </div>


        </div>
    )
}