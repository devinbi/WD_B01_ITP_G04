import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';


export default function AllEmployee(props){
    const [employee, setEmp] = useState([]);



    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/employee/')
            .then((res) =>{
                console.log(res.data);
                setEmp(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])

    
    
    return(
      
    
    <div>

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
        <a href="adde"><button type="button" class="btn btn-danger mb-3 px-3 "><i class="fa fa-plus fa-2x" aria-hidden="true"></i></button></a>
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Employee Details "

                    columns={[
                        { title: "Employee Id", field: "employeeId", type: "string" },
                        { title: "Name", field: "name", type: "string" },
                        { title: "Address", field: "address", type: "string" },
                        { title: "Date of Bir", field: "dob", type: "date" },
                        { title: "Gender", field: "gender", type: "string" },
                        { title: "Email", field: "email", type: "string" },
                        

                    ]}

                    data={employee}
                    options={{
                        sorting: true,
                        search:true,
                        paging :true,
                        filtering : true,
                        actionsColumnIndex: -1
                    }}
                   
              />      
                   

                   </div>
        </div>
        
        </div>
    )
}