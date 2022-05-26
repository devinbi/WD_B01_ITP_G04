import React, { useEffect, useState } from "react";
import axios from "axios";
const Host = "http://localhost:8070/expense";
export default function Updateexpense({ data, cl }){

    const [expenseid, setExpenseid] = useState("");
    const [expensetype, setExpensetype] = useState("");
    const [date,setDate] = useState("");
    const [totalamount, setTotalamount] = useState("");
    const [description, setDescription] = useState("");
    
    useEffect(()=>{
        
        setExpenseid(data.expenseid)
        setExpensetype(data.expensetype)
        setDate(data.date)
        setTotalamount(data.totalamount)
        setDescription(data.description)
        
        },[])

        function sendData(e){
    
            e.preventDefault();
                  
                const Updateexpenses = {
                    expenseid,
                    expensetype,
                    date,
                    totalamount,
                    description
                  }

                  axios
      .put(`${Host}/update/${data._id}`,Updateexpenses)
      .then((response) => {
        alert("Expenses Details updated Successfully !");
        window.location.reload(true);
      })
      .catch((err) => {
          console.log(err)
        alert("Error occured !");
      });
    
  };
  return (
    <div class="area">
      <div className="container-fluid">
        <form onSubmit={sendData}>
          <div className="mb-3">
            <label for="expenseid" className="form-label">
              Expense Id :
            </label>
            <input
              type="text"
              className="form-control"
              name="expenseid"
              onChange={(e)=>{
                setExpenseid(e.target.value);
            }}
              value={expenseid}
              /*disabled*/
           required />
          </div>

          <div className="mb-3">
            <label for="expensetype" className="form-label">
              Expense Type
            </label>
            <input
              type="text"
              className="form-control"
              name="expensetype"
              onChange={(e)=>{
            setExpensetype(e.target.value);
            }}
              value={expensetype}
            required></input>
          </div>

          

          <div className="mb-3">
            <label for="date" className="form-label">
              Date
            </label>
            <input
              type="date"
              className="form-control"
              name="date"
              onChange={(e)=>{
                setDate(e.target.value);
            }}
              value={date}
           required ></input>
          </div>
          <label for="expensetype">Expense Type</label>
              <select name="expensetype" id="expensetype"  
              onChange={(e)=>{
                setExpensetype(e.target.value);
            }}
             value={expensetype}
        >       <option>Choose</option>
                <option value="supplier">Supplier Cost:</option>
                <option value="maintenance">Maintenance Cost</option>
                <option value="salary">Salary Cost</option>
              
              </select>
        
              <div className="mb-3">
            <label for="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              onChange={(e)=>{
                setDescription(e.target.value);
            }}
              value={description}
            required></input>
          </div>

          <button
            type="submit"
            className="btn btn-success"
            style={{ margin: "5px" }}
          >
            Update
          </button>
          <button type="button" class="btn btn-primary " onClick={cl}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );


}