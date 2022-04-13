import React,{useState} from 'react';
import axios from 'axios';


export  default function AddEmployee(){

  const [employeeId, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setBdate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [eQuality, setEquality]= useState("");
  const [wExperence, setWexperence] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [jDate, setJdate] = useState("");

  function sendData(e){
      e.preventDefault();
    
      const newEmployee = {
        employeeId,
        name,
        address,
        dob,
        gender,
        email,
        phone,
        nic,
        eQuality,
        wExperence,
        department,
        designation,
        jDate
      }
      
  console.log(newEmployee)
      axios.post("http://localhost:8060/employee/add",newEmployee).then(()=>{
          alert("Success");
         
      

      }).catch((err)=>{
          alert(err);
      })
   
  }
    return(
     <div>
    <form onSubmit={sendData}>
     <label  for="employeeId">Employeererererereree Id</label>
     <input id="employeeId" className="input-text js-input" type="text"  required
       onChange={(e)=>{

    setId(e.target.value);
      }
      }
     / ><br/>
     <label  for="name">Employee Name</label>
     <input id="name" className="input-text js-input" type="text" required
       onChange={(e)=>{

      setName(e.target.value);
      }
      }
     /><br/>
     <label for="address">Address :</label>
     <textarea id="address" name="address" rows="4" cols="50" 
            onChange={(e)=>{

      setAddress(e.target.value);
      }
      }></textarea>
     <br/>
     <label for="birthday">Date of Birth :</label>
     <input type="date" id="birthday" name="birthday"
              onChange={(e)=>{

      setBdate(e.target.value);
      }
      }
     />
     <br/>
     <lable for="gender">Gender  :</lable>
     <input type="radio" name="gender" value="male" id="gender"
     onChange={(e)=>{

setGender(e.target.value);
}
}/> Male
     <input type="radio" name="gender" value="female" id ="gender"
        onChange={(e)=>{

setGender(e.target.value);
}
}
     /> Female
     <br/>
     <label  for="email">Email :</label>
     <input id="email" className="input-text js-input" type="email" required
        onChange={(e)=>{

setEmail(e.target.value);
}
}
     /><br/>
     <label  for="phone">Phone :</label>
     <input id="phone" className="input-text js-input" type="text" required
       onChange={(e)=>{

setPhone(e.target.value);
}
}
     /><br/>
     <label  for="nic">Nic :</label>
     <input id="nic" className="input-text js-input" type="text" required
       onChange={(e)=>{

setNic(e.target.value);
}
}
     /><br/>
     <label  for="equalification">Education Qualification :</label>
     <input id="equalification" className="input-text js-input" type="text" required
       onChange={(e)=>{

setEquality(e.target.value);
}
}
     /><br/>
     <label  for="wexperience">Working Experience :</label>
     <input id="experience" className="input-text js-input" type="text" required
        onChange={(e)=>{

          setWexperence(e.target.value);
}
}
     /><br/>
     <label for="Department">Department :</label>
      <select name="Department" id="Department"
       onChange={(e)=>{

        setDepartment(e.target.value);
}
}>
        <option value="it">It</option>
        <option value="Production">Production</option>
        <option value="HR">HR</option>
        <option value="Account">Account</option>
      </select>
      <br/>
     <label for="Designationrs">Designation</label>
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
    <label for="jdate">Date joined :</label>
     <input type="date" id="jdate" name="jdate"
        onChange={(e)=>{

setJdate(e.target.value);
}
}
     />
     <br/>
     <input type="submit"/>
     </form>
     </div>
    )
}

