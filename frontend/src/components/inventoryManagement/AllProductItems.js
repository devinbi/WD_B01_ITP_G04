import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';
import UpdateProductItem from "./UpdateProductItem";
import { Modal } from "react-bootstrap";


export default function AllProductItems(props){

    const [ProductItems, setProductItem] = useState([]);

    const [StateUpdate, setStateUpdate] = useState(false)
    const [ProductItemUpdate, setProductItemUpdate] = useState()

    const [StateDelete, setStateDelete] = useState(false)
    const [ProductItemDelete, setProductItemDelete] = useState()

    
    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/ManufacturedItem/fetch')
            .then((res) =>{
                console.log(res.data);
                setProductItem(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])

    function onDelete() {
        axios.delete( "http://localhost:8070/ManufacturedItem/delete/"+ ProductItemDelete)
            .then((res) => {
                console.log(res)
                alert('Product Item Details Deleted')
                window.location.reload(true)//reload page

            }).catch(() => {
                alert('error while deleting manufactured item details')
            })

    }
    console.log(ProductItems.data);

    return(

        <div>
            <div class="component-body">
            
                <div class="area">
                    <nav class="main-menu bg-primary">
                        <ul>
                            <li>
                                <a href="/#">
                                    <i class="fa fa-home"></i>
                                    <span class="nav-text">Dashboard</span>
                                    <i class="fa fa-angle-right"></i>
                                </a>
                            </li>

                            <hr></hr>

                            <li class="has-subnav">
                                <a href="/adding">
                                    <i class="fa fa-plus-circle"></i>
                                    <span class="nav-text">Add Raw Materials</span>
                                    <i class="fa fa-angle-right"></i>
                                </a>
                            </li>

                            <hr></hr>

                            <li class="has-subnav">
                                <a href="/">
                                <i class="fa fa-cubes fa-2x" aria-hidden="true"></i>
                                    <span class="nav-text">Manage Raw Materials</span>
                                    <i class="fa fa-angle-right"></i>
                                </a>
                            </li>

                            <hr></hr>

                            <li class="has-subnav">
                                <a href="/add">
                                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                    <span class="nav-text">Add Product Item</span>
                                    <i class="fa fa-angle-right"></i>
                                </a>
                            </li>

                            <hr></hr>

                            <li class="has-subnav">
                                <a href="/fetch">
                                <i class="fa fa-shirt"></i>
                                    <span class="nav-text">Manage Product Items</span>
                                    <i class="fa fa-angle-right"></i>
                                </a>
                            </li>
                            
                            <hr></hr>

                            <li class="has-subnav">
                                <a href="/#">
                                <i class="fa fa-box-open"></i>
                                    <span class="nav-text">Out of Stock</span>
                                    <i class="fa fa-angle-right"></i>
                                </a>
                            </li>

                            <hr></hr>

                            <li class="has-subnav">
                                <a href="/#">
                                    <i class="fa fa-users" aria-hidden="true"></i>
                                    <span class="nav-text">Inventory Report</span>
                                    <i class="fa fa-angle-right"></i>
                                </a>
                            </li>

                            <hr></hr>
                            
                        </ul>

                        <ul class="logout">
                            <li>
                                <a href="#">
                                    <i class="fa fa-power-off"></i>
                                    <span class="nav-text">Logout</span>
                                    <i class="fa fa-angle-right"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div>
                <div class="container">
                    <div class="container-fluid">
                        <MaterialTable  
                            style={{background:"#E3ECFF"}}
                            title="All Product Item Details"
                            columns={[
                                
                                { title: "Item Id", field: "ItemId", type: "string" },
                                { title: "Item Name", field: "ItemName", type: "string" },
                                { title: "Quantity", field: "Quantity", type: "number" },
                                { title: "Material", field: "Material", type: "string" },
                                { title: "Colour", field: "Colour", type: "string" },
                                { title: "Size", field: "Size", type: "string" }

                            ]}

                            data={ProductItems}
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
                                        setProductItemUpdate(rowData); //setTransportDetailswithID
                                        setStateUpdate(true); //setStatetrue
                                    }
                                },
                                {
                                    icon: () => <button class="btn btn-sm btn-outline-danger">Delete</button>,
                                    onClick: (event, rowData) => {
                                        setProductItemDelete(rowData._id) //setidto delete
                                        setStateDelete(true);   //setstatetrue
                                    }
                                },
                                
                            ]}

                        />

                        {/* update modal */}
                        <Modal show={StateUpdate}>
                            <Modal.Body>
                                <UpdateProductItem data={ProductItemUpdate} cl={() => setStateUpdate(false)} />
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
            </div>
        </div>
    )
}