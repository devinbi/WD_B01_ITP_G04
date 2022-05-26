import React, { useState, useEffect } from "react"
import axios from 'axios'
import MaterialTable from 'material-table'




const HOST1 = "http://localhost:8070/employee";
const HOST2 = "http://localhost:8070/salary";



export default  function Report(){

    const [Employee, setEmployee] = useState([]);
    const [Salary, setSalary] = useState([]);
  

    useEffect(() => {

        axios.get(HOST1 + "/")
            .then((res) => {
                setEmployee(res.data);
                console.log('Data has been received');
            }).catch(() => {
                alert('Error while fetching data')
            })

    }, []);
    useEffect(() => {

        axios.get(HOST2 + "/")
            .then((res) => {
                setSalary(res.data);
                console.log('Data has been received');
            }).catch(() => {
                alert('Error while fetching data')
            })

    }, []);
    

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
                           <a href="/Report">
                           <i class="fa fa-download" aria-hidden="true"></i>
                               <span class="nav-text">Reports</span>
                               <i class="fa fa-angle-right"></i>
                           </a>
                       </li>
                   </ul>

               </nav>
           </div>
           </div>
        
            <div>
            <div className="container pt-7">
            <div class="container-fluid">
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

                    data={Employee}
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
    
            <div class="container-fluid pt-7">
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

                    data={Salary}
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
        </div>
        

    )

    



}