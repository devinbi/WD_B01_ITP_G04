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
    
    useEffect(()=>{
        
        
            axios.get('http://localhost:8060/employee/')
            .then((res) =>{
                console.log(res.data);
                setEmp(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])

    function onDelete() {
        axios.delete("http://localhost:8060/employee/delete/"+ EmployeeDelete)
            .then((res) => {
                console.log(res)
                alert('Transport detail deleted')
                window.location.reload(true)//reload page

            }).catch(() => {
                alert('error while deleting Transport Detail')
            })

    }
    
    return(
      
    
    <div>
  
  

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
                        paging :false,
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
                                setEmployeeDelete(rowData._id) //setidto delete
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
    )
}