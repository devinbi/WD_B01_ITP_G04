import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';
import UpdateEmployee from "./UpdateEmployee";
import { Modal } from "react-bootstrap";

export default function AllEmployee(props){
    const [employee, setEmp] = useState([]);


    const [StateUpdate, setStateUpdate] = useState(false)
    const [SalaryEmployee, setEmployeeUpdate] = useState()

    const [StateDelete, setStateDelete] = useState(false)
    const [EmployeeDelete, setEmployeeDelete] = useState()

    const [ResignedEmployee, setResigned] = useState()
    
    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/employee/')
            .then((res) =>{
                console.log(res.data);
                setEmp(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])

    function onDelete() {

        
    const employeeId=ResignedEmployee.employeeId;
    const name = ResignedEmployee.name;
    const address =ResignedEmployee.address;
    const dob = ResignedEmployee.dob;
    const gender = ResignedEmployee.gender;
    const email = ResignedEmployee.email;
    const phone = ResignedEmployee.phone;
    const nic = ResignedEmployee.nic;
    const eQuality = ResignedEmployee.eQuality;
    const wExperence = ResignedEmployee.wExperence;
    const department = ResignedEmployee.department;
    const designation = ResignedEmployee.designation;
    const jDate = ResignedEmployee.jDate;

        let d = new Date();
        let currentDate = d.getMonth()  + '/' + d.getDate() + '/' +  d.getFullYear();
        let resignd = currentDate;
        console.log(resignd);
        const newResignEmployee = {
            employeeId,
            name,
            address,
            dob,
            gender,
            email,
            phone,
            nic,
            eQuality,
            wExperence,
            department,
            designation,
            jDate,
            resignd
          }
          
        axios.post("http://localhost:8060/resigned/add",newResignEmployee).then(()=>{
            console.log("sucess")
            }).catch((err)=>{
                alert(err);
            })
   
        axios.delete("http://localhost:8070/employee/delete/"+ EmployeeDelete)
            .then((res) => {
                console.log(res)
                alert('Employee detail deleted')
                window.location.reload(true)//reload page

            }).catch(() => {
                alert('error while deleting Employee Detail')
            })

    }
    
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
  <br/>
  <br/>
       <div className="container">
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

                    data={employee}
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
                                setEmployeeUpdate(rowData); //setTransportDetailswithID
                                setStateUpdate(true); //setStatetrue
                            }
                        },
                        {
                            icon: () => <button class="btn btn-sm btn-outline-danger">Delete</button>,
                            onClick: (event, rowData) => {
                                setResigned(rowData);
                                setEmployeeDelete(rowData._id); //setidto delete
                                setStateDelete(true);   //setstatetrue
                            }
                        },
                        
                    ]}
              />      
                    {/* update modal */}
                    <Modal show={StateUpdate}>
                    <Modal.Body>
                        <UpdateEmployee data={SalaryEmployee} cl={() => setStateUpdate(false)} />
                    </Modal.Body>
                </Modal>
                
                {/* delete modal */}
                <Modal show={StateDelete}>
                    <Modal.Body>
                        <p>You Want to delete this Employee details ?</p>
                        <button type="button" class="btn btn-outline-danger mr-3 pl-3" onClick={onDelete}>Delete</button>
                        <button type="button" class="btn btn-outline-secondary pl-3" onClick={() => setStateDelete(false)}>Cancel</button>
                    </Modal.Body>
                </Modal>

        
        </div>
        
        </div>
        </div>
    )
}