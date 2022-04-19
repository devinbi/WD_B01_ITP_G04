import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';


export default function AllProductItems(props){
    const [ProductItems, setProductItem] = useState([]);
    
    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/ManufacturedItem/fetch')
            .then((res) =>{
                console.log(res.data);
                setProductItem(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])
    console.log(ProductItems.data);
    return(
        <div class="container-fluid">
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Product Item Details"

                    columns={[
                        
                        { title: "Item Id", field: "ItemId", type: "string" },
                        { title: "Item Name", field: "ItemName", type: "string" },
                        { title: "Quantity", field: "Quantity", type: "number" },
                        { title: "Material", field: "Material", type: "string" },
                        { title: "Colour", field: "Colour", type: "string" },
                        { title: "Size", field: "Size", type: "string" }

                    ]}

                    data={ProductItems}
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