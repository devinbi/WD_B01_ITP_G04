import React,{useState} from "react";

export default function addincome(){


    return(
<div>
 <form>
  <div class="mb-3">
    <label for="orderid1" class="form-label">Order ID</label>
    <input type="text" class="form-control" id="orderid1" placeholder="order id" />
    
  </div>
  <div class="mb-3">
    <label for="ordertype" class="form-label">Order Type</label>
    <input type="text" class="form-control" id="ordertype" placeholder="order type" />
    
  </div>
  <div class="mb-3">
    <label for="unitprice" class="form-label">unit price</label>
    <input type="text" class="form-control" id="unitprice" placeholder="unit price" />
    
  </div>
  <div class="mb-3">
    <label for="total" class="form-label">total amount</label>
    <input type="text" class="form-control" id="total" placeholder="total amount" />
    
  </div>
   <button type="submit" class="btn btn-primary">Submit</button>
   <button type="submit" class="btn btn-primary">calculate</button>
 </form>
</div>


    )
}