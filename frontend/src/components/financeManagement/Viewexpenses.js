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

//delete function
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
        <div class="component-body">
          
        <div class="area">
                <nav class="main-menu bg-primary">
                    <ul>
                        <li>
                            <a href="/AllT">
                                <i class="fa fa-home "></i>
                                <span class="nav-text">Dashboard</span>
                                <i class="fa fa-angle-right fa-2x"></i>
                            </a>
                        </li>
                        
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/addi">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text">Add Income </span>
                                <i class="fa fa-angle-right fa-2x"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/addex">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text">Add Expense</span>
                                <i class="fa fa-angle-right fa-2x"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/viewi">
                            <i class="fa fa-usd" aria-hidden="true"></i>
                                <span class="nav-text">View Income</span>
                                <i class="fa fa-angle-right fa-2x"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/viewex">
                            <i class="fa fa-line-chart" aria-hidden="true"></i>
                                <span class="nav-text">View Expense</span>
                                <i class="fa fa-angle-right fa-2x"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/rep">
                            <i class="fa fa-download" aria-hidden="true"></i>
                                <span class="nav-text">Generate Report</span>
                                <i class="fa fa-angle-right fa-2x"></i>
                            </a>
                        </li>
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
     
{/* material table to view expense */}
        
        <div class="container">
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
                        
                        filtering : true,
                        actionsColumnIndex:-1
                        

                    }}

                    actions={[
                        {
                            icon: () => <button class="btn btn-sm btn-outline-warning">Update</button>,
                            onClick: (event, rowData) => {
                                setExpenseUpdate(rowData); 
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
        </div>
        
        
     
    )
}