import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';
import { Modal } from "react-bootstrap";
import UpdateRawMaterial from "./UpdateRawMaterial";


export default function AllRawMaterials(props){
    const [RawMaterials, setRawMaterials] = useState([]);
    
    const [StateUpdate, setStateUpdate] = useState(false)
    const [RawMaterialUpdate, setRawMaterialUpdate] = useState()

    const [StateDelete, setStateDelete] = useState(false)
    const [RawMaterialDelete, setRawMaterialDelete] = useState()


    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/RawMaterial/')
            .then((res) =>{
                console.log(res.data);
                setRawMaterials(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])

    function onDelete() {
        axios.delete( "http://localhost:8070/RawMaterial/delete/"+ RawMaterialDelete)
            .then((res) => {
                console.log(res)
                alert('Raw Material Details Deleted')
                window.location.reload(true)//reload page

            }).catch(() => {
                alert('error while deleting raw material detail')
            })

    }
    console.log(RawMaterials.data);

    return(
        <div>

            <div class="container-fluid">
            <MaterialTable  style={{background:"#E3ECFF"}}
                        title="All Raw Material Details"

                        columns={[
                            
                            { title: "Item Id", field: "ItemId", type: "string" },
                            { title: "Item Name", field: "ItemName", type: "string" },
                            { title: "Quantity", field: "Quantity", type: "string" },
                            { title: "Item Type", field: "ItemType", type: "string" },

                        ]}

                        data={RawMaterials}
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
                                    setRawMaterialUpdate(rowData); //setTransportDetailswithID
                                    setStateUpdate(true); //setStatetrue
                                }
                            },
                            {
                                icon: () => <button class="btn btn-sm btn-outline-danger">Delete</button>,
                                onClick: (event, rowData) => {
                                    setRawMaterialDelete(rowData._id) //setidto delete
                                    setStateDelete(true);   //setstatetrue
                                }
                            },
                            
                        ]}

            />

             {/* update modal */}
             <Modal show={StateUpdate}>
                    <Modal.Body>
                        <UpdateRawMaterial data={RawMaterialUpdate} cl={() => setStateUpdate(false)} />
                    </Modal.Body>
                </Modal>
                        
                {/* delete modal */}
                <Modal show={StateDelete}>
                    <Modal.Body>
                        <p>You Want to delete this Product Item details ?</p>
                        <button type="button" class="btn btn-outline-danger mr-3 pl-3" onClick={onDelete}>Delete</button>
                        <button type="button" class="btn btn-outline-secondary pl-3" onClick={() => setStateDelete(false)}>Cancel</button>
                    </Modal.Body>
                </Modal>

            </div>
        </div>
    )
}