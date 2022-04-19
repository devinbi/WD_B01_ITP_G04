import React,{useState} from "react";
import axios from "axios";


export default function AddTransport(){
    const [Transport_ID,setTid] = useState("");
    const [Vehicle_Registration_No,setVid] = useState("");
    const [Date,setDate] = useState("");
    const [Driver_Name,setName] = useState("");
    const [Description,setDescription] = useState("");
    const [Delivery_Status,setStatus] = useState("");
    // console.log("description",description)
    
    function sendData(e){
        e.preventDefault();
        const newTransport ={
            Transport_ID,
            Vehicle_Registration_No,
            Date,
            Driver_Name,
            Description,
            Delivery_Status
        }
            console.log("new Transpot",newTransport);
        axios.post("http://localhost:8070/Transport/add",newTransport).then(()=>{
        alert("Transport Added")
        // setTid("");
        // setVid("");
        // setDate("");
        // setName("");
        // setDescription("");
        // setStatus("");
        window.location.reload();

    }).catch((err)=>{
        alert(err)
    })
      
    }

    return(
        <div className="container">
            <form onSubmit={sendData}>
               <div class="form-group">
                    <label for="tid">Transport ID :</label>
                    <input type="text" class="form-control" id="vid"  placeholder="Enter "
                    onChange={(e)=>{
                        setTid(e.target.value);
                    }}/>
                   
                </div>
                <div className="form-group">
                    <label for="vid">Vehicle Registration No :</label>
                    <input type="text" class="form-control" id="vid"  placeholder="Enter" onChange={(e)=>{
                        setVid(e.target.value);
                    }}/>
                   
                </div>

                <div className="form-group">
                    <label for="date">Date :</label>
                    <input type="date" class="form-control" id="date" onChange={(e)=>{
                        setDate(e.target.value);
                    }}/>
                </div>

                 <div class="form-group">
                    <label for="name">Driver Name :</label>
                    <input type="text" class="form-control" id="name"
                    onChange={(e)=>{
                        setName(e.target.value);
                    }} />
                </div>

                <div class="form-group">
                    <label for="description">Description :</label>
                    <input type="text" class="form-control" id="description" 
                    onChange={(e)=>{
                        setDescription(e.target.value);
                    }}/>
                </div>
                <div class="form-group">
                    <label for="inputState">Status :</label>
                    <select id="status" class="form-control" onChange={(e)=>{
                        setStatus(e.target.value);
                    }}>
                        <option  selected>choose..</option>
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                    </select>
                </div>
               

                
            <button type="submit" class="btn btn-info btn-lg">ADD</button>
            </form>
            
        </div>
    )

}

//  export default viewTransport;