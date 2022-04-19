import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';
import { Modal } from "react-bootstrap";
import UpdateDressmaking from "./UpdateDressmaking";

export default function AllDressmakings(props){
    const [alldressmaking, setDressmaking] = useState([]);
    

    const [StateUpdate, setStateUpdate] = useState(false)
    const [DressmakingUpdate, setDressmakingUpdate] = useState()

    const [StateDelete, setStateDelete] = useState(false)
    const [DressmakingDelete, setDressmakingDelete] = useState()


    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/dressmaking/')
            .then((res) =>{
                console.log(res.data);
                setDressmaking(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])

    function onDelete() {
        axios.delete( "http://localhost:8070/dressmaking/delete/"+ DressmakingDelete)
            .then((res) => {
                console.log(res)
                alert('Details deleted')
                window.location.reload(true)//reload page

            }).catch(() => {
                alert('error while deleting details')
            })

    }

    console.log(alldressmaking.data);
    return(
        <div>
        <div class="container-fluid">
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Dressmaking Tools"

                    columns={[
                        { title: "Machine Code", field: "machineCode", type: "string" },
                        { title: "Machine Name", field: "machineName", type: "string" },
                        { title: "Category", field: "category", type: "string" },
                        { title: "Price", field: "price", type: "number" },
                        { title: "Condition", field: "condition", type: "string" },
                        
                      

                    ]}

                    data={alldressmaking}
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
                                setDressmakingUpdate(rowData); //setDressmakingDetailswithID
                                setStateUpdate(true); //setStatetrue
                            }
                        },
                        {
                            icon: () => <button class="btn btn-sm btn-outline-danger">Delete</button>,
                            onClick: (event, rowData) => {
                                setDressmakingDelete(rowData._id) //setidto delete
                                setStateDelete(true);   //setstatetrue
                            }
                        },
                        
                    ]}

        />
                  {/* update modal */}
                  <Modal show={StateUpdate}>
                    <Modal.Body>
                        <UpdateDressmaking data={DressmakingUpdate} cl={() => setStateUpdate(false)} />
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