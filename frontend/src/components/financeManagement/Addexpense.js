import React,{useState} from 'react';
import axios from 'axios';


export  default function Addexpense(){

  const [expenseid, setExpenseid] = useState("");
  const [expensetype, setExpensetype] = useState("");
  const [date, setDate] = useState("");
  const [totalamount, setTotalamount] = useState("");
  const [description, setDescription] = useState("");
 

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
                            <a href="/adde">
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
                            <a href="/viewe">
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
                    <form onSubmit={sendData}>
                    <div class="form-group">
                            <label for="expenseid">Expense ID :</label>
                            <input type="text" class="form-control" id="expenseid" pattern="[E][0-9]{4}" placeholder="Enter"
                            onChange={(e)=>{
                                setExpenseid(e.target.value);
                            }}/>
                        
                        </div>

                        <div className="form-group">
                            <label for="description">Description</label>
                            <input type="text" class="form-control" id="description" onChange={(e)=>{
                                setDescription(e.target.value);
                            }}/>
                        </div>

                        <div class="form-group">
                            <label for="expensetype">Expense Type:</label>
                            <select name ="expensetype" class="form-control" id="expensetype" 
                            onChange={(e)=>{
                                setExpensetype(e.target.value);
                                
                            }}>
                             <option value="supplier">Supplier Cost</option>
                             <option value="maintenance">Maintenance Cost</option>
                             <option value="salary">Salary Cost</option>
                            </select>
                         </div>
                         <div className="form-group">
                            <label for="date">Date</label>
                            <input type="date" class="form-control" id="date" onChange={(e)=>{
                                setDate(e.target.value);
                            }}/>
                        </div>
                        
                        <div class="form-group">
                            <label for="totalamount">Total Amount:</label>
                            <input type="text" class="form-control" id="totalamount" 
                            onChange={(e)=>{
                                setTotalamount(e.target.value);
                            }}/>
                        </div>
            
                    <button type="submit" class="btn btn-info btn-lg">Submit</button>
                    </form>
                </div>
                </div>
                </div>
    )
                        }
  
  