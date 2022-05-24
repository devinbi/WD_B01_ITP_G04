import React, { useState, useEffect } from "react"
import axios from 'axios'
import MaterialTable from 'material-table'




const HOST1 = "http://localhost:8070/expense"
const HOST2 = "http://localhost:8070/incomingfinance"



export default  function Report(){

    const [expense, setExpense] = useState([]);
    const [income, setIncome] = useState([]);

    useEffect(() => {

        axios.get(HOST1 + "/")
            .then((res) => {
                setExpense(res.data);
                console.log('Data has been received');
            }).catch(() => {
                alert('Error while fetching data')
            })

    }, []);
    useEffect(() => {

        axios.get(HOST2 + "/")
            .then((res) => {
                setIncome(res.data);
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
     
            <div>
            <div className="container">
            <div className="container-fluid">

        <MaterialTable style={{background:"#E3ECFF"}}
                    title="  Expense detail report"

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
                    title=" income Details Report"

                    columns={[
                        { title: "Order ID", field: "orderid", type: "string" },
                        { title: "Order Type", field: "ordertype", type: "string" },
                        { title: "Number of Units", field: "numberofunits", type: "number" },
                        { title: "Unit Price", field: "unitprice", type: "number" },
                        { title: "Total Amount", field: "totalamount", type: "number" },
                        
                    ]}

                    data={income}
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

            
            <div>
            <div className="container">
                  <title Add expense />
                    <form>
                    <div class="form-group">
                            <label for="expenseid">Total Expenses :</label>
                            <input type="text" class="form-control" id="Texp" placeholder=" Total Expenses "
                            />
                        
                        </div>
              
                        <div className="form-group">
                            <label for="description">Total Income :</label>
                            <input type="text" class="form-control" id="Tinc"  placeholder="Total Income" 
                           />
                        </div>

                         <div className="form-group">
                            <label for="date">Date</label>
                            <input type="date" class="form-control" id="date" />
                        </div>
                        
                        <div class="form-group">
                            <label for="totalamount">Netprofit:</label>
                            <input type="number" class="form-control" id="Nprofit" title="enter only numbers" 
                           />
                        </div>
            
                    <button type="submit" class="btn btn-info btn-lg" >Calculate</button>

                    
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
        
        

    )

    
}