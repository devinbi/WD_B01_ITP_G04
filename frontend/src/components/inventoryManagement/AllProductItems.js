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
                alert('error while deleting Transport Detail')
            })

    }
    console.log(ProductItems.data);

    return(

        <div>

            <div class="container-fluid">
            <MaterialTable  style={{background:"#E3ECFF"}}
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
    )
}