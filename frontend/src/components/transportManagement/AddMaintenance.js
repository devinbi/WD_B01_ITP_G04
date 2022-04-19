import React,{useState} from "react";
import axios from "axios";

export default function AddMaintenance(){
    const [Maintenance_ID,setMid] = useState("");
    const [Vehicle_Registration_No,setVid] = useState("");
    const [Date,setDate] = useState("");
    const [Description,setDescription] = useState("");
    const [maintenance_Cost,setCost] = useState("");
  
    
    function sendData(e){
        e.preventDefault();
        const newMaintenance ={
            Maintenance_ID,
            Vehicle_Registration_No,
            Date,
            Description,
            maintenance_Cost
        }
            console.log("new Maintenanace",newMaintenance);
        axios.post("http://localhost:8070/Maintenance/add",newMaintenance).then(()=>{
        alert("Maintenance Added")
        window.location.reload();

    }).catch((err)=>{
        alert(err)
    })
      
    }
     





    return(
        <div >
        <div className="container">
                    <form onSubmit={sendData}>
                    <div class="form-group">
                            <label for="tid">Maintenance ID :</label>
                            <input type="text" class="form-control" id="vid"  placeholder="Enter "
                            onChange={(e)=>{
                                setMid(e.target.value);
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
                            <label for="description">Description :</label>
                            <input type="text" class="form-control" id="description" 
                            onChange={(e)=>{
                                setDescription(e.target.value);
                            }}/>
                        </div>
                        <div class="form-group">
                            <label for="description">maintenance Cost :</label>
                            <input type="text" class="form-control" id="description" 
                            onChange={(e)=>{
                                setCost(e.target.value);
                            }}/>
                        </div>
            
                    <button type="submit" class="btn btn-info btn-lg">ADD</button>
                    </form>
                    
                </div>

        </div>
      
    )

}