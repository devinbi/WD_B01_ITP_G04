import React,{useState} from "react";
import axios from "axios";


export default function AddVehicle(){
    const [Vehicle_ID,setVid] = useState("");
    const [Vehicle_Registration_No,setVrid] = useState("");
    const [Date,setDate] = useState("");
    const [Vehicle_Type,setType] = useState("");
    const [Vehicle_Brand,setBrand] = useState("");
    const [Mileage,setMilage] = useState("");
    // console.log("description",description)
    
    function sendData(e){
        e.preventDefault();
        const newVehicle ={
            Vehicle_ID,
            Vehicle_Registration_No,
            Date,
            Vehicle_Type,
            Vehicle_Brand,
            Mileage
        }
            console.log("new Vehicle",newVehicle);
        axios.post("http://localhost:8070/Vehicle/add",newVehicle).then(()=>{
        alert("Vehicle Added...!!")
        
        window.location.reload();

    }).catch((err)=>{
        alert(err)
    })
      
    }

    return(
        <div className="container">
            <form onSubmit={sendData}>
               <div class="form-group">
                    <label for="vid">Vehicle ID :</label>
                    <input type="text" class="form-control" id="vid"  placeholder="Enter "
                    onChange={(e)=>{
                        setVid(e.target.value);
                    }}/>
                   
                </div>
                <div className="form-group">
                    <label for="vrid">Vehicle Registration No :</label>
                    <input type="text" class="form-control" id="vrid"  placeholder="Enter" onChange={(e)=>{
                        setVrid(e.target.value);
                    }}/>
                   
                </div>

                <div className="form-group">
                    <label for="date">Date :</label>
                    <input type="date" class="form-control" id="date" onChange={(e)=>{
                        setDate(e.target.value);
                    }}/>
                </div>

                <div class="form-group">
                    <label for="inputState">Vehicle Type :</label>
                    <select id="type" class="form-control" onChange={(e)=>{
                        setType(e.target.value);
                    }}>
                        <option  selected>choose..</option>
                        <option value="Van">Van</option>
                        <option value="Bus">Bus</option>
                        <option value="Lorry">Lorry</option>
                    </select>
                </div>

                 {/* <div class="form-group">
                    <label for="type">Vehicle Type :</label>
                    <input type="text" class="form-control" id="type"
                    onChange={(e)=>{
                        setType(e.target.value);
                    }} />
                </div> */}

                <div class="form-group">
                    <label for="brand">Vehicle Brand :</label>
                    <input type="text" class="form-control" id="brand" 
                    onChange={(e)=>{
                        setBrand(e.target.value);
                    }}/>
                </div>

                <div class="form-group">
                    <label for="milage">Milage :</label>
                    <input type="text" class="form-control" id="milage" 
                    onChange={(e)=>{
                        setMilage(e.target.value);
                    }}/>
                </div>

                
            <button type="submit" class="btn btn-primary">ADD</button>
            </form>
            
        </div>
    )

}