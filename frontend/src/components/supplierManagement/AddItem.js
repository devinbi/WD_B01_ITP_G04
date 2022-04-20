import React, { useState } from "react"
import axios from 'axios';


//lalala

export default function AddItem() {

    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [cost, setCost] = useState("");
    const [adminid, setAdminId] = useState(""); 

    function sendData(e){
        e.preventDefault();
        
        const newItem = {
            name,
            quantity,
            price,
            cost,
            adminid

        }
        console.log("new objectttt",newItem)
        console.log("new")
        axios.post("http://localhost:8070/item/add", newItem).then(()=>{
          alert("Success");
          window.location.reload();
         
          console.log("new added")

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
                                            <i class="fa fa-home"></i>
                                            <span class="nav-text">Dashboard</span>
                                            <i class="fa fa-angle-right fa-2x"></i>
                                        </a>
                                    </li>
                                    <hr></hr>
                                    <li class="has-subnav">
                                        <a href="/addI">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                            <span class="nav-text">Add Item Details</span>
                                            <i class="fa fa-angle-right fa-2x"></i>
                                        </a>
                                    </li>
                                    <li class="has-subnav">
                                        <a href="/viewI">
                                        <i class="fa fa-file-text" aria-hidden="true"></i>
                                            <span class="nav-text">View Item Details</span>
                                            <i class="fa fa-angle-right fa-2x"></i>
                                        </a>
                                    </li>
                                    <hr></hr>
                                    <li class="has-subnav">
                                        <a href="/addS">
                                        <i class="fa fa-user-plus" aria-hidden="true"></i>
                                            <span class="nav-text">Add Supplier Detials</span>
                                            <i class="fa fa-angle-right fa-2x"></i>
                                        </a>
                                    </li>
                                    <li class="has-subnav">
                                        <a href="/viewS">
                                        <i class="fa fa-users" aria-hidden="true"></i>
                                            <span class="nav-text">View Supplier Details</span>
                                            <i class="fa fa-angle-right fa-2x"></i>
                                        </a>
                                    </li>
                                    <hr></hr>
                                    <li class="has-subnav">
                                        <a href="/report">
                                        <i class="fa fa-download" aria-hidden="true"></i>
                                            <span class="nav-text">Generate Report</span>
                                            <i class="fa fa-angle-right fa-2x"></i>
                                        </a>
                                    </li>
                                    <hr></hr>
                                    
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
                
                


                <div >
                    <div className="container">
                        <form onSubmit={sendData}>
                            <div className="form">
                                <label  for="itemName">Item Name</label>
                                <input type="text" className="form-control" id="itemName" placeholder="Enter Item Name"
                                onChange={(e)=>{

                                    setName(e.target.value);

                                }}/>

                            </div><br/>

                            <div className="form">
                                <label for="itemQuantity">Item Quantity</label>
                                <input pattern="[0-9]{10}" type="text" className="form-control" id="itemQuantity" placeholder="Enter Item Quantity"
                                onChange={(e)=>{

                                    setQuantity(e.target.value);

                                }}/>
                                
                            </div><br/>

                            <div className="form">
                                <label for="unitPrice">Unit Price</label>
                                <input type="text" className="form-control" id="unitPrice" placeholder="Unit Price"
                                onChange={(e)=>{

                                    setPrice(e.target.value);

                                }}/>

                            </div><br/>

                            <div className="form">
                                <label for="totalCost">Total Cost</label>
                                <input type="text" className="form-control" id="totalCost" placeholder="Total Cost"
                                onChange={(e)=>{

                                    setCost(e.target.value);

                                }}/>

                            </div><br/>

                            <div className="form">
                                <label for="adminId">Admin ID</label>
                                <input type="text" className="form-control" id="adminId" placeholder="Enter Admin ID"
                                onChange={(e)=>{

                                    setAdminId(e.target.value);

                                }}/>

                            </div><br/>
                            
                            
                            <input type="submit" value="confirm"/>
                        </form>
                    </div>
                </div>


        </div>
    )

}

