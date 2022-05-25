import React, {useState, useEffect} from 'react';
import axios from "axios";
import MaterialTable from "material-table";
import { Modal } from "react-bootstrap";
import UpdateOrder from './UpdateOrder.js';



export default function AllOrders(){

const[Orders, setOrders] = useState([]);

    const [StateUpdate, setStateUpdate] = useState(false)
    const [OrderUpdate, setOrderUpdate] = useState()

    const [StateDelete, setStateDelete] = useState(false)
    const [OrderDelete, setOrderDelete] = useState()


useEffect(()=> {
    function getOrders(){
        axios.get("http://localhost:8070/order/view").then((res)=>{
           
            setOrders(res.data);
    }).catch((err)=> {
        alert(err.message);
    })
}
getOrders();
},[])

function onDelete() {
    axios.delete("http://localhost:8070/order/delete/"+ OrderDelete)
        .then((res) => {
            console.log(res)
            alert('Order detail deleted')
            window.location.reload(true)//reload page

        }).catch(() => {
            alert('error while deleting Order Detail')
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
                                <i class="fa fa-home "></i>
                                <span class="nav-text">Dashboard</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/addCustomer">
                                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text">Add Customer Details </span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/viewCus">
                                <i class="fa fa-users" aria-hidden="true"></i>
                                <span class="nav-text">View Customer List</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/addOrder">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text"> Add Order Details</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/viewOrder">
                            <i class="fa fa-cart-flatbed"></i>
                                <span class="nav-text"> View Order Details</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        
                        <li class="has-subnav">
                            <a href="/ReportOc">
                            <i class="fa fa-download" aria-hidden="true"></i>
                                <span class="nav-text">Order Report</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                    </ul>
                    <hr></hr>
                    <ul class="logout">
                        <li>
                            <a href="/">
                                <i class="fa fa-power-off "></i>
                                <span class="nav-text">Logout</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
         </div>
     
    <div>
    <div class="container">  
    <div class="container-fluid">
    <MaterialTable  style={{background:"#E3ECFF"}}
                title="All Order Details "
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
               
                data={Orders}
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
                                setOrderUpdate(rowData); //setOrderDetailswithID
                                setStateUpdate(true); //setStatetrue
                            }
                        },
                        {
                            icon: () => <button class="btn btn-sm btn-outline-danger">Delete</button>,
                            onClick: (event, rowData) => {
                                setOrderDelete(rowData._id) //setidto delete
                                setStateDelete(true);   //setstatetrue
                            }
                        },
                        
                    ]}

    />
    </div>
    {/* update modal */}
    <Modal show={StateUpdate}>
      <Modal.Body>
        <UpdateOrder data={OrderUpdate} cl={() => setStateUpdate(false)} />
      </Modal.Body>
</Modal>

{/* delete modal */}
<Modal show={StateDelete}>
    <Modal.Body>
        <p>You Want to delete this Order details ?</p>
        <button type="button" class="btn btn-outline-danger mr-3 pl-3" onClick={onDelete}>Delete</button>
        <button type="button" class="btn btn-outline-secondary pl-3" onClick={() => setStateDelete(false)}>Cancel</button>
    </Modal.Body>
</Modal>


</div>
</div>
</div>

)
}