import React,{useState,useEffect} from "react";
import axios from "axios";
import MaterialTable from 'material-table';
// import { Modal } from "react-bootstrap";

export default function AllVehicles(){
    const[vehicleData,setVData]=useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8070/Vehicle").then((res)=>{
            console.log(res.data);
            setVData(res.data);
        }).catch((err)=>{
            alert(err.msg);
        })
    },[])
  return(
         <div className="ml-3 mr-3">
             <br/>
             <br/>
             <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Vehicle Details "

                    columns={[
                        { title: "Vehicle Id", field: "Vehicle_ID", type: "string" },
                        { title: "Vehicle Registration No", field: "Vehicle_Registration_No", type: "string" },
                        { title: "Date", field: "Date", type: "string" },
                        { title: " Vehicle Type", field: "Vehicle_Type", type: "string" },
                        { title: "Vehicle Brand", field: "Vehicle_Brand", type: "string" },
                        { title: "Mileage", field: "Mileage", type: "string" },

                    ]}

                    data={vehicleData}
                    options={{
                        sorting: true
                     
                    }}

        />
         </div>
  );

}
