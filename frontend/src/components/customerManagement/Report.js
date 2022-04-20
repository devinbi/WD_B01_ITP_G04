import React, { useState, useEffect } from "react"
import axios from 'axios'
import MaterialTable from 'material-table'




const HOST1 = "http://localhost:8070/customer"
const HOST2 = "http://localhost:8070/order"



export default  function Report(){

    const [CustomerDetails, setCustomerDetails] = useState([]);
    const [OrderDetails, setOrderDetails] = useState([]);
   

    useEffect(() => {

        axios.get(HOST1 + "/")
            .then((res) => {
                setCustomerDetails(res.data);
                console.log('Data has been received');
            }).catch(() => {
                alert('Error while fetching data')
            })

    }, []);
    useEffect(() => {

        axios.get(HOST2 + "/view")
            .then((res) => {
                setOrderDetails(res.data);
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
                           <a href="/AllT">
                               <i class="fa fa-home fa-2x"></i>
                               <span class="nav-text">Dashboard</span>
                               <i class="fa fa-angle-right fa-2x"></i>
                           </a>
                       </li>
                       <hr></hr>
                       <li class="has-subnav">
                           <a href="/add">
                               <i class="fa fa-plus-circle" aria-hidden="true"></i>
                               <span class="nav-text">Add Customer Details </span>
                               <i class="fa fa-angle-right fa-2x"></i>
                           </a>
                       </li>
                       <hr></hr>
                       <li class="has-subnav">
                           <a href="/">
                               <i class="fa fa-users" aria-hidden="true"></i>
                               <span class="nav-text">View Customer List</span>
                               <i class="fa fa-angle-right fa-2x"></i>
                           </a>
                       </li>
                       <hr></hr>
                       <li class="has-subnav">
                           <a href="/addO">
                           <i class="fa fa-plus-circle" aria-hidden="true"></i>
                               <span class="nav-text"> Add Order Details</span>
                               <i class="fa fa-angle-right fa-2x"></i>
                           </a>
                       </li>
                       <hr></hr>
                       <li class="has-subnav">
                           <a href="/view">
                           <i class="fa fa-cart-flatbed"></i>
                               <span class="nav-text"> View Order Details</span>
                               <i class="fa fa-angle-right fa-2x"></i>
                           </a>
                       </li>
                       <hr></hr>
                       
                       <li class="has-subnav">
                           <a href="/Report">
                           <i class="fa fa-download" aria-hidden="true"></i>
                               <span class="nav-text">Order Report</span>
                               <i class="fa fa-angle-right fa-2x"></i>
                           </a>
                       </li>
                   </ul>
                   <hr></hr>
                   <ul class="logout">
                       <li>
                           <a href="/">
                               <i class="fa fa-power-off fa-2x"></i>
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

        <MaterialTable style={{background:"#E3ECFF"}}
                    title="  Customer Details Report"

                    columns={[
                        { title: "Customer ID", field: "CustomerId", type: "string" },
                        { title: "Customer Name", field: "CustomerName", type: "string" },
                        { title: "Contact Number", field: "ContactNumber", type: "number" },
                        { title: "Email", field: "Email", type: "string" },
                        { title: "Address", field: "Address", type: "string" },
                        { title: "Country", field: "Country", type: "string" },
                        { title: "NIC", field: "NIC", type: "string" },
                        
                        
    
                    ]}
    
                    data={CustomerDetails}
                    options={{
                        sorting: true,
                        actionsColumnIndex: -1,
                        exportButton: {
                            csv: true,
                            pdf: true,
                      }}}
                
                    />
                    
                
                </div>




                
                <div className="container-fluid">
                <MaterialTable style={{background:"#E3ECFF"}}
                    title=" Order Details Report"

                    columns={[
                        { title: "Order ID", field: "OrderId", type: "string" },
                        { title: "Type of Order", field: "TypeOfOrder", type: "string" },
                        { title: "Unit Price", field: "UnitPrice", type: "number" },
                        { title: "Number Of Units", field: "NoOfUnit", type: "number" },
                        { title: "Order Status", field: "OrderStatus", type: "string" },
                        { title: "Order Description", field: "OrderDescription", type: "string" },
                        { title: "Date of Receipt of Order", field: "DateOfReceipt", type: "date" },
                        { title: "Order Delivery date", field: "OrderDeliveryDate", type: "date" },
                        
    
                    ]}

                    data={OrderDetails}
                    options={{
                        sorting: true,
                        actionsColumnIndex: -1,
                        exportButton: {
                            csv: true,
                            pdf: true,
                      }}}

                    
                />

                
            </div>

            



        </div>
        </div>
        </div>

    )

    



}