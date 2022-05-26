import React,{useState , useEffect} from 'react'
import axios from 'axios';
import MaterialTable from 'material-table';


export default function AddRawMaterial(){

    // use states for raw material details
    const [ItemId, setItemId] = useState("");
    const [ItemName, setItemName] = useState("");
    const [Quantity, setQuantity] = useState("");
    const [ItemType, setItemType] = useState("");
    const [item, setItem] = useState([]);

    useEffect(()=>{
        
        
        axios.get('http://localhost:8070/item/')
        .then((res) =>{
            console.log(res.data);
            setItem(res.data);
        }).catch((err)=>{
            alert(err.msg);
    
        })
    
    },[])

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
        window.location.reload(); //refresh the page
    }).catch((err)=>{
        alert(err)
    })
}




return(

    <div>
        <div class="component-body">
         {/* navigation bar for inventory management */}
        <div class="area">
                <nav class="main-menu bg-primary">
                    <ul>
                        <li>
                            {/* navigation path to Dashboard */}
                            <a href="/#">
                                <i class="fa fa-home"></i>
                                <span class="nav-text">Dashboard</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>

                        <hr></hr>

                        <li class="has-subnav">
                            {/* navigation path to Add Raw Materials */}
                            <a href="/adding">
                                <i class="fa fa-plus-circle"></i>
                                <span class="nav-text">Add Raw Materials</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>

                        

                        <li class="has-subnav">
                            {/* navigation path to All Raw Materials */}
                            <a href="/allR">
                            <i class="fa fa-cubes" aria-hidden="true"></i>
                                <span class="nav-text">All Raw Materials</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>

                        <hr></hr>

                        <li class="has-subnav">
                            {/* navigation path to Add Product Items */}
                            <a href="/add">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text">Add Product Item</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>

                        

                        <li class="has-subnav">
                            {/* navigation path to All Product Items */}
                            <a href="/fetch">
                            <i class="fa fa-shirt"></i>
                                <span class="nav-text">All Product Items</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        
                        <hr></hr>

                        <li class="has-subnav">
                            {/* navigation path to Out of Stock */}
                            <a href="/Sout">
                            <i class="fa fa-box-open"></i>
                                <span class="nav-text">Out of Stock</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>

                        <hr></hr>

                        <li class="has-subnav">
                            {/* navigation path to inventory report */}
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
                            {/* navigation path to Logout */}
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

        <div>
        <div className="container pt-2"> 
        <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
            {/* add raw material details form */}
        <h1 className="text-center pt-3 text-secondary">Add Raw-Material Details</h1>
            
            <form onSubmit={sendData}>

            <div className="form-group">
                <label for="ItemId" className="form-label">Item Id</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="ItemId" 
                    placeholder="RXXXX"
				    pattern="[R][0-9]{4}" //validation for item id
                    title="RXXXX"
                    required
                    onChange={(e)=>{

                        setItemId(e.target.value); //assign values for item id

                }}/>
            </div>

            <div className="form-group">
                <label for="ItemName" className="form-label">Item Name</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="ItemName" 
                    placeholder="Enter Item Name" 
                    pattern="[A-Z a-z ()]{0,20}" //validation for item name
                    required
                    onChange={(e)=>{

                        setItemName(e.target.value); //assign value for item name

                }}/>
            </div>

            <div className="form-group">
                <label for="Quantity" className="form-label">Quantity</label>
                <input 
                    type="number" 
                    min={0} //minimum input value is 0
                    className="form-control" 
                    id="Quantity" 
                    placeholder="Enter Number of Items" 
                    title='Minimum quantity you can enter is 0'
                    required
                    onChange={(e)=>{

                        setQuantity(e.target.value); //assign value for quantity

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

                        setItemType(e.target.value); //assign value for item type

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
        </div>     
        </div>

    <br/><br/>

    <center>
        {/* supplied item table view from supplier management */}
        <div className="container">
            <div class="container-fluid">
                <MaterialTable  
                    style={{background:"#E3ECFF", width: "54%" }}
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
        </div>
    </center>
    </div>
    </div>
    )
}
