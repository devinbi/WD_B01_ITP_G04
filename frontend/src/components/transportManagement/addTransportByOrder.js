import React,{useEffect,useState} from "react";
import axios from "axios";
import MaterialTable from 'material-table';
import { Modal } from "react-bootstrap";
import OrderToTransportModal from "./modal/OrderToTransportModal";



const addTransportByOrder = () => {

    const HOST = "http://localhost:8070/OrderDes/"

    const [addOToTransport,setaddOToTransport]=useState()

    // const [descriptionSet,setdescriptionSet]=useState("")


    const [ODes, setOdes] = useState([]);
    console.log(ODes,"<<<<<<<<<<<<<<<<<<<");
    console.log("updatedata>>",addOToTransport)

    const [show, setShow] = useState(false);

    // const setDescriptionDetails=(value)=>{
    //     console.log("value>>",value)
    //     let des = value.OrderDescription;
    //     let qty = value.NoOfUnit;
        
    //     const descriptionData = "This order is :"+{des}+"no of units"+{qty};
    //     setdescriptionSet(descriptionData);
    //     console.log("dtaaaa>>>",descriptionData)
    // }

    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [Transport_ID,setTid] = useState("");
    const [Vehicle_Registration_No,setVid] = useState("");
    const [Date,setDate] = useState("");
    const [Driver_Name,setName] = useState("");
    const [Description,setDescription] = useState("");
    const [Delivery_Status,setStatus] = useState("");
    // console.log("description",description)
   


    useEffect(() => {
       // setDescriptionDetails();

        axios.get(HOST + "/viewO")
            .then((res) => {

                console.log('first>>', res)
                setOdes(res.data);
                
                console.log('Data has been received');
            }).catch(() => {
                alert('Error while fetching data')
            })

    }, []);



  return (
    <div>

   <div class="component-body">
        
         {/* navigation bar for transport management */}
         <div class="area">
                <nav class="main-menu bg-primary">
                    <ul>
                        <li>
                            {/* navigation path to Dashboard */}
                            <a href="/dashT"> 
                                <i class="fa fa-home "></i>
                                <span class="nav-text">Dashboard</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                             {/* navigation path to add vehicle page */}
                            <a href="/vadd">
                                <i class="fa fa-plus-circle"></i>
                                <span class="nav-text">Add Vehicle</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <li class="has-subnav">
                            {/* navigation path to view vehicle page */}
                            <a href="/vview">
                             <i class="fa fa-truck " ></i>
                                <span class="nav-text">Vehicle List</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li>
                            <a href="/viewO">
                            {/* navigation path to add transport by order page */}
                                <i class="fa fa-truck-arrow-right "></i>
                                <span class="nav-text">Order Details</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            {/* navigation path to add transport page */}
                            <a href="/Tadd">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>
                                <span class="nav-text">Add Transort Detials</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <li class="has-subnav">
                            {/* navigation path to view transport page */}
                            <a href="/Tview">
                            <i class="fa fa-file-text-o" aria-hidden="true"></i>
                                <span class="nav-text">Transport Details</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            {/* navigation path to add maintenance page */}
                            <a href="/madd">
                            <i class="fa fa-plus-circle" aria-hidden="true"></i>

                                <span class="nav-text">Add Maintenance Details</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <li class="has-subnav">
                            {/* navigation path to view maintenance page */}
                            <a href="/mview">
                                <i class="fa fa-wrench "></i>
                                <span class="nav-text">View Maintenance</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            {/* navigation path to view Drivers page */}
                            <a href="/viewD">
                                <i class="fa fa-users" aria-hidden="true"></i>
                                <span class="nav-text">Driver Details</span>
                                <i class="fa fa-angle-right"></i>
                            </a>
                        </li>
                        <hr></hr>
                        <li class="has-subnav">
                            {/* navigation path to Report page */}
                            <a href="/rview">
                            <i class="fa fa-download" aria-hidden="true"></i>
                                <span class="nav-text">Transport Reports</span>
                                <i class="fa fa-angle-right "></i>
                            </a>
                        </li>
                    </ul>

                  
                </nav>
            </div>
            </div>
        
    <div className="container">
    <div className="container-fluid mt-5 ">
   
                <MaterialTable  style={{background:"#E3ECFF"}}
                    title=" Order  Details"
                    

                    columns={[
                        { title: "Type of Order", field: "TypeOfOrder", type: "string" },
                        { title: "Number Of Units", field: "NoOfUnit", type: "number" },
                        { title: "Order Status", field: "OrderStatus", type: "string" },
                        { title: "Order Description", field: "OrderDescription", type: "string" },
                        
                    ]}

                    data={ODes}
                    options={{
                        sorting: true,
                        actionsColumnIndex: -1,

                    }}

                    actions={[
                        {
                            icon: () => <button class="btn btn-sm  btn-outline-success" >Add to Transport</button>,
                            onClick: (event, rowData) => {
                              
                                setaddOToTransport(rowData); //setOrderDetailswithID
                                setShow(true);
                                 //setStatetrue
                            }
                        },

                    ]}

                    
                />

               

           
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <OrderToTransportModal data={addOToTransport} cl={()=> setShow(false)}/>
          
          </Modal.Body>
      </Modal>

            </div>
   </div>


    </div>
  )
}

export default addTransportByOrder