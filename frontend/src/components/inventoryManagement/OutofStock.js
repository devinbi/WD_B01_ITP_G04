import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';


export default function OutofStock(props){

    const [ProductItems , setProductItem] = useState([]);
    const [RawMaterial , setRawMaterial] = useState([]);

    
    useEffect(()=>{

        axios.get("http://localhost:8070/ManufacturedItem/Sout")
            .then((res) =>{
                console.log(res.data);
                setProductItem(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })

    },[])


    useEffect(()=>{

        axios.get("http://localhost:8070/RawMaterial/Sout")
            .then((res) =>{
                console.log(res.data);
                setRawMaterial(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })

    },[])

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

                        

                        <li class="has-subnav">
                            <a href="/allR">
                            <i class="fa fa-cubes" aria-hidden="true"></i>
                                <span class="nav-text">All Raw Materials</span>
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

                        

                        <li class="has-subnav">
                            <a href="/fetch">
                            <i class="fa fa-shirt"></i>
                                <span class="nav-text">All Product Items</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        
                        <hr></hr>

                        <li class="has-subnav">
                            <a href="/Sout">
                            <i class="fa fa-box-open"></i>
                                <span class="nav-text">Out of Stock</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>

                        <hr></hr>

                        <li class="has-subnav">
                            <a href="/view">
                                <i class="fa fa-download" aria-hidden="true"></i>
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
            <div className="container">
            <center><h2>Minimum Excess Item Details</h2></center>
            <div className="container-fluid">
                <MaterialTable  
                        style={{background:"#E3ECFF"}}
                        title="Raw Materials"

                        columns={[
                            
                            { title: "Item Id", field: "ItemId", type: "string" },
                            { title: "Item Name", field: "ItemName", type: "string" },
                            { title: "Quantity", field: "Quantity", type: "string" },
                            { title: "Item Type", field: "ItemType", type: "string" }

                        ]}

                        data={RawMaterial}
                        options={{

                            sorting: true,
                            actionsColumnIndex: -1,
                            exportButton: {
                                csv: true,
                                pdf: true,
                            }

                        }}
                />  
                </div>

                <div className="container-fluid">
                <MaterialTable  
                        style={{background:"#E3ECFF"}}
                        title="Product Items"

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
                            actionsColumnIndex: -1,
                            exportButton: {
                                csv: true,
                                pdf: true,
                            }

                        }}
                />  
                </div>
            </div>
        </div>
        </div>

    )

}