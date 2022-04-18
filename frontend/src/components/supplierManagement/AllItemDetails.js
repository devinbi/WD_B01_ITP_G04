import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';


export default function AllItemDetails(props){
    const [item, setItem] = useState([]);
    
    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/item/')
            .then((res) =>{
                console.log(res.data);
                setItem(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])
    
    return(
        <div class="container-fluid">
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Items Details "

                    columns={[
                        
                        { title: "Item Name", field: "itemName", type: "string" },
                        { title: "Item Quantity", field: "itemQuantity", type: "string" },
                        { title: "Unit Price", field: "unitPrice", type: "string" },
                        { title: "Total Cost", field: "totalCost", type: "string" },
                        { title: "Admin Id", field: "adminId", type: "string" },

                    ]}

                    data={item}
                    options={{
                        sorting: true
                     
                    }}

        />
        </div>
    )
}