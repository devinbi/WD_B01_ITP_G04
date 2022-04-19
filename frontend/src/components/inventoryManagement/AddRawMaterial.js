import React,{useState} from 'react'
import axios from 'axios';

export default function AddRawMaterial(){

    const [ItemId, setItemId] = useState("");
    const [ItemName, setItemName] = useState("");
    const [Quantity, setQuantity] = useState("");
    const [ItemType, setItemType] = useState("");

   function sendData(e){
    e.preventDefault();  
    
    const newRawMaterial ={
        ItemId,
        ItemName,
        Quantity,
        ItemType
        
    }

    axios.post("http://localhost:8070/RawMaterial/adding",newRawMaterial).then(()=>{
        alert("Item Added")
        window.location.reload();
    }).catch((err)=>{
        alert(err)
    })
}
    return(

        <div className='container'>
        <form onSubmit={sendData}>

            <div className="form-group">
                <label for="ItemId" className="form-label">Item Id</label>
                <input type="text" className="form-control" id="ItemId" placeholder="Enter Item Id" 
                onChange={(e)=>{

                    setItemId(e.target.value);

                }}/>
            </div>

            <div className="form-group">
                <label for="ItemName" className="form-label">Item Name</label>
                <input type="text" className="form-control" id="ItemName" placeholder="Enter Item Name" 
                onChange={(e)=>{

                    setItemName(e.target.value);

                }}/>
            </div>

            <div className="form-group">
                <label for="Quantity" className="form-label">Quantity</label>
                <input type="text" className="form-control" id="Quantity" placeholder="Enter Number of Items"
                onChange={(e)=>{

                    setQuantity(e.target.value);

                }}/>
            </div>

            <div className="select">
                <label for="ItemType" className="form-label">Item Type</label>
                <select for="ItemType" className="form-select" id="ItemType" aria-label="Default select example"
                onChange={(e)=>{

                    setItemType(e.target.value);

                }}>
                    <option selected>Select Item Type</option>
                    <option value="Fabric">Fabric</option>
                    <option value="Trims">Trims</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Fabric Paints">Fabric Paints</option>
                </select>
            </div>
        
            <button type="submit" className="btn btn-primary">Add</button>
            </form>
    </div>
    )
}
