import React, { useState, useEffect } from "react"
import axios from 'axios'
import MaterialTable from 'material-table'




const HOST1 = "http://localhost:8070/item/"
const HOST2 = "http://localhost:8070/supplier/"



export default  function Report(){

    const [item, setItem] = useState([]);
    const [supplier, setSupplier] = useState([]);
    

    useEffect(()=>{
        
        
        axios.get(HOST1 + "/")
        .then((res) =>{
            console.log(res.data);
            setItem(res.data);
        }).catch((err)=>{
            alert(err.msg);

        })
    
    },[])
    useEffect(()=>{
        
        
        axios.get(HOST2 + "/")
        .then((res) =>{
            console.log(res.data);
            setSupplier(res.data);
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
                                        actionsColumnIndex: -1,
                                        
                                        exportButton: {
                                            csv: true,
                                            pdf: true,
                                         }
            
                                    }}
                            />
                    
                
                    </div>




                
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
        

    )

    



}