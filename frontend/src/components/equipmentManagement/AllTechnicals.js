import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';


export default function AllTechnicals(props){
    const [alltechnical, setTechnical] = useState([]);
    
    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/technical/')
            .then((res) =>{
                console.log(res.data);
                setTechnical(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])
    console.log(alltechnical.data);
    return(
        <div class="container-fluid">
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Technical Devices"

                    columns={[
                        { title: "Device Code", field: "deviceCode", type: "string" },
                        { title: "Model No", field: "modelNo", type: "string" },
                        { title: "Machine Name", field: "machineName", type: "string" },
                        { title: "Price", field: "price", type: "string" },
                        { title: "Department", field: "department", type: "string" },
                        { title: "Condition", field: "condition", type: "string" }
                      

                    ]}

                    data={alltechnical}
                    options={{
                        sorting: true,
                        search:false,
                        paging :false,
                        filtering : true
                     
                    }}

        />
        </div>
    )
}