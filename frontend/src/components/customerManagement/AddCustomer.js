import React, {useState} from "react";
import axios from "axios";

export default function AddCustomer(){

  const [CustomerName, setName] = useState("");
  const [ContactNumber, setNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Address, setAddress] = useState("");
  const [Country, setCountry] = useState("");
  const [NIC, setNic] = useState("");

  function sendData(e){
    e.preventDefault();
    
    const newCustomer = {
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

     <div className="container">
        <form onSubmit = {sendData}>

            <div class="form-group">
              <div class="mb-3">
                <label for="customerName" class="form-label">Customer Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter Customer Name" 
                onChange={(e)=> {
                  setName(e.target.value);
                }}
                
                />
              </div>

              <div class="mb-3">
                <label for="countactNumber" class="form-label">Contact Number</label>
                <input type="number" class="form-control" id="contactNumber" placeholder="Enter Customer Contact Number"
                onChange={(e)=> {
                  setNumber(e.target.value);
                }}
                />
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="Email" placeholder="Enter Customer Email"
                onChange={(e)=> {
                  setEmail(e.target.value);
                }}
                />
              </div>

              <div class="mb-3">
                <label for="address" class="form-label">Address</label>
                <input type="text" class="form-control" id="address" placeholder="Enter Customer Address"
                onChange={(e)=> {
                  setAddress(e.target.value);
                }}
                />
              </div>

              <div class="mb-3">
                <label for="country" class="form-label">Country</label>
                <input type="text" class="form-control" id="country" placeholder="Enter Country"
                onChange={(e)=> {
                  setCountry(e.target.value);
                }}
                />
              </div>

              <div class="mb-3">
                <label for="nic" class="form-label">NIC Number</label>
                <input type="text" class="form-control" id="nic" placeholder="Enter Customer NIC Number"
                onChange={(e)=> {
                  setNic(e.target.value);
                }}
                />
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
              </div>
           </form>

        </div>
    )

}