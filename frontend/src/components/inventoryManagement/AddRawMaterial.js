import React,{useState , useEffect} from 'react'
import axios from 'axios';
import MaterialTable from 'material-table';


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

const [item, setItem] = useState([]);

useEffect(()=>{
        
        
    axios.get('http://localhost:8070/ViewSuppliedItem/')
    .then((res) =>{
        console.log(res.data);
        setItem(res.data);
    }).catch((err)=>{
        alert(err.msg);

    })

},[])
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

                        

                        <li class="has-subnav">
                            <a href="/">
                            <i class="fa fa-cubes fa-2x" aria-hidden="true"></i>
                                <span class="nav-text">All Raw Materials</span>
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

                        

                        <li class="has-subnav">
                            <a href="/fetch">
                            <i class="fa fa-shirt"></i>
                                <span class="nav-text">All Product Items</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        
                        <hr></hr>

                        <li class="has-subnav">
                            <a href="/Sout">
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
            <center><h2>Add Raw-Material Details</h2></center>
            <form onSubmit={sendData}>

            <div className="form-group">
                <label for="ItemId" className="form-label">Item Id</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="ItemId" 
                    placeholder="RXXXX"
				    pattern="[R][0-9]{4}" 
                    required
                    onChange={(e)=>{

                        setItemId(e.target.value);

                }}/>
            </div>

            <div className="form-group">
                <label for="ItemName" className="form-label">Item Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="ItemName" 
                    placeholder="Enter Item Name" 
                    required
                    onChange={(e)=>{

                        setItemName(e.target.value);

                }}/>
            </div>

            <div className="form-group">
                <label for="Quantity" className="form-label">Quantity</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="Quantity" 
                    placeholder="Enter Number of Items" 
                    required
                    onChange={(e)=>{

                        setQuantity(e.target.value);

                }}/>
            </div>

            <div className="select">
                <label for="ItemType" className="form-label">Item Type</label>
                <select 
                    for="ItemType" 
                    className="form-select" 
                    id="ItemType" 
                    required
                    onChange={(e)=>{

                        setItemType(e.target.value);

                }}>
                    <option selected disabled value="">Select Item Type</option>
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

    <br/><br/>

    {/* <div className="container">
         <div class="container-fluid">
            <MaterialTable  
                style={{background:"#E3ECFF"}}
                title="Supplied Items Details"
                columns={[
                                        
                    { title: "Item Name", field: "itemName", type: "string" },
                    { title: "Quantity", field: "itemQuantity", type: "string" },

                ]}

                data={item}
                options={{

                    sorting: true,
                    search:false,
                    filtering : true,
                    actionsColumnIndex: -1
                                    
                }}
             />

        </div>
    </div> */}

    </div>
    )
}
