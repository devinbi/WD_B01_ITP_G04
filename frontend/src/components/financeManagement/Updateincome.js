import React, { useEffect, useState } from "react";
import axios from "axios";
const Host = "http://localhost:8070/incomingfinance";
export default function Updateincome({ data, cl }){

    const [orderid, setOrderid] = useState("");
    const [ordertype,setOrdertype] = useState("");
    const [numberofunits, setNumberofunits] = useState("");
    const [unitprice, setUnitprice] = useState("");
    const [totalamount, setTotalamount] = useState("");
    useEffect(()=>{
        
        setOrderid(data.orderid)
        setOrdertype(data.ordertype)
        setNumberofunits(data.numberofunits)
        setUnitprice(data.unitprice)
        setTotalamount(data.totalamount)
        
        },[])

        function sendData(e){
    
            e.preventDefault();
                  
                const Updatincomes = {
                    orderid,
                    ordertype,
                    numberofunits,
                    unitprice,
                    totalamount
                  }

                  axios
      .put(`${Host}/update/${data._id}`,Updatincomes)
      .then((response) => {
        alert("income Details updated Successfully !");
        window.location.reload(true);
      })
      .catch((err) => {
          console.log(err)
        alert("Error occured !");
      });
    
  };
  return (
    <div class="area">
      <div className="container">
        <form onSubmit={sendData}>
          <div className="mb-3">
            <label for="orderid" className="form-label">
              Order Id :
            </label>
            <input
              type="text"
              className="form-control"
              name="orderid"
              onChange={(e)=>{
                setOrderid(e.target.value);
            }}
              value={orderid}
              disabled
           required />
          </div>

          <div className="mb-3">
            <label for="ordertype" className="form-label">
              Order Type
            </label>
            <input
              type="text"
              className="form-control"
              name="ordertype"
              onChange={(e)=>{
            setOrdertype(e.target.value);
            }}
              value={ordertype}
            required></input>
          </div>

          

          <div className="mb-3">
            <label for="numberofunits" className="form-label">
              Number of units
            </label>
            <input
              type="text"
              className="form-control"
              name="numberofunits"
              onChange={(e)=>{
                setNumberofunits(e.target.value);
            }}
              value={numberofunits}
           required></input>
          </div>
          
              <div className="mb-3">
            <label for="unitprice" className="form-label">
              Unit Price
            </label>
            <input
              type="text"
              className="form-control"
              name="unitprice"
              onChange={(e)=>{
                setUnitprice(e.target.value);
            }}
              value={unitprice}
            required></input>
          </div>

          <div className="mb-3">
            <label for="totalamount" className="form-label">
             Total Amount
            </label>
            <input
              type="text"
              className="form-control"
              name="totalamount"
              onChange={(e)=>{
                setTotalamount(e.target.value);
            }}
              value={totalamount}
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