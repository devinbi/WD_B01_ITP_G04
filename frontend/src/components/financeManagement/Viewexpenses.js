import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';
import { Modal } from "react-bootstrap";

export default function Viewexpenses(props){
    const [expense, setExpense] = useState([]);
    
    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/expense/')
            .then((res) =>{
                console.log(res.data);
                setExpense(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])
    
    return(
        <div class="container-fluid">
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Expense Details "

                    columns={[
                        { title: "Expense ID", field: "expenseid", type: "string" },
                        { title: "Expense Type", field: "expensetype", type: "string" },
                        { title: "DATE", field: "date", type: "date" },
                        { title: "Total Amount", field: "totalamount", type: "number" },
                        { title: "Description", field: "description", type: "string" },
                        
                    ]}

                    data={expense}
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