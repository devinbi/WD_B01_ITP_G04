import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';


export default function AllDressmakings(props){
    const [alldressmaking, setDressmaking] = useState([]);
    
    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/dressmaking/')
            .then((res) =>{
                console.log(res.data);
                setDressmaking(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])
    console.log(alldressmaking.data);
    return(
        <div class="container-fluid">
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Dressmaking Tools"

                    columns={[
                        { title: "Machine Code", field: "machineCode", type: "string" },
                        { title: "Machine Name", field: "machineName", type: "string" },
                        { title: "Category", field: "category", type: "string" },
                        { title: "Price", field: "price", type: "number" },
                        { title: "Condition", field: "condition", type: "string" },
                        
                      

                    ]}

                    data={alldressmaking}
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