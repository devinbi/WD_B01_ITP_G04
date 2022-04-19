import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';

import { Modal } from "react-bootstrap";
import UpdateItem from "./UpdateItem";


export default function AllItemDetails(props){

    const [item, setItem] = useState([]);

    //
    const [StateUpdate, setStateUpdate] = useState(false)
    const [ItemUpdate, setItemUpdate] = useState()

    const [StateDelete, setStateDelete] = useState(false)
    const [ItemDelete, setItemDelete] = useState()
    //
    
    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/item/')
            .then((res) =>{
                console.log(res.data);
                setItem(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])

    //
    function onDelete() {
        axios.delete( "http://localhost:8070/item/delete/"+ ItemDelete)
            .then((res) => {
                console.log(res)
                alert('Item detail deleted')
                window.location.reload(true)//reload page

            }).catch(() => {
                alert('error while deleting Item Detail')
            })

    }
    //
    return(
        <div class="container-fluid">
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Items Details "

                    columns={[
                        
                        { title: "Item Name", field: "itemName", type: "string" },
                        { title: "Item Quantity", field: "itemQuantity", type: "string" },
                        { title: "Unit Price", field: "unitPrice", type: "string" },
                        { title: "Total Cost", field: "totalCost", type: "string" },
                        { title: "Admin Id", field: "adminId", type: "string" },

                    ]}

                    data={item}
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
                                setItemUpdate(rowData); //setTransportDetailswithID
                                setStateUpdate(true); //setStatetrue
                            }
                        },
                        {
                            icon: () => <button class="btn btn-sm btn-outline-danger">Delete</button>,
                            onClick: (event, rowData) => {
                                setItemDelete(rowData._id) //setidto delete
                                setStateDelete(true);   //setstatetrue
                            }
                        },
                        
                    ]}
              />      
                    {/* update modal */}
                    <Modal show={StateUpdate}>
                    <Modal.Body>
                        <UpdateItem data={ItemUpdate} cl={() => setStateUpdate(false)} />
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