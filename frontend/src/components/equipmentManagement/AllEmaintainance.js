import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';


export default function AllEmaintainance(props){
    const [allemaintainance, setEmaintainance] = useState([]);
    
    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/emaintainance/')
            .then((res) =>{
                console.log(res.data);
                setEmaintainance(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])
    console.log(allemaintainance.data);
    return(
        <div class="container-fluid">
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Maintainance Details"

                    columns={[
                        { title: "Maintainance ID", field: "maintainID", type: "string" },
                        { title: "Machine Code", field: "machineCode", type: "string" },
                        { title: "Date", field: "date", type: "string" },
                        { title: "Category", field: "category", type: "string" },
                        { title: "Condition", field: "condition", type: "string" },
                        { title: "Cost", field: "cost", type: "string" },
                      
                        
                    ]}

                    data={allemaintainance}
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