import React, {useState, useEffect} from 'react';
import axios from "axios";
import MaterialTable from "material-table";





export default function DeletedCustomer(){


    const[Customers, setCustomers] = useState([]);




useEffect(()=> {
    function getCustomers(){
        axios.get("http://localhost:8070/dcustomer/").then((res)=>{
           
            setCustomers(res.data);
    }).catch((err)=> {
        alert(err.message);
    })
}
getCustomers();
},[])



return(

    <div >
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
                         <a href="/addCus">
                             <i class="fa fa-plus-circle" aria-hidden="true"></i>
                             <span class="nav-text">Add Customer Details </span>
                             <i class="fa fa-angle-right fa-2x"></i>
                         </a>
                     </li>
                     <hr></hr>
                     <li class="has-subnav">
                         <a href="/viewCus">
                             <i class="fa fa-users" aria-hidden="true"></i>
                             <span class="nav-text">View Customer List</span>
                             <i class="fa fa-angle-right fa-2x"></i>
                         </a>
                     </li>
                     <hr></hr>
                     <li class="has-subnav">
                         <a href="/addOrder">
                         <i class="fa fa-plus-circle" aria-hidden="true"></i>
                             <span class="nav-text"> Add Order Details</span>
                             <i class="fa fa-angle-right fa-2x"></i>
                         </a>
                     </li>
                     <hr></hr>
                     <li class="has-subnav">
                         <a href="/viewOrder">
                         <i class="fa fa-cart-flatbed"></i>
                             <span class="nav-text"> View Order Details</span>
                             <i class="fa fa-angle-right fa-2x"></i>
                         </a>
                     </li>
                     <hr></hr>
                     
                     <li class="has-subnav">
                         <a href="/ReportOc">
                         <i class="fa fa-download" aria-hidden="true"></i>
                             <span class="nav-text">Order Report</span>
                             <i class="fa fa-angle-right fa-2x"></i>
                         </a>
                     </li>
                     <hr></hr>

                     <li class="has-subnav">
                         <a href="/deleted">
                             <i class="fa fa-plus-circle" aria-hidden="true"></i>
                             <span class="nav-text">Delete Customer Details </span>
                             <i class="fa fa-angle-right fa-2x"></i>
                         </a>
                     </li>
                     <hr></hr>
                     
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
     
    <div >
     <div class="container">   
    <div class="container-fluid">
    <MaterialTable  style={{background:"#E3ECFF"}}
                title="All Customer Details "

                columns={[
                    { title: "Customer ID", field: "CustomerId", type: "string" },
                    { title: "Customer Name", field: "CustomerName", type: "string" },
                    { title: "Contact Number", field: "ContactNumber", type: "number" },
                    { title: "Email", field: "Email", type: "string" },
                    { title: "Address", field: "Address", type: "string" },
                    { title: "Country", field: "Country", type: "string" },
                    { title: "NIC", field: "NIC", type: "string" },
                    
                    

                ]}

                data={Customers}
                options={{
                    sorting: true,
                    search:false,
                    paging :false,
                    filtering : true,
                    actionsColumnIndex: -1
                  }}
                

    />
     {/* update modal */}
    

       
        </div>
    </div>
    </div>
    </div>
)
}