import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';
import { Modal } from "react-bootstrap";
import Updateexpense from "./Updateexpense";

export default function Viewexpenses(props){
    const [expense, setExpense] = useState([]);
    const [StateUpdate, setStateUpdate] = useState(false)
    const [expenseUpdate, setExpenseUpdate] = useState()

    const [StateDelete, setStateDelete] = useState(false)
    const [expenseDelete, setExpenseDelete] = useState()
    
    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/expense/')
            .then((res) =>{
                console.log(res.data);
                setExpense(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])


    function onDelete() {
        axios.delete( "http://localhost:8070/expense/delete/"+ expenseDelete)
            .then((res) => {
                console.log(res)
                alert('expense detail deleted')
                window.location.reload(true)//reload page
    
            }).catch(() => {
                alert('error while deleting expense Detail')
            })
    
    }
    
    return(

        <div>

        <div class="container-fluid">
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Expense Details "

                    columns={[
                        { title: "Expense ID", field: "expenseid", type: "string" },
                        { title: "Expense Type", field: "expensetype", type: "string" },
                        { title: "DATE", field: "date", type: "date" },
                        { title: "Total Amount", field: "totalamount", type: "number" },
                        { title: "Description", field: "description", type: "string" },
                        
                    ]}

                    data={expense}
                    options={{
                
                        sorting: true,
                        search:false,
                        paging :false,
                        filtering : true,
                        actionsColumnIndex:-1
                        

                    }}

                    actions={[
                        {
                            icon: () => <button class="btn btn-sm btn-outline-warning">Update</button>,
                            onClick: (event, rowData) => {
                                setExpenseUpdate(rowData); //setTransportDetailswithID
                                setStateUpdate(true); //setStatetrue
                            }
                        },
                        {
                            icon: () => <button class="btn btn-sm btn-outline-danger">Delete</button>,
                            onClick: (event, rowData) => {
                                setExpenseDelete(rowData._id) //setidto delete
                                setStateDelete(true);   //setstatetrue
                            }
                        },
                        
                    ]}
                    

        />
         {/* update modal */}
         <Modal show={StateUpdate}>
                    <Modal.Body>
                        <Updateexpense data={expenseUpdate} cl={() => setStateUpdate(false)} />
                    </Modal.Body>
                </Modal>
                
                {/* delete modal */}
                <Modal show={StateDelete}>
                    <Modal.Body>
                        <p>You Want to delete this Expense details ?</p>
                        <button type="button" class="btn btn-outline-danger mr-3 pl-3" onClick={onDelete}>Delete</button>
                        <button type="button" class="btn btn-outline-secondary pl-3" onClick={() => setStateDelete(false)}>Cancel</button>
                    </Modal.Body>
                </Modal>
        </div>
        </div>
     
    )
}