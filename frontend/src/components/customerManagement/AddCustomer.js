import React, {userState} from "react";

export default function AddCustomer(){

    return(

     <div className="container">
            <form>

<div class="form-group">
  <div class="mb-3">
    <label for="customerName" class="form-label">Customer Name</label>
    <input type="text" class="form-control" id="name" placeholder="Enter Customer Name"/>
  </div>

  <div class="mb-3">
    <label for="countactNumber" class="form-label">Contact Number</label>
    <input type="number" class="form-control" id="contactNumber" placeholder="Enter Customer Contact Number"/>
  </div>

  <div class="mb-3">
    <label for="Email" class="form-label">Email</label>
    <input type="email" class="form-control" id="Email" placeholder="Enter Customer Email"/>
  </div>

  <div class="mb-3">
    <label for="Address" class="form-label">Address</label>
    <input type="text" class="form-control" id="Address" placeholder="Enter Customer Address"/>
  </div>

  <div class="mb-3">
    <label for="Country" class="form-label">Country</label>
    <input type="text" class="form-control" id="country" placeholder="Enter Country"/>
  </div>

  <div class="mb-3">
    <label for="nic" class="form-label">NIC Number</label>
    <input type="text" class="form-control" id="nic" placeholder="Enter Customer NIC Number"/>
  </div>

  <button type="submit" class="btn btn-primary">Submit</button>
  </div>
           </form>

        </div>
    )

}