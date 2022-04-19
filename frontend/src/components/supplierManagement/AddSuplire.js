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

        <div className="container">
            <form onSubmit={sendData}>
                <div className="form">
                    <label for="itemName">Supplier Name</label>
                    <input type="text" className="form-control" id="itemName" placeholder="Enter Item Name"
                    onChange={(e)=>{

                        setName(e.target.value);

                    }}/>

                </div><br/>

                <div className="form">
                    <label for="itemQuantity">E-mail</label>
                    <input type="text" className="form-control" id="itemQuantity" placeholder="Enter Item Quantity"
                    onChange={(e)=>{

                        setEmail(e.target.value);

                    }}/>
                    
                </div><br/>

                <div className="form">
                    <label for="unitPrice">Phone Number</label>
                    <input type="text" className="form-control" id="unitPrice" placeholder="Unit Price"
                    onChange={(e)=>{

                        setPhonrNumber(e.target.value);

                    }}/>

                </div><br/>

                <div className="form">
                    <label for="totalCost">Nic Number</label>
                    <input type="text" className="form-control" id="totalCost" placeholder="Total Cost"
                    onChange={(e)=>{

                        setNic(e.target.value);

                    }}/>

                </div><br/>

                <div className="form">
                    <label for="adminId">Address</label>
                    <input type="text" className="form-control" id="adminId" placeholder="Enter Admin ID"
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
    )

}

