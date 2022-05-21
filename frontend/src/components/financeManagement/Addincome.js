import React,{useState , useEffect} from 'react';
import axios from 'axios';
import MaterialTable from 'material-table'



  export default function AddIncome(){

  const [orderid, setOrderid] = useState("");
  const [ordertype, setOrdertype] = useState("");
  const [numberofunits, setNumberofunits] = useState("");
  const [unitprice, setUnitprice] = useState("");
  


  //order details

  const host = "http://localhost:8070/Order"

  const [Orders, setOrders] = useState([]);
  console.log(Orders,"");


  useEffect(() => {

      axios.get(host + "/view")
          .then((res) => {
              console.log(res.data);
            setOrders(res.data);
              console.log(Orders,"");
              console.log(' Data has been received');
          }).catch((err) => {
              alert(err.msg)
          })

  }, []);

  let nofunits = parseInt(numberofunits);
  let uprice = parseInt(unitprice);
  let totalamount;

  totalamount = (nofunits * uprice) ;
  
 

  function sendData(r){
      r.preventDefault();
    
      const newIncome = {
        orderid,
        ordertype,
        numberofunits,
        unitprice,
        totalamount
        

      }
      
  console.log(newIncome)
      axios.post("http://localhost:8070/incomingfinance/add",newIncome).then(()=>{
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
                    <form onSubmit={sendData}>
                    <div class="form-group">
                            <label for="orderid">Order ID :</label>
                            <input type="text" class="form-control" id="orderid"  placeholder="Enter ID "
                            onChange={(e)=>{
                                setOrderid(e.target.value);
                            }}/>
                        
                        </div>
                        <div className="form-group">
                            <label for="ordertype">Order Type:</label>
                            <input type="text" class="form-control" id="ordertype"  placeholder="Enter order type" onChange={(e)=>{
                                setOrdertype(e.target.value);
                            }}/>
                        
                        </div>

                        <div className="form-group">
                            <label for="numberofunits">Number of units</label>
                            <input type="text" class="form-control" id="numberofunits" placeholder="Enter number of units" onChange={(e)=>{
                                setNumberofunits(e.target.value);
                            }}/>
                        </div>

                        <div class="form-group">
                            <label for="unitprice">Unit Price :</label>
                            <input type="text" class="form-control" id="unitprice" placeholder="Enter unit price"
                            onChange={(e)=>{
                                setUnitprice(e.target.value);
                            }}/>
                        </div>
                        
            
                    <button type="submit" class="btn btn-info btn-lg">Submit</button>
                    </form>
                </div>
             </div>
         

    {/*order table*/}
    
    <div class="container">  
    <div class="container-fluid mt-3">
    <MaterialTable  style={{background:"#E3ECFF"}}
                title="All Order Details "
                columns={[
                    { title: "Order ID", field: "OrderId", type: "string" },
                    { title: "Type of Order", field: "TypeOfOrder", type: "string" },
                    { title: "Unit Price", field: "UnitPrice", type: "number" },
                    { title: "Number Of Units", field: "NoOfUnit", type: "number" },
                    
                    

                ]}
               
                data={Orders}
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
  
  

