import React,{useState} from 'react'
import axios from 'axios' ; 

export default function AddProduct(){

    // use states for product item details
    const [ItemId, setItemId] = useState("");
    const [ItemName, setItemName] = useState("");
    const [Quantity, setQuantity] = useState("");
    const [Material, setMaterial] = useState("");
    const [Colour, setColour] = useState("");
    const [Size, setSize] = useState("");


    function sendData(e){
        e.preventDefault();  
        
        const newManufacturedItem ={

            ItemId,
            ItemName,
            Quantity,
            Material,
            Colour,
            Size

        }

        axios.post("http://localhost:8070/ManufacturedItem/add",newManufacturedItem).then(()=>{
            alert("Item Added")
            window.location.reload();
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
                            <a href="/#">
                                <i class="fa fa-power-off"></i>
                                <span class="nav-text">Logout</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            </div>
           

        
    <div className="container pt-2">
        <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
        {/* add product details form */}
        <h1 className="text-center pt-3 text-secondary">Add Product Details</h1>
            <form onSubmit={sendData}>
                
            <div className="form-group">
                    <label for="ItemId" className="form-label">Item ID</label>
                    <input 
                        type="text" 
                        className="form-control"
                        id="ItemId" 
                        placeholder="PXXXX"
                        pattern="[P][0-9]{4}" //validation for item id
                        title='PXXXX'
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

                <div className="form-group">
                    <label for="Material" className="form-label">Material</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="Material" 
                        placeholder="Enter Material" 
                        pattern="[A-Z a-z]{0,10}" //validation for Material 
                        title='Enter valid material name'
                        required
                        onChange={(e)=>{

                            setMaterial(e.target.value); //assign value for Material

                    }}/>
                </div>

                <div className="form-group">
                    <label for="Colour" className="form-label">Colour</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="Colour" 
                        placeholder="Enter Colour" 
                        pattern="[A-Z a-z]{0,10}" //validation for Colour
                        title='enter valid colour name'
                        required
                        onChange={(e)=>{

                            setColour(e.target.value); //assign value for Colour

                    }}/>
                </div>

                <div className="select">
                <label for="Size" className="form-label">Item Size</label>
                <select 
                    for="Size" 
                    className="form-select" 
                    id="Size" 
                    required
                    onChange={(e)=>{

                        setSize(e.target.value); //assign value for Colour

                }}>
                    <option selected disabled value="">Select Size</option>
                    <option value="S">Small</option>
                    <option value="L">Large</option>
                    <option value="XL">XL</option>
                    <option value="2XL">2XL</option>
                    <option value="3XL">3XL</option>
                    <option value="4XL">4XL</option>


                </select>
            </div>
            
                <br></br>
                <button type="submit" className="btn btn-primary">Add</button>
                </form>
        </div>
        </div>
        </div>
        </div>
    )

}