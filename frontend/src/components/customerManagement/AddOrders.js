import React, {useState} from "react";
import axios from "axios";

export default function AddOrders(){

  const [TypeOfOrder, setType] = useState("");
  const [UnitPrice, setPrice] = useState("");
  const [NoOfUnit, setUnits] = useState("");
  const [OrderStatus, setStatus] = useState("");
  const [OrderDescription, setDescription] = useState("");
  const [DateOfReceipt, setDateOfReceipt] = useState("");
  const [OrderDeliveryDate, setOrderDeliveryDate] = useState("");

  

  function sendData(e){
    e.preventDefault();
    
    const newOrder = {
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

     <div className="container">
        <form onSubmit = {sendData}>

            <div class="form-group">
              <div class="mb-3">
                <label for="typeOfOrder" class="form-label">Type of Order</label>
                <input type="text" class="form-control" id="TypeOfOrder" placeholder="Enter Order Type" 
                onChange={(e)=> {
                    setType(e.target.value);
                }}
                
                />
              </div>

              <div class="mb-3">
                <label for="unitPrice" class="form-label">Unit Price</label>
                <input type="number" class="form-control" id="unitPrice" placeholder="Enter Unit Price"
                onChange={(e)=> {
                    setPrice(e.target.value);
                }}
                />
              </div>

              <div class="mb-3">
                <label for="noOfUnit" class="form-label">Number of Units</label>
                <input type="number" class="form-control" id="NoOfUnit" placeholder="Enter Number of Units"
                onChange={(e)=> {
                    setUnits(e.target.value);
                }}
                />
              </div>

              <div class="mb-3">
                 <label for="orderStatus" class="form-label">Order Status</label>
                 <select id="orderStatus" class="form-select" placeholder="Enter Order Status"
                 onChange={(e)=> {
                  setStatus(e.target.value);
                }}
                 >
                 <option selected>Choose...</option>
                 <option>Active</option>
                 <option>Process</option>
                </select>
             </div>

              

              <div class="mb-3">
                <label for="OrderDescription" class="form-label">Description of Order</label>
                <input type="text" class="form-control" id="OrderDescription" placeholder="Enter Order description "
                onChange={(e)=> {
                    setDescription(e.target.value);
                }}
                />
              </div>

              <div class="mb-3">
                <label for="DateOfReceipt" class="form-label">Date of Receipt of Order</label>
                <input type="date" class="form-control" id="DateOfReceipt" placeholder="Enter Date of Receipt of Order"
                onChange={(e)=> {
                    setDateOfReceipt(e.target.value);
                }}
                />
              </div>

              <div class="mb-3">
                <label for="OrderDeliveryDate" class="form-label">Order Delivery Date</label>
                <input type="date" class="form-control" id="OrderDeliveryDate" placeholder="Enter Order Delivery Date"
                onChange={(e)=> {
                    setOrderDeliveryDate(e.target.value);
                }}
                />
              </div>

              <button type="submit" class="btn btn-primary">Submit</button>
              </div>
           </form>

        </div>
    )

}