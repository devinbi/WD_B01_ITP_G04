import React, { useState, useEffect } from "react"
import axios from 'axios'
import MaterialTable from 'material-table'


const HOST1 = "http://localhost:8070/RawMaterial"
const HOST2 = "http://localhost:8070/ManufacturedItem"


export default  function Report(){

    const [RawMaterial, setRawMaterial] = useState([]);
    const [ManufacturedItem, setManufacturedItem] = useState([]);


    useEffect(() => {

        axios.get(HOST1 + "/allR")
            .then((res) => {
                setRawMaterial(res.data);
                console.log('Data has been received');
            }).catch(() => {
                alert('Error while fetching data')
            })

    }, []);

    useEffect(() => {

        axios.get(HOST2 + "/fetch")
            .then((res) => {
                setManufacturedItem(res.data);
                console.log('Data has been received');
            }).catch(() => {
                alert('Error while fetching data')
            })

    }, []);
    

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
                <center>
                <div className="container">
                    <div className="container-fluid">
                        <MaterialTable 
                            style={{background:"#E3ECFF"}}
                            title="Raw Material Details Report"

                            columns={[
                                { title: "Item Id", field: "ItemId", type: "string" },
                                { title: "Item Name", field: "ItemName", type: "string" },
                                { title: "Quantity", field: "Quantity", type: "string" },
                                { title: "Item Type", field: "ItemType", type: "string" },

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
                            title=" Product Item Details Report"
                            columns={[
                                { title: "Item Id", field: "ItemId", type: "string" },
                                { title: "Item Name", field: "ItemName", type: "string" },
                                { title: "Quantity", field: "Quantity", type: "number" },
                                { title: "Material", field: "Material", type: "string" },
                                { title: "Colour", field: "Colour", type: "string" },
                                { title: "Size", field: "Size", type: "string" }
                            ]}

                            data={ManufacturedItem}
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
                </center>
            </div>
        </div>

    )

}