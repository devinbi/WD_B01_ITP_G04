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
                            <li class="has-subnav">
                                <a href="/reportOutOfStock">
                                <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                    <span class="nav-text">Out Of Report Report</span>
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
            


        <div>
            <div className="container">
                
                    <div className="container-fluid">
                        <MaterialTable  
                        style={{background:"#E3ECFF"}}
                        title="Items to be requested"

                        columns={[
                            
                            { title: "Item Id", field: "ItemId", type: "string", width: "1%" },
                            { title: "Item Name", field: "ItemName", type: "string", width: "1%" },
                            { title: "Quantity", field: "Quantity", type: "string", width: "1%" },
                            { title: "Item Type", field: "ItemType", type: "string", width: "1%" }

                        ]}

                        data={RawMaterial}
                        options={{
                            
                            sorting: true,
                            actionsColumnIndex: -1,
                            exportButton: {
                                pdf: true,
                                csv: true,
                                
                            }
                            

                        }}
                        />  
                    </div>

                
            </div>
        </div>
    </div>

    )

}