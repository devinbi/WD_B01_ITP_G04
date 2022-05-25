import React,{ useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import { Modal } from "react-bootstrap";
import Informs from "./emailForm"

export default function Inform(){
    const [alltechnical, setTechnical] = useState([]);

    const [StateUpdate, setStateUpdate] = useState(false)
    const [Informmail, setInformemail] = useState()

    useEffect(()=>{
        
        
        axios.get('http://localhost:8070/technical/')
        .then((res) =>{
            console.log(res.data);
            setTechnical(res.data);
        }).catch((err)=>{
            alert(err.msg);

        })
    
},[])

    return(
<div>
      <div class="component-body">
        <div class="area">
          <nav class="main-menu bg-primary">
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
      <div class="container">
        <div class="container-fluid">
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Technical Devices"

                    columns={[
                        { title: "Device Code", field: "deviceCode", type: "string" },
                        { title: "Model No", field: "modelNo", type: "string" },
                        { title: "Machine Name", field: "machineName", type: "string" },
                        { title: "Employee Id", field: "employeeId", type: "string" },
                        { title: "Price", field: "price", type: "string" },
                        { title: "Department", field: "department", type: "string" },
                        { title: "Condition", field: "condition", type: "string" }
                      

                    ]}

                    data={alltechnical}
                    options={{
                        sorting: true,
                        search:false,
                        paging :false,
                        filtering : true,
                        actionsColumnIndex: -1
                     
                    }}
                    actions={[
                        {
                            icon: () => <button class="btn btn-sm btn-outline-warning">Inform</button>,
                            onClick: (event, rowData) => {
                                setInformemail(rowData); //setTransportDetailswithID
                                setStateUpdate(true); //setStatetrue
                            }
                        },
                
                        
                    ]}

              
                

        />
          <Modal show={StateUpdate}>
                    <Modal.Body>
                        <Informs data={Informmail} cl={() => setStateUpdate(false)} />
                    </Modal.Body>
                </Modal>
        </div>
        </div>

</div>
    );

}