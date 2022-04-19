import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';

import { Modal } from "react-bootstrap";
import UpdateSupplier from "./UpdateSupplier";


export default function AllSupplireDetails(props){

    const [supplier, setSupplier] = useState([]);

    //
    const [StateUpdate, setStateUpdate] = useState(false)
    const [SupplierUpdate, setSupplierUpdate] = useState()

    const [StateDelete, setStateDelete] = useState(false)
    const [SupplierDelete, setSupplierDelete] = useState()
    //
    
    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/supplier/')
            .then((res) =>{
                console.log(res.data);
                setSupplier(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])

    //
    function onDelete() {
        axios.delete( "http://localhost:8070/supplier/delete/"+ SupplierDelete)
            .then((res) => {
                console.log(res)
                alert('Supplier detailS deleted')
                window.location.reload(true)//reload page

            }).catch(() => {
                alert('error while deleting Supplier Details')
            })

    }
    //
    
    return(
        <div class="container-fluid">
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Supplier Details "

                    columns={[
                        
                        { title: "Supplier Name", field: "name", type: "string" },
                        { title: "E-Mail", field: "email", type: "string" },
                        { title: "Phone Number", field: "phoneNumber", type: "string" },
                        { title: "Nic Number", field: "nic", type: "string" },
                        { title: "Address", field: "address", type: "string" },
                        { title: "Admin Id", field: "adminId", type: "string" },

                    ]}

                    data={supplier}
                    options={{
                        sorting: true,
                        search:false,
                        filtering : true,
                        actionsColumnIndex: -1
                     
                    }}
                    //
                    actions={[
                        {
                            icon: () => <button class="btn btn-sm btn-outline-warning">Update</button>,
                            onClick: (event, rowData) => {
                                setSupplierUpdate(rowData); //setTransportDetailswithID
                                setStateUpdate(true); //setStatetrue
                            }
                        },
                        {
                            icon: () => <button class="btn btn-sm btn-outline-danger">Delete</button>,
                            onClick: (event, rowData) => {
                                setSupplierDelete(rowData._id) //setidto delete
                                setStateDelete(true);   //setstatetrue
                            }
                        },
                        
                    ]}
              />      
                    {/* update modal */}
                    <Modal show={StateUpdate}>
                    <Modal.Body>
                        <UpdateSupplier data={SupplierUpdate} cl={() => setStateUpdate(false)} />
                    </Modal.Body>
                </Modal>
                
                {/* delete modal */}
                <Modal show={StateDelete}>
                    <Modal.Body>
                        <p>You Want to delete this Item details ?</p>
                        <button type="button" class="btn btn-outline-danger mr-3 pl-3" onClick={onDelete}>Delete</button>
                        <button type="button" class="btn btn-outline-secondary pl-3" onClick={() => setStateDelete(false)}>Cancel</button>
                    </Modal.Body>
                </Modal>

        
        </div>
    )
}