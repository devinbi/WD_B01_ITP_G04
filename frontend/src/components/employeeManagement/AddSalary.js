import React,{useState} from 'react';
import axios from 'axios';

export default function AddSalary(){
    const [employeeId, setId] = useState("");
    const [labourHr, setLabourHr] = useState("");
    const [otHr, setOtHr] = useState("");
    const [leave, setLeave] = useState("");
    const [designation, setDesignation] = useState("");
    const [salary, setSalary] = useState("");


    function sendData(e){
        e.preventDefault();
      
        const newSalary = {
          employeeId,
          labourHr,
          otHr,
          leave,
          designation,
          salary
        }
        
     
          axios.post("http://localhost:8060/salary/add",newSalary).then(()=>{
              alert("Success");
              window.location.reload();
              }).catch((err)=>{
                  alert(err);
              })
     
          }
 
          return(
            <div>
            <form onSubmit={sendData}>
            <label  for="employeeId">Employee Id</label>
            <input id="employeeId" className="input-text js-input" type="text"  required
              onChange={(e)=>{
  
            setId(e.target.value);
              }
              }
            / ><br/>
            <label  for="name">Labour Hours</label>
            <input id="labourHr" className="input-text js-input" type="text" required
              onChange={(e)=>{
  
              setLabourHr(e.target.value);
              }
              }
            /><br/>
            <label  for="otHr">Ot Hours</label>
            <input id="otHr" className="input-text js-input" type="text" required
              onChange={(e)=>{
  
              setOtHr(e.target.value);
              }
              }
            /><br/>
            
            <label for="leave">Leaves</label>
            <input type="text" id="leave" className="input-text js-input"
                      onChange={(e)=>{
  
              setLeave(e.target.value);
              }
              }
            />
            <br/>
            <label for="Designation">Designation</label>
              <select name="Designation" id="Designation"  
              onChange={(e)=>{
  
        setDesignation(e.target.value);
        }
        }>
                <option value="driver">Driver</option>
                <option value="Officer">Officer</option>
                <option value="worker">Worker</option>
              
              </select>
              <br/>
            <label for="salary">Salary</label>
            <input type="text" id="salary" name="jdate"
                onChange={(e)=>{
  
        setSalary(e.target.value);
        }
        }
            />
            <br/>
            <input type="submit"/>
            </form>
            </div>
            )


}