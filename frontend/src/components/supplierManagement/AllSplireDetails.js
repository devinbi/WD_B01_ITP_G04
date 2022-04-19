import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';


export default function AllSplireDetails(){
    const [supplier, setSupplier] = useState([]);
    
    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/supplier/')
            .then((res) =>{
                console.log(res.data);
                setSupplier(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])
    
    return(
        <div class="container-fluid">
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Items Details "

                    columns={[
                        
                        { title: "Supplier Name", field: "name", type: "string" },
                        { title: "E-Mail", field: "email", type: "string" },
                        { title: "Phone Number", field: "phoneNumber", type: "string" },
                        { title: "Nic Number", field: "nic", type: "string" },
                        { title: "Address", field: "address", type: "string" },
                        { title: "Admin Id", field: "adminId", type: "string" },

                    ]}

                    data={supplier}
                    options={{
                        sorting: true
                     
                    }}

        />
        </div>
    )
}