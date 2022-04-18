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

        <div className="container">
            <form onSubmit={sendData}>
                <div className="form">
                    <label for="itemName">Item Name</label>
                    <input type="text" className="form-control" id="itemName" placeholder="Enter Item Name"
                    onChange={(e)=>{

                        setName(e.target.value);

                    }}/>

                </div><br/>

                <div className="form">
                    <label for="itemQuantity">Item Quantity</label>
                    <input type="text" className="form-control" id="itemQuantity" placeholder="Enter Item Quantity"
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
    )

}

