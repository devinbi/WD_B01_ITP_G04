import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';
import { Modal } from "react-bootstrap";

export default function Viewincomes(props){
    const [income, setIncome] = useState([]);
    
    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/incomingfinance/')
            .then((res) =>{
                console.log(res.data);
                setIncome(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])
    
    return(
        <div class="container-fluid">
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Income Details "

                    columns={[
                        { title: "Order ID", field: "orderid", type: "string" },
                        { title: "Order Type", field: "ordertype", type: "string" },
                        { title: "Number of Units", field: "numberofunits", type: "number" },
                        { title: "Unit Price", field: "unitprice", type: "number" },
                        { title: "Total Amount", field: "totalamount", type: "number" },
                        
                    ]}

                    data={income}
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