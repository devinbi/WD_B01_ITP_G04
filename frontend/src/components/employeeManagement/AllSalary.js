import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';
import { Modal } from "react-bootstrap";
import UpdateSalary from "./UpdateSalary";

export default function AllSalary(props){

    const [salary, setSalary] = useState([]);

    const [StateUpdate, setStateUpdate] = useState(false)
    const [SalaryUpdate, setSalaryUpdate] = useState()

    const [StateDelete, setStateDelete] = useState(false)
    const [SalaryDelete, setSalaryDelete] = useState()


    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/salary/')
            .then((res) =>{
                console.log(res.data);
                setSalary(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])

    function onDelete() {
        axios.delete( "http://localhost:8070/salary/delete/"+ SalaryDelete)
            .then((res) => {
                console.log(res)
                alert('Salary detail deleted')
                window.location.reload(true)//reload page

            }).catch(() => {
                alert('error while deleting salary Detail')
            })

    }

    
    return(
      
    
    <div >
      <div class="component-body">
        
        <div class="area">
                <nav class="main-menu bg-primary" >
                    <ul>
                    <li class="has-subnav">
                            <a href="#">
                            <i class="fa fa-house"></i>
                                <span class="nav-text">Dash Board</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/viewE">
                                <i class="fa fa-users"></i>
                                <span class="nav-text">View Employee List</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                            </li>
                        <li class="has-subnav">
                            <a href="/adde">
                            <i class="fa fa-user-plus"></i>
                                <span class="nav-text">Add Employee</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        
                        <li class="has-subnav">
                            <a href="/viewS">
                            <i class="fa fa-wallet"></i>
                                <span class="nav-text">View Salary Details</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <li class="has-subnav">
                            <a href="/adds">
                            <i class="fa fa-hand-holding-dollar"></i>
                                <span class="nav-text">Add Salary Detials</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/alle">
                            <i class="fa fa-users-gear"></i>
                                <span class="nav-text">Manage Employee</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/alls">
                            <i class="fa fa-scale-balanced"></i>
                                <span class="nav-text">Salary Maintains</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/resign">
                            <i class="fa fa-users-slash"></i>
                                <span class="nav-text">Resigned Employee</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/report">
                            <i class="fa fa-download" aria-hidden="true"></i>
                                <span class="nav-text">Reports</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>

                </nav>
            </div>
            </div>
  
 
  
 
<div className="container">
        <div class="container-fluid mt-5">
       
        
       <a href="adds"> <button type="button" class="btn btn-danger mb-3 px-3 "><i class="fa fa-plus fa-2x" aria-hidden="true"></i></button></a>
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Salary Details "

                    columns={[
                        { title: "Employee Id", field: "employeeId", type: "string" },
                        { title: "Labour Hours", field: "labourHr", type: "string" },
                        { title: "OT Hours", field: "otHr", type: "string" },
                        { title: "Leaves", field: "leave", type: "date" },
                        { title: "Designation", field: "designation", type: "string" },
                        { title: "Month", field: "month", type: "string"},
                        { title: "Salary", field: "salary", type: "string" },
                         
                            ]}

                    data={salary}
                    options={{
                        sorting: true,
                        search:false,
                        paging :true,
                        filtering : true,
                        actionsColumnIndex: -1

                        

                    }}
                    actions={[
                        {
                            icon: () => <button class="btn btn-sm btn-outline-warning">Update</button>,
                            onClick: (event, rowData) => {
                                setSalaryUpdate(rowData); //setEmployeeDetailswithID
                                setStateUpdate(true); //setStatetrue
                            }
                        },
                        {
                            icon: () => <button class="btn btn-sm btn-outline-danger">Delete</button>,
                            onClick: (event, rowData) => {
                                setSalaryDelete(rowData._id) //setidto delete
                                setStateDelete(true);   //setstatetrue
                            }
                        },
                        
                    ]}
              />      
                    {/* update modal */}
                    <Modal show={StateUpdate}>
                    <Modal.Body>
                        <UpdateSalary data={SalaryUpdate} cl={() => setStateUpdate(false)} />
                    </Modal.Body>
                </Modal>
                
                {/* delete modal */}
                <Modal show={StateDelete}>
                    <Modal.Body>
                        <p>You Want to delete this Salary details ?</p>
                        <button type="button" class="btn btn-outline-danger mr-3 pl-3" onClick={onDelete}>Delete</button>
                        <button type="button" class="btn btn-outline-secondary pl-3" onClick={() => setStateDelete(false)}>Cancel</button>
                    </Modal.Body>
                </Modal>

       
        </div>
      
        </div>
        </div>
    )
}