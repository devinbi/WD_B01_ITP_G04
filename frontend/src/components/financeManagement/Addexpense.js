import React,{useEffect,useState} from 'react';
import axios from 'axios';
import MaterialTable from 'material-table'



export  default function Addexpense(){

  const [expenseid, setExpenseid] = useState("");
  const [expensetype, setExpensetype] = useState("");
  const [date, setDate] = useState("");
  const [totalamount, setTotalamount] = useState("");
  const [description, setDescription] = useState("");

  

 //salary details 
   const HOST = "http://localhost:8070/salary"



  const [Salarys, setSalarys] = useState([]);
  console.log(Salarys,"");


  useEffect(() => {

      axios.get(HOST + "/")
          .then((res) => {
            setSalarys(res.data);
              console.log(Salarys,"");
              console.log('Data has been received');
          }).catch(() => {
              alert('Error while fetching data')
          })

   }, []);

   //maintenance details

 const host1 = "http://localhost:8070/Maintenance"

  const [Maintenances, setMaintenances] = useState([]);
  console.log(Maintenances,"");


  useEffect(() => {

      axios.get(host1 + "/")
          .then((res) => {
              console.log(res.data);
            setMaintenances(res.data);
              console.log(Maintenances,"");
              console.log('Data has been received');
          }).catch((err) => {
              alert(err.msg)
          })

  }, []);
  

  
  function sendData(e){
      e.preventDefault();
    
      const newExpense = {
        expenseid,
        expensetype,
        date,
        totalamount,
        description
        
      }
      
  console.log(newExpense)
      axios.post("http://localhost:8070/expense/add",newExpense).then(()=>{
          alert("Success");
          window.location.reload()
         
      

      }).catch((err)=>{
          alert(err);
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
       <div>
       
       <div className="container">
                  <title Add expense />
                    <form onSubmit={sendData}>
                    <div class="form-group">
                            <label for="expenseid">Expense ID :</label>
                            <input type="text" class="form-control" id="expenseid" pattern="[E][0-9]{4}" title = "invalid id pattern" placeholder="Enter expense id"
                            onChange={(e)=>{
                                setExpenseid(e.target.value);
                            }}
                            required/>
                        
                        </div>
              
                        <div className="form-group">
                            <label for="description">Description</label>
                            <input type="text" class="form-control" id="description" pattern="[A-Z a-z]{0-100}" title="description max length should be 100" placeholder="Enter description" onChange={(e)=>{
                                setDescription(e.target.value);
                            }}
                            required/>
                        </div>


                        <div class="form-group">
                            <label for="expensetype">Expense Type:</label>
                            <select name ="expensetype" class="form-control" id="expensetype" 
                            onChange={(e)=>{
                                setExpensetype(e.target.value);
                                
                            }}
                            required>
                             <option value="supplier">Supplier Cost</option>
                             <option value="maintenance">Maintenance Cost</option>
                             <option value="salary">Salary Cost</option>
                            </select>
                         </div>
                         <div className="form-group">
                            <label for="date">Date</label>
                            <input type="date" class="form-control" id="date" onChange={(e)=>{
                                setDate(e.target.value);
                            }}
                            required/>
                        </div>
                        
                        <div class="form-group">
                            <label for="totalamount">Total Amount:</label>
                            <input type="number" class="form-control" id="totalamount" title="enter only numbers" 
                            onChange={(e)=>{
                                setTotalamount(e.target.value);
                            }}
                            required/>
                        </div>
            
                    <button type="submit" class="btn btn-info btn-lg" >Submit</button>

                    
                    </form>
                </div>
            </div>


        {/* view slary table*/}

   <div class="container">
   <div className="container-fluid mt-3">
   <MaterialTable  style={{background:"#E3ECFF"}}
       title="All salary details"
       

       columns={[
        
        { title: "Labour Hours", field: "labourHr", type: "string" },
        { title: "OT Hours", field: "otHr", type: "string" },
        { title: "Leaves", field: "leave", type: "date" },
        { title: "Designation", field: "designation", type: "string" },
        { title: "Salary", field: "salary", type: "string" },
         
            ]}

       data={Salarys}
       options={{
           sorting: true,
           search:false,
         filtering : true,
           actionsColumnIndex: -1,
           

       }}

       
   />

  

</div>
</div> 

            {/* view maintenance table */}

             <div class="container">
             <div className="container-fluid mt-3">
             <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All maintenance Details "

                    columns={[
                        
                        { title: "Vehicle Registration No", field: "Vehicle_Registration_No", type: "string" },
                        { title: "Description", field: "Description", type: "string" },
                        { title: "maintenance Cost ", field: "maintenance_Cost", type: "string" },
                        

                    ]}
                    
                    data={Maintenances}
                    options={{
                        sorting: true,
                        search:false,
                        filtering : true,
                        actionsColumnIndex: -1
                     
                    }}
                    

        />
         </div>




</div>
</div>



)
    }