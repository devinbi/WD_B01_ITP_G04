import React, {useState} from "react";
import axios from "axios";

export default function AddCustomer(){
//set customer details
  const [CustomerId, setId] = useState("");
  const [CustomerName, setName] = useState("");
  const [ContactNumber, setNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Country, setCountry] = useState("");
  const [NIC, setNic] = useState("");

  //add  details to the database using axios
  function sendData(e){
    e.preventDefault();
    
    const newCustomer = {
      CustomerId,
      CustomerName,
      ContactNumber,
      Email,
      Address,
      Country,
      NIC 

    }
    console.log("new customer",newCustomer);
    axios.post("http://localhost:8070/customer/add", newCustomer).then((response)=>{
      console.log(response)
      alert("Customer Added");
      }).catch((err)=>{
      alert(err)
    })
}


    return(

      <div>
         <div class="component-body">
        {/* side navigation bar */}
        <div class="area">
                <nav class="main-menu bg-primary">
                    <ul>
                        <li>
                            <a href="/AllT">
                                <i class="fa fa-home "></i>
                                <span class="nav-text">Dashboard</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/addCustomer">
                                <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text">Add Customer Details </span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/viewCus">
                                <i class="fa fa-users" aria-hidden="true"></i>
                                <span class="nav-text">View Customer List</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/addOrder">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text"> Add Order Details</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            <a href="/viewOrder">
                            <i class="fa fa-cart-flatbed"></i>
                                <span class="nav-text"> View Order Details</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        
                        <li class="has-subnav">
                            <a href="/ReportOc">
                            <i class="fa fa-download" aria-hidden="true"></i>
                                <span class="nav-text">Order Report</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                    </ul>
                    <hr></hr>
                    <ul class="logout">
                        <li>
                            <a href="/">
                                <i class="fa fa-power-off "></i>
                                <span class="nav-text">Logout</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>
        
{/* Add customer details to the form */}
          <div className="container mb-2">
        <div className="row justify-content-sm-center pt-5">
      <div className="col-sm-6 shadow round pb-3">
      <h1 className="text-center pt-3 text-secondary">Customer Details</h1>

        <form onSubmit = {sendData}>

        <div class="mb-3">
      
                <label for="CustomerId" class="form-label">Customer ID</label>
                <input type="text" class="form-control" id="CustomerId" placeholder="Enter Customer ID Number"
                //validation for customer id
                pattern="[c]{1}[0-9]{4}"
                onChange={(e)=> {
                  setId(e.target.value);// asing values
                }}
                required
                />
              </div>

            <div class="form-group">
              <div class="mb-3">
                <label for="customerName" class="form-label">Customer Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter Customer Name"
                //validation for customer name
                pattern="[A-Z a-z]{0,50}"  
                onChange={(e)=> {
                  setName(e.target.value);// asing values
                }}
                required
                />
              </div>

              <div class="mb-3">
                <label for="countactNumber" class="form-label">Contact Number</label>
                <input type="number" class="form-control" id="contactNumber" placeholder="Enter Customer Contact Number"
                //validation for customer contact number
                  pattern="[0-9]{10}"
                  onChange={(e)=> {
                  setNumber(e.target.value);// asing values
                }}
                required
                />
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="Email" placeholder="Enter Customer Email"
                //validation for customer email
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onChange={(e)=> {
                  setEmail(e.target.value);// asing values
                }}
                required
                />
              </div>

              <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" placeholder="Enter Customer Address"
                //validation for customer address
                pattern="[A-Z a-z 0-9]{0,100}"
                onChange={(e)=> {
                  setAddress(e.target.value);// asing values
                }}
                required
                />
              </div>

              <div class="mb-3">
                <label for="country" class="form-label">Country</label>
                <input type="text" class="form-control" id="country" placeholder="Enter Country"
                //validation for customer country
                pattern="[A-Z a-z]{0,20}"
                onChange={(e)=> {
                  setCountry(e.target.value);// asing values
                }}
                required
                />
              </div>

              <div class="mb-3">
                <label for="nic" class="form-label">NIC Number</label>
                <input type="text" class="form-control" id="nic" placeholder="Enter Customer NIC Number"
                //validation for customer nic
                pattern="[0-9]{9}[V]{1}"
                  onChange={(e)=> {
                  setNic(e.target.value);// asing values
                }}
                required
                />
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
              </div>
           </form>

        </div>
        </div>
        </div>
        </div>
    )

}