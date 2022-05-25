import React, { useState } from "react"
import axios from 'axios';

//lalala

export default function AddSuplire() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhonrNumber] = useState("");
    const [nic, setNic] = useState("");
    const [address, setAddress] = useState(""); 
    const [adminId, setAdminId] = useState(""); 

    function sendData(e){
        e.preventDefault();
        
        const newSupplier = {
            name,
            email,
            phoneNumber,
            nic,
            address,
            adminId

        }
        console.log("new objectttt",newSupplier)
        console.log("new")
        axios.post("http://localhost:8070/supplier/add", newSupplier).then(()=>{
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
                                        <a href="/addItem">
                                        <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                            <span class="nav-text">Add Item Details</span>
                                            <i class="fa fa-angle-right fa-2x"></i>
                                        </a>
                                    </li>
                                    <li class="has-subnav">
                                        <a href="/viewItem">
                                        <i class="fa fa-file-text" aria-hidden="true"></i>
                                            <span class="nav-text">View Item Details</span>
                                            <i class="fa fa-angle-right fa-2x"></i>
                                        </a>
                                    </li>
                                    <hr></hr>
                                    <li class="has-subnav">
                                        <a href="/addSupplier">
                                        <i class="fa fa-user-plus" aria-hidden="true"></i>
                                            <span class="nav-text">Add Supplier Detials</span>
                                            <i class="fa fa-angle-right fa-2x"></i>
                                        </a>
                                    </li>
                                    <li class="has-subnav">
                                        <a href="/viewSupplier">
                                        <i class="fa fa-users" aria-hidden="true"></i>
                                            <span class="nav-text">View Supplier Details</span>
                                            <i class="fa fa-angle-right fa-2x"></i>
                                        </a>
                                    </li>
                                    <hr></hr>
                                    <li class="has-subnav">
                                        <a href="/reportSupPlierManage">
                                        <i class="fa fa-download" aria-hidden="true"></i>
                                            <span class="nav-text">Generate Report</span>
                                            <i class="fa fa-angle-right fa-2x"></i>
                                        </a>
                                    </li>
                                    <hr></hr>
                                    <li class="has-subnav">
                                        <a href="/reportOutOfStock">
                                        <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                            <span class="nav-text">Out Of Report Report</span>
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

        <div className="container pt-2">
            <div className="row justify-content-sm-center pt-5">
                <div className="col-sm-6 shadow round pb-3">
                    <h1 className="text-center pt-3 text-secondary">Add Supplier Details</h1>
                        <form onSubmit={sendData}>
                            <div className="form">
                                <label for="name">Supplier Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Supplier Name"
                                //Validation Part
                                    pattern="[A-Z a-z]{0,20}"
                                    title="Name max length should be 20"
                                onChange={(e)=>{

                                    setName(e.target.value);

                                }}/>

                            </div><br/>

                            <div className="form">
                                <label for="email">E-mail</label>
                                <input type="text" className="form-control" id="email" placeholder="Enter E-mail"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    title="Email pattern should be abcd@gmail.com"
                                onChange={(e)=>{

                                    setEmail(e.target.value);

                                }}/>
                                
                            </div><br/>

                            <div className="form">
                                <label for="phoneNumber">Phone Number</label>
                                <input type="text" className="form-control" id="phoneNumber" placeholder="Enter Phone Number"
                                    pattern="[0-9]{10}"
                                    title="Phone Number pattern should be 0779988123"
                                onChange={(e)=>{

                                    setPhonrNumber(e.target.value);

                                }}/>

                            </div><br/>

                            <div className="form">
                                <label for="nic">NIC Number</label>
                                <input type="text" className="form-control" id="nic" placeholder="Enter Nic Number"
                                    pattern="[0-9]{9}[V]{1}"
                                    title="NIC Number pattern should be 111222333V"
                                onChange={(e)=>{

                                    setNic(e.target.value);

                                }}/>

                            </div><br/>

                            <div className="form">
                                <label for="address">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="Enter Address"
                                //Validation Part
                                    pattern="[A-Z a-z]{0,50}"
                                    title="Name max length should be 50"
                                
                                onChange={(e)=>{
                                   
                                    setAddress(e.target.value);

                                }}/>

                            </div><br/>

                            {/*  */}
                            <div className="select">
                                <label for="adminId" className="form-label">Admin ID</label>
                                    <select 
                                        
                                        className="form-select" 
                                        id="adminId" 
                                        required
                                        onChange={(e)=>{

                                            setAdminId(e.target.value);

                                    }}>
                                        <option selected disabled value="">Select Admin</option>
                                        <option value="Admin 01">Admin 01</option>
                                        <option value="Admin 02">Admin 02</option>
                                        <option value="Admin 03">Admin 03</option>

                                    </select>
                            </div>
                            <br/>

                            {/*  */}



                            {/* <div className="form">
                                <label for="adminId">Admin ID</label>
                                <input type="text" className="form-control" id="adminId" placeholder="Enter Admin ID"
                                onChange={(e)=>{

                                    setAdminId(e.target.value);

                                }}/>

                            </div> */}
                            <br/>
                            
                            <input type="submit" value="confirm"/>
                        </form>
                </div>
            </div>
        </div>

    </div>
    )

}

