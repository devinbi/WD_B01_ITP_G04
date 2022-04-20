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

        <div>
        <div class="component-body">
        
        <div class="area">
                <nav class="main-menu bg-primary">
                    <ul>
                        <li>
                            <a href="/#">
                                <i class="fa fa-home"></i>
                                <span class="nav-text">Dashboard</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>

                        <hr></hr>

                        <li class="has-subnav">
                            <a href="/adding">
                                <i class="fa fa-plus-circle"></i>
                                <span class="nav-text">Add Raw Materials</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>

                        <hr></hr>

                        <li class="has-subnav">
                            <a href="/">
                            <i class="fa fa-cubes fa-2x" aria-hidden="true"></i>
                                <span class="nav-text">Manage Raw Materials</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>

                        <hr></hr>

                        <li class="has-subnav">
                            <a href="/add">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text">Add Product Item</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>

                        <hr></hr>

                        <li class="has-subnav">
                            <a href="/fetch">
                            <i class="fa fa-shirt"></i>
                                <span class="nav-text">Manage Product Items</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        
                        <hr></hr>

                        <li class="has-subnav">
                            <a href="/#">
                            <i class="fa fa-box-open"></i>
                                <span class="nav-text">Out of Stock</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>

                        <hr></hr>

                        <li class="has-subnav">
                            <a href="/view">
                                <i class="fa fa-download" aria-hidden="true"></i>
                                <span class="nav-text">Inventory Report</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>

                        <hr></hr>
                        
                    </ul>

                    <ul class="logout">
                        <li>
                            <a href="#">
                                <i class="fa fa-power-off"></i>
                                <span class="nav-text">Logout</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>

        <div className='container'>
            <form onSubmit={sendData}>

            <div className="form-group">
                <label for="ItemId" className="form-label">Item Id</label>
                <input type="text" className="form-control" id="ItemId" placeholder="RXXXX"
				pattern="[R][0-9]{4}"
 
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
        
            <br></br>
            <button type="submit" className="btn btn-primary">Add</button>
            </form>
    </div>
    </div>
    )
}
