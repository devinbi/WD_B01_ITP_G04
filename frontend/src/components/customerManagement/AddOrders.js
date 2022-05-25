import React, {useEffect,useState} from "react";
import axios from "axios";
import MaterialTable from 'material-table';


export default function AddOrders(){

  const [OrderId, setOrderId] = useState("");
  const [TypeOfOrder, setType] = useState("");
  const [UnitPrice, setPrice] = useState("");
  const [NoOfUnit, setUnits] = useState("");
  const [OrderStatus, setStatus] = useState("");
  const [OrderDescription, setDescription] = useState("");
  const [DateOfReceipt, setDateOfReceipt] = useState("");
  const [OrderDeliveryDate, setOrderDeliveryDate] = useState("");
  const [ProductItems, setProductItem] = useState([]);
  useEffect(()=>{
          
          
      axios.get('http://localhost:8070/ManufacturedItem/fetch')
      .then((res) =>{
          console.log(res.data);
          setProductItem(res.data);
      }).catch((err)=>{
          alert(err.msg);
  
      })
  
  },[])
  

  function sendData(e){
    e.preventDefault();
    
    const newOrder = {
        OrderId,
        TypeOfOrder,
        UnitPrice,
        NoOfUnit,
        OrderStatus,
        OrderDescription,
        DateOfReceipt,
        OrderDeliveryDate
    }
    console.log("new order",newOrder);
    axios.post("http://localhost:8070/order/addO", newOrder).then((response)=>{
      console.log(response)
      alert("Order Added");
      }).catch((err)=>{
      alert(err)
    })
   
}
    
  

    return(

      <div>
          <div class="container">
                    <div class="container-fluid">
                        <MaterialTable  
                            style={{background:"#E3ECFF"}}
                            title="All End Product Details "
                            columns={[
                                
                                
                                { title: "Item Name", field: "ItemName", type: "string" },
                                { title: "Quantity", field: "Quantity", type: "number" },
                                { title: "Material", field: "Material", type: "string" },
                                { title: "Colour", field: "Colour", type: "string" },
                                { title: "Size", field: "Size", type: "string" }

                            ]}

                            data={ProductItems}
                            options={{

                                sorting: true,
                                search:false,
                                filtering : true,
                                actionsColumnIndex: -1

                            }}
                            />


                          </div>
                          </div>

      <div class="component-body">
     
     <div class="area">
             <nav class="main-menu bg-primary">
                 <ul>
                     <li>
                         <a href="/AllT">
                             <i class="fa fa-home fa-2x"></i>
                             <span class="nav-text">Dashboard</span>
                             <i class="fa fa-angle-right fa-2x"></i>
                         </a>
                     </li>
                     <hr></hr>
                     <li class="has-subnav">
                         <a href="/addCustomer">
                             <i class="fa fa-plus-circle" aria-hidden="true"></i>
                             <span class="nav-text">Add Customer Details </span>
                             <i class="fa fa-angle-right fa-2x"></i>
                         </a>
                     </li>
                     <hr></hr>
                     <li class="has-subnav">
                         <a href="/viewCus">
                             <i class="fa fa-users" aria-hidden="true"></i>
                             <span class="nav-text">View Customer List</span>
                             <i class="fa fa-angle-right fa-2x"></i>
                         </a>
                     </li>
                     <hr></hr>
                     <li class="has-subnav">
                         <a href="/addOrder">
                         <i class="fa fa-plus-circle" aria-hidden="true"></i>
                             <span class="nav-text"> Add Order Details</span>
                             <i class="fa fa-angle-right fa-2x"></i>
                         </a>
                     </li>
                     <hr></hr>
                     <li class="has-subnav">
                         <a href="/viewOrder">
                         <i class="fa fa-cart-flatbed"></i>
                             <span class="nav-text"> View Order Details</span>
                             <i class="fa fa-angle-right fa-2x"></i>
                         </a>
                     </li>
                     <hr></hr>
                     
                     <li class="has-subnav">
                         <a href="/ReportOc">
                         <i class="fa fa-download" aria-hidden="true"></i>
                             <span class="nav-text">Order Report</span>
                             <i class="fa fa-angle-right fa-2x"></i>
                         </a>
                     </li>
                 </ul>
                 <hr></hr>
                 <ul class="logout">
                     <li>
                         <a href="/">
                             <i class="fa fa-power-off fa-2x"></i>
                             <span class="nav-text">Logout</span>
                             <i class="fa fa-angle-right fa-2x"></i>
                         </a>
                     </li>
                 </ul>
             </nav>
         </div>
         </div>
     
     <div className="container">
     <center><h3>ADD ORDER DETAILS</h3></center>
        <form onSubmit = {sendData}>



            <div class="form-group">
              
            <div class="mb-3">
                <label for="OrderId" class="form-label">Order ID</label>
                <input type="text" class="form-control" id="OrderId" placeholder="Enter Order ID"
                pattern="[o]{1}[0-9]{4}"
                onChange={(e)=> {
                  setOrderId(e.target.value);
                }}
                required
                />
              </div>

              <div class="mb-3">
                <label for="typeOfOrder" class="form-label">Type of Order</label>
                <input type="text" class="form-control" id="TypeOfOrder" placeholder="Enter Order Type"
                pattern="[A-Z a-z]{0,30}"  
                onChange={(e)=> {
                    setType(e.target.value);
                }}
                required
                />
              </div>

              <div class="mb-3">
                <label for="unitPrice" class="form-label">Unit Price</label>
                <input type="number" class="form-control" id="unitPrice" placeholder="Enter Unit Price"
                onChange={(e)=> {
                    setPrice(e.target.value);
                }}
                required
                />
              </div>

              <div class="mb-3">
                <label for="noOfUnit" class="form-label">Number of Units</label>
                <input type="number" class="form-control" id="NoOfUnit" placeholder="Enter Number of Units"
                onChange={(e)=> {
                    setUnits(e.target.value);
                }}
                required
                />
              </div>

              <div class="mb-3">
                 <label for="orderStatus" class="form-label">Order Status</label>
                 <select id="orderStatus" class="form-select" placeholder="Enter Order Status"
                 onChange={(e)=> {
                  setStatus(e.target.value);
                }}
                 >
                 <option selected disabled value="">Choose...</option>
                 <option value="active">Active</option>
                 <option value="process">Process</option>
                </select>
             </div>

              

              <div class="mb-3">
                <label for="OrderDescription" class="form-label">Description of Order</label>
                <input type="text" class="form-control" id="OrderDescription" placeholder="Enter Order description "
                pattern="[A-Z a-z 0-9.-]{0,150}"
                onChange={(e)=> {
                    setDescription(e.target.value);
                }}
                required
                />
              </div>

              <div class="mb-3">
                <label for="DateOfReceipt" class="form-label">Date of Receipt of Order</label>
                <input type="date" class="form-control" id="DateOfReceipt"
                onChange={(e)=> {
                    setDateOfReceipt(e.target.value);
                }}
                required
                />
              </div>

              <div class="mb-3">
                <label for="OrderDeliveryDate" class="form-label">Order Delivery Date</label>
                <input type="date" class="form-control" id="OrderDeliveryDate" 
                onChange={(e)=> {
                  setOrderDeliveryDate(e.target.value);
                }}
                required
                />
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
              </div>
           </form>

        </div>

    </div>
                            


                
    )

}