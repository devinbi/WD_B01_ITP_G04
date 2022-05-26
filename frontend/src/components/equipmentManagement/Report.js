import React, { useState, useEffect } from "react"
import axios from 'axios'
import MaterialTable from 'material-table'




const HOST1 = "http://localhost:8070/dressmaking"
const HOST2 = "http://localhost:8070/technical"
const HOST3 = "http://localhost:8070/emaintainance"


export default  function Report(){

    const [Dressmaking, setDressmaking] = useState([]);
    const [Technical, setTechnical] = useState([]);
    const [Emaintainance, setEmaintainance] = useState([]);

    useEffect(() => {

        axios.get(HOST1 + "/")
        .then((res) => {
            setDressmaking(res.data);
            console.log('Data has been received');
        }).catch(() => {
            alert('Error while fetching data')
        })

}, []);

    useEffect(() => {

        axios.get(HOST2 + "/")
            .then((res) => {
                setTechnical(res.data);
                console.log('Data has been received');
            }).catch(() => {
                alert('Error while fetching data')
            })

    }, []);
    
    useEffect(() => {

        axios.get(HOST3 + "/")
            .then((res) => {
                setEmaintainance(res.data);
                console.log('Data has been received');
            }).catch(() => {
                alert('Error while fetching data')
            })

    }, []);

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
                          <a href="/ReportE">
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
            <div className="container">
            <div className="container-fluid mt-3">

        <MaterialTable style={{background:"#E3ECFF"}}
                    title="  Dressmaking Tools Report"


                    columns={[
                        { title: "Machine Code", field: "machineCode", type: "string" },
                        { title: "Machine Name", field: "machineName", type: "string" },
                        { title: "Category", field: "category", type: "date" },
                        { title: "Price", field: "price", type: "string" },
                        { title: "Condition", field: "condition", type: "string" },
                       
                    ]}

                    data={Dressmaking}
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




                
            <div className="container-fluid">
                <MaterialTable style={{background:"#E3ECFF"}}
                    title=" Technical Device Report"

                    columns={[
                        { title: "DeviceCode", field: "deviceCode", type: "string" },
                        { title: "Model No", field: "modelNo", type: "string" },
                        { title: "MachineName", field: "machineName", type: "string" },
                        { title: "Price", field: "price", type: "string" },
                        { title: "Department", field: "department", type: "string" },
                        { title: "Condition", field: "condition", type: "string" },
                    ]}

                    data={Technical}
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



            <div className="container-fluid mt-3">
                    <MaterialTable style={{background:"#E3ECFF"}}
                        title="Maintenance Details Report"

         
                        columns={[
                        { title: "Maintain ID", field: "maintainID", type: "string" },
                        { title: "Machine Code", field: "machineCode", type: "string" },
                        { title: "Date", field: "date", type: "date" },
                        { title: "Category", field: "category", type: "string" },
                        { title: "Condition ", field: "condition", type: "string" },
                        { title: "Cost", field: "cost", type: "string" },

                        ]}

                        data={Emaintainance}
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