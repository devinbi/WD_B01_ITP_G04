import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';

import { Modal } from "react-bootstrap";
import UpdateSupplier from "./UpdateSupplier";

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
export default function AllSupplireDetails(props){

    const [supplier, setSupplier] = useState([]);

    //
    const [StateUpdate, setStateUpdate] = useState(false)
    const [SupplierUpdate, setSupplierUpdate] = useState()

    
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
                        
                        
                    ]}
              />      
                    {/* update modal */}
                    <Modal show={StateUpdate}>
                    <Modal.Body>
                        <UpdateSupplier data={SupplierUpdate} cl={() => setStateUpdate(false)} />
                    </Modal.Body>
                </Modal>
                
                

        
        </div>
    )
}