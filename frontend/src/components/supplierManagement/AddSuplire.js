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

            <div className="container">
                <form onSubmit={sendData}>
                    <div className="form">
                        <label for="name">Supplier Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter Supplier Name"
                        onChange={(e)=>{

                            setName(e.target.value);

                        }}/>

                    </div><br/>

                    <div className="form">
                        <label for="email">E-mail</label>
                        <input type="text" className="form-control" id="email" placeholder="Enter E-mail"
                        onChange={(e)=>{

                            setEmail(e.target.value);

                        }}/>
                        
                    </div><br/>

                    <div className="form">
                        <label for="phoneNumber">Phone Number</label>
                        <input pattern="[0-9]{10}" title="Invalid Tel-number" type="text" className="form-control" id="phoneNumber" placeholder="Enter Phone Number"
                        onChange={(e)=>{

                            setPhonrNumber(e.target.value);

                        }}/>

                    </div><br/>

                    <div className="form">
                        <label for="nic">NIC Number</label>
                        <input pattern="[0-9]{9}[V]{1}" type="text" className="form-control" id="nic" placeholder="Enter Nic Number"
                        onChange={(e)=>{

                            setNic(e.target.value);

                        }}/>

                    </div><br/>

                    <div className="form">
                        <label for="address">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="Enter Address"
                        onChange={(e)=>{

                            setAddress(e.target.value);

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
    )

}

