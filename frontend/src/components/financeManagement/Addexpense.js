import React,{useState} from 'react';
import axios from 'axios';


export  default function Addexpense(){

  const [expenseid, setExpenseid] = useState("");
  const [expensetype, setExpensetype] = useState("");
  const [date, setDate] = useState("");
  const [totalamount, setTotalamount] = useState("");
  const [description, setDescription] = useState("");
 

  function sendData(e){
      e.preventDefault();
    
      const newExpense = {
        expenseid,
        expensetype,
        date,
        totalamount,
        description
        
      }
      
  console.log(newExpense)
      axios.post("http://localhost:8070/expense/add",newExpense).then(()=>{
          alert("Success");
         
      

      }).catch((err)=>{
          alert(err);
      })
   
  }
    return(
     <div>
    <form onSubmit={sendData}>
     <label  for="expenseid">Expense Id:</label>
     <input id="expenseid" className="input-text js-input" type="text"  required
       onChange={(e)=>{

    setExpenseid(e.target.value);
      }
      }
      /><br/>
     <label  for="totalamount">Total Amount:</label>
     <input id="totalamount" className="input-text js-input" type="text" required
       onChange={(e)=>{

      setTotalamount(e.target.value);
      }
    }
    /><br/>
   <label  for="description">Description:</label>
   <input id="description" className="input-text js-input" type="text" required
     onChange={(e)=>{

    setDescription(e.target.value);
    }    
}
     /><br/>
     <label for="expensetype">Expense Type:</label>
      <select name="expensetype" id="expensetype"
       onChange={(e)=>{

        setExpensetype(e.target.value);
}
}>
        <option value="supplier">Supplier Cost:</option>
        <option value="maintenance">Maintenance Cost</option>
        <option value="salary">Salary Cost</option>
        
      </select>

      <br/>
    <label for="date">Date:</label>
     <input type="date" id="date" name="date"
        onChange={(e)=>{

setDate(e.target.value);
}
}
     />
     <br/>
     <input type="submit"/>
     </form>
     </div>
    )
}

