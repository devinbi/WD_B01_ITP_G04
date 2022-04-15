import React,{useState} from 'react';
import axios from 'axios';


   export default function AddIncome(){

  const [orderid, setOrderid] = useState("");
  const [ordertype, setOrdertype] = useState("");
  const [numberofunits, setNumberofunits] = useState("");
  const [unitprice, setUnitprice] = useState("");
  const [totalamount, setTotalamount] = useState("");
 

  function sendData(r){
      r.preventDefault();
    
      const newIncome = {
        orderid,
        ordertype,
        numberofunits,
        unitprice,
        totalamount
        

      }
      
  console.log(newIncome)
      axios.post("http://localhost:8070/incomingfinance/add",newIncome).then(()=>{
          alert("Success");
    
      }).catch((err)=>{
          alert(err);
      })
   
  }
    return(
     <div>
    <form onSubmit={sendData}>
     <label  for="orderid">Order Id:</label>
     <input id="orderid" className="input-text js-input" type="text"  required
       onChange={(r)=>{

    setOrderid(r.target.value);
      }
      }
      /><br/>
     <label  for="ordertype">Order Type:</label>
     <input id="ordertype" className="input-text js-input" type="text" required
       onChange={(r)=>{

      setOrdertype(r.target.value);
      }
      }
     /><br/>
     <label for="numberofunits">Number of units:</label>
     <textarea id="numberofunits" name="address" rows="4" cols="50" 
            onChange={(r)=>{

      setNumberofunits(r.target.value);
}     
}
/><br/>
<label  for="unitprice">Unit Price:</label>
<input id="unitprice" className="input-text js-input" type="text" required
 onChange={(r)=>{

setUnitprice(r.target.value);
}
}
     /><br/>
     <label  for="totalamount">Total Amount:</label>
     <input id="totalamount" className="input-text js-input" type="text" required
      onChange={(r)=>{

 setTotalamount(r.target.value);
}
}
     />
     <br/>
     <input type="submit"/>
     </form>
     </div>
    )
}

