import React, { useState, useEffect } from "react";
import axios from 'axios';
import MaterialTable from 'material-table';


export default function AllSalary(props){

    const [salary, setSalary] = useState([]);

   


    useEffect(()=>{
        
        
            axios.get('http://localhost:8060/salary/')
            .then((res) =>{
                console.log(res.data);
                setSalary(res.data);
            }).catch((err)=>{
                alert(err.msg);

            })
        
    },[])


    
    return(
      
    
    <div class="sala">
  
  

        <div class="container-fluid">
        <MaterialTable  style={{background:"#E3ECFF"}}
                    title="All Salary Details "

                    columns={[
                        { title: "Employee Id", field: "employeeId", type: "string" },
                        { title: "Labour Hours", field: "labourHr", type: "string" },
                        { title: "OT Hours", field: "otHr", type: "string" },
                        { title: "Leaves", field: "leave", type: "date" },
                        { title: "Designation", field: "designation", type: "string" },
                        { title: "Salary", field: "salary", type: "string" },
                         
                            ]}

                    data={salary}
                    options={{
                        sorting: true,
                        search:false,
                        paging :false,
                        filtering : true,
                        actionsColumnIndex: -1

                        

                    }}
              />      
                  
       
        </div>
        
        </div>
    )
}