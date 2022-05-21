import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';
import { Modal } from "react-bootstrap";
import UpdateEmaintainance from "./UpdateEmaintainance";


export default function AllEmaintainance(props){
    const [allemaintainance, setEmaintainance] = useState([]);

    const [StateUpdate, setStateUpdate] = useState(false)
    const [EmaintainanceUpdate, setEmaintainanceUpdate] = useState()

    const [StateDelete, setStateDelete] = useState(false)
    const [EmaintainanceDelete, setEmaintainanceDelete] = useState()
    
    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/emaintainance/')
            .then((res) =>{
                console.log(res.data);
                setEmaintainance(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])

    function onDelete() {
        axios.delete( "http://localhost:8070/emaintainance/delete/"+ EmaintainanceDelete)
            .then((res) => {
                console.log(res)
                alert('Details deleted')
                window.location.reload(true)//reload page

            }).catch(() => {
                alert('error while deleting details')
            })

    }

    console.log(allemaintainance.data);
    return(

        <div>
          <div class="component-body">
        
        <div class="area">
                <nav class="main-menu bg-primary">
                    <ul>
                        <li>
                            <a href="/AllT">
                                <i class="fa fa-home"></i>
                                <span class="nav-text">Dashboard</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/addDressmaking">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text">Add Dressmaking</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <li class="has-subnav">
                            <a href="/AllDressmakings">
                            <i class="fa fa-file" aria-hidden="true"></i>
                                <span class="nav-text">View Dressmaking</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/addTechnical">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text">Add Technical</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <li class="has-subnav">
                            <a href="/AllTechnicals">
                            <i class="fa fa-file" aria-hidden="true"></i>
                                <span class="nav-text">View Technical</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/addEmaintainance">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text">Add Maintenance</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>

                        <li class="has-subnav">
                            <a href="/AllEmaintainance">
                               <i class="fa fa-file" aria-hidden="true"></i>
                                <span class="nav-text">View Maintainance </span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/Report">
                            <i class="fa fa-download" aria-hidden="true"></i>
                                <span class="nav-text">Equipment Maintainance Report</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                       
                    </ul>

                    <ul class="logout">
                        <li>
                            <a href="/">
                                <i class="fa fa-power-off"></i>
                                <span class="nav-text">Logout</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>

        <div>
        <div class="container-fluid">
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Maintainance Details"

                    columns={[
                        { title: "Maintainance ID", field: "maintainID", type: "string" },
                        { title: "Machine Code", field: "machineCode", type: "string" },
                        { title: "Date", field: "date", type: "string" },
                        { title: "Category", field: "category", type: "string" },
                        { title: "Condition", field: "condition", type: "string" },
                        { title: "Cost", field: "cost", type: "string" }
                      
                        
                    ]}

                    data={allemaintainance}
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
                                setEmaintainanceUpdate(rowData); //setMaintainanceDetailswithID
                                setStateUpdate(true); //setStatetrue
                            }
                        },
                        {
                            icon: () => <button class="btn btn-sm btn-outline-danger">Delete</button>,
                            onClick: (event, rowData) => {
                                setEmaintainanceDelete(rowData._id) //setidto delete
                                setStateDelete(true);   //setstatetrue
                            }
                        },
                        
                    ]}
        />

         {/* update modal */}
         <Modal show={StateUpdate}>
                    <Modal.Body>
                        <UpdateEmaintainance data={EmaintainanceUpdate} cl={() => setStateUpdate(false)} />
                    </Modal.Body>
                </Modal>
                
                {/* delete modal */}
                <Modal show={StateDelete}>
                    <Modal.Body>
                        <p>Do you want to delete these details ?</p>
                        <button type="button" class="btn btn-outline-danger mr-3 pl-3" onClick={onDelete}>Delete</button>
                        <button type="button" class="btn btn-outline-secondary pl-3" onClick={() => setStateDelete(false)}>Cancel</button>
                    </Modal.Body>
                </Modal>
        </div>
        </div>
        </div>
    )
}