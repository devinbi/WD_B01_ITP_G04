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
    <div>
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
)
}