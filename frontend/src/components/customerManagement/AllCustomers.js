import React, {useState, useEffect} from 'react';
import axios from "axios";
import MaterialTable from "material-table";
import { Modal } from "react-bootstrap";
import UpdateCustomer from './UpdateCustomer.js';




export default function AllCustomers(){


    const[Customers, setCustomers] = useState([]);


    const [StateUpdate, setStateUpdate] = useState(false)
    const [CustomerUpdate, setCustomerUpdate] = useState()

    const [StateDelete, setStateDelete] = useState(false)
    const [CustomerDelete, setCustomerDelete] = useState()

    const [DeletedCustomer, setDeletecustomer] = useState()


useEffect(()=> {
    function getCustomers(){
        axios.get("http://localhost:8070/customer/").then((res)=>{
           
            setCustomers(res.data);
    }).catch((err)=> {
        alert(err.message);
    })
}
getCustomers();
},[])

function onDelete() {
   
    const CustomerId = DeletedCustomer.CustomerId;
    const CustomerName = DeletedCustomer.CustomerName;
    const ContactNumber = DeletedCustomer.ContactNumber;
    const Email = DeletedCustomer.Email;
    const Address = DeletedCustomer.Address;
    const Country = DeletedCustomer.Country;
    const NIC = DeletedCustomer.NIC;
   
    const removeCustomer = {
        CustomerId,
        CustomerName,
        ContactNumber,
        Email,
        Address,
        Country,
        NIC 
      }



    axios.post("http://localhost:8070/dcustomer/add",removeCustomer).then((response)=>{
      console.log(response)
      alert("Deleted Customer Added");
      }).catch((err)=>{
      alert(err)
    })
    axios.delete("http://localhost:8070/customer/delete/"+ CustomerDelete)
        .then((res) => {
            console.log(res)
            alert('Customer detail deleted')
            window.location.reload(true)//reload page

        }).catch(() => {
            alert('error while deleting Customer Detail')
        })

}

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
                     <hr></hr>
                     <li class="has-subnav">
                         <a href="/deleted">
                             <i class="fa fa-plus-circle" aria-hidden="true"></i>
                             <span class="nav-text">Delete Customer Details </span>
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
                  actions={[
                    {
                        icon: () => <button class="btn btn-sm btn-outline-warning">Update</button>,
                        onClick: (event, rowData) => {
                            setCustomerUpdate(rowData); //setCustomerDetailswithID
                            setStateUpdate(true); //setStatetrue
                        }
                    },
                    {
                        icon: () => <button class="btn btn-sm btn-outline-danger">Delete</button>,
                        onClick: (event, rowData) => {
                            setDeletecustomer(rowData)
                            setCustomerDelete(rowData._id) //setidto delete
                            setStateDelete(true);   //setstatetrue
                        }
                    },
                    
                ]}

    />
     {/* update modal */}
     <Modal show={StateUpdate}>
                    <Modal.Body>
                        <UpdateCustomer data={CustomerUpdate} cl={() => setStateUpdate(false)} />
                    </Modal.Body>
                </Modal>
                
                {/* delete modal */}
                <Modal show={StateDelete}>
                    <Modal.Body>
                        <p>You Want to delete this Customer details ?</p>
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