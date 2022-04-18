import React,{useState} from 'react'
import axios from 'axios' ; 

export default function AddProduct(){

    const [ItemName, setItemName] = useState("");
    const [Quantity, setQuantity] = useState("");
    const [Material, setMaterial] = useState("");
    const [Description, setDescription] = useState("");

    function sendData(e){
        e.preventDefault();  
        
        const newManufacturedItem ={
            ItemName,
            Quantity,
            Material,
            Description
        }

        axios.post("http://localhost:8070/ManufacturedItem/add",newManufacturedItem).then(()=>{
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

                <div className="form-group">
                    <label for="Material" className="form-label">Material</label>
                    <input type="text" className="form-control" id="Material" placeholder="Enter Material"
                    onChange={(e)=>{

                        setMaterial(e.target.value);

                    }}/>
                </div>

                <div className="form-group">
                    <label for="Description" className="form-label">Description</label>
                    <input type="text" className="form-control" id="Description" placeholder="Enter Colur, Size of the Product"
                    onChange={(e)=>{

                        setDescription(e.target.value);

                    }}/>
                </div>
            
                <button type="submit" className="btn btn-primary">Add</button>
                </form>
        </div>
    )
}