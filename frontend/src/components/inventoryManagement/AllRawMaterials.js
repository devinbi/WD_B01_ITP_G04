import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';


export default function AllRawMaterials(props){
    const [RawMaterials, setRawMaterials] = useState([]);
    
    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/RawMaterial/')
            .then((res) =>{
                console.log(res.data);
                setRawMaterials(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])
    console.log(RawMaterials.data);
    return(
        <div class="container-fluid">
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Product Item Details"

                    columns={[
                        
                        { title: "Item Id", field: "ItemId", type: "string" },
                        { title: "Item Name", field: "ItemName", type: "string" },
                        { title: "Quantity", field: "Quantity", type: "string" },
                        { title: "Item Type", field: "ItemType", type: "string" },

                    ]}

                    data={RawMaterials}
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