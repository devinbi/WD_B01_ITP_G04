import React, {useState, useEffect} from 'react';
import axios from "axios";
import MaterialTable from "material-table";

export default function AllOrders(){

const[Orders, setOrders] = useState([]);

useEffect(()=> {
    function getOrders(){
        axios.get("http://localhost:8070/order/view").then((res)=>{
           
            setOrders(res.data);
    }).catch((err)=> {
        alert(err.message);
    })
}
getOrders();
},[])

return(
    <div class="container-fluid">
    <MaterialTable  style={{background:"#E3ECFF"}}
                title="All Order Details "
                columns={[
                    { title: "Type of Order", field: "TypeOfOrder", type: "string" },
                    { title: "Unit Price", field: "UnitPrice", type: "number" },
                    { title: "Number Of Units", field: "NoOfUnit", type: "number" },
                    { title: "Order Status", field: "OrderStatus", type: "string" },
                    { title: "Order Description", field: "OrderDescription", type: "string" },
                    { title: "Date of Receipt of Order", field: "DateOfReceipt", type: "date" },
                    { title: "Order Delivery date", field: "OrderDeliveryDate", type: "date" },
                    

                ]}
               
                

                

                data={Orders}
                options={{
                    sorting: true
                 
                    

                }}

    />
    </div>
)
}