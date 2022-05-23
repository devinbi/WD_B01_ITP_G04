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
        <div>

                    <div class="component-body">
                        <div class="area">
                            <nav class="main-menu bg-primary">
                                <ul>
                                    <li>
                                        <a href="/AllT">
                                            <i class="fa fa-home"></i>
                                            <span class="nav-text">Dashboard</span>
                                            <i class="fa fa-angle-right fa-2x"></i>
                                        </a>
                                    </li>
                                    <hr></hr>
                                    <li class="has-subnav">
                                        <a href="/addItem">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                            <span class="nav-text">Add Item Details</span>
                                            <i class="fa fa-angle-right fa-2x"></i>
                                        </a>
                                    </li>
                                    <li class="has-subnav">
                                        <a href="/viewItem">
                                        <i class="fa fa-file-text" aria-hidden="true"></i>
                                            <span class="nav-text">View Item Details</span>
                                            <i class="fa fa-angle-right fa-2x"></i>
                                        </a>
                                    </li>
                                    <hr></hr>
                                    <li class="has-subnav">
                                        <a href="/addSupplier">
                                        <i class="fa fa-user-plus" aria-hidden="true"></i>
                                            <span class="nav-text">Add Supplier Detials</span>
                                            <i class="fa fa-angle-right fa-2x"></i>
                                        </a>
                                    </li>
                                    <li class="has-subnav">
                                        <a href="/viewSupplier">
                                        <i class="fa fa-users" aria-hidden="true"></i>
                                            <span class="nav-text">View Supplier Details</span>
                                            <i class="fa fa-angle-right fa-2x"></i>
                                        </a>
                                    </li>
                                    <hr></hr>
                                    <li class="has-subnav">
                                        <a href="/reportSupPlierManage">
                                        <i class="fa fa-download" aria-hidden="true"></i>
                                            <span class="nav-text">Generate Report</span>
                                            <i class="fa fa-angle-right fa-2x"></i>
                                        </a>
                                    </li>
                                    <hr></hr>
                                    
                                </ul>

                                <ul class="logout">
                                    <li>
                                        <a href="/">
                                            <i class="fa fa-power-off "></i>
                                            <span class="nav-text">Logout</span>
                                            <i class="fa fa-angle-right fa-2x"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>


                <div className="container">
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
                </div>


        </div>
    )
}