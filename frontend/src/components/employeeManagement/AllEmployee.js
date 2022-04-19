import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';

export default function AllEmployee(props){
    const [employee, setEmp] = useState([]);
    
    useEffect(()=>{
        
        
            axios.get('http://localhost:8070/employee/')
            .then((res) =>{
                console.log(res.data);
                setEmp(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])
    
    return(
      
    
    <div>
  
  

        <div class="container-fluid">
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Employee Details "

                    columns={[
                        { title: "Employee Id", field: "employeeId", type: "string" },
                        { title: "Name", field: "name", type: "string" },
                        { title: "Address", field: "address", type: "string" },
                        { title: "Date of Bir", field: "dob", type: "date" },
                        { title: "Gender", field: "gender", type: "string" },
                        { title: "Email", field: "email", type: "string" },

                    ]}

                    data={employee}
                    options={{
                        sorting: true
                     
                        

                    }}

        />
        </div>
        
        </div>
    )
}