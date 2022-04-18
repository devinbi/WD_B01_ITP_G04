import React, {useState, useEffect} from 'react';
import axios from "axios";
import MaterialTable from "material-table";

export default function AllCustomers(){

const[Customers, setCustomers] = useState([]);

useEffect(()=> {
    function getCustomers(){
        axios.get("http://localhost:8070/customer/").then((res)=>{
           
            setCustomers(res.data);
    }).catch((err)=> {
        alert(err.message);
    })
}
getCustomers();
},[])

return(
    <div class="container-fluid">
    <MaterialTable  style={{background:"#E3ECFF"}}
                title="All Customer Details "

                columns={[
                    { title: "Customer Name", field: "CustomerName", type: "string" },
                    { title: "Contact Number", field: "ContactNumber", type: "number" },
                    { title: "Email", field: "Email", type: "string" },
                    { title: "Address", field: "Address", type: "string" },
                    { title: "Country", field: "Country", type: "string" },
                    { title: "NIC", field: "NIC", type: "string" },

                    

                ]}

                data={Customers}
                options={{
                    sorting: true
                 
                    

                }}

    />
    </div>
)
}