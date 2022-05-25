import React,{ useState, useEffect } from "react";
import emailjs from "emailjs-com";

export default function EmailForm({ data, cl }){
 
  const [employeeId, setId] = useState("");

  
 
  useEffect(()=>{   

  setId(data.employeeId)
  },[])
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_rn75el9', 'template_qfdwb4j', e.target, 'gTObzwkPftQ7Kjqbj')
          .then((result) => {
              console.log(result.text);
              alert("Employee Details Emailed!");
              window.location.reload(true);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();


         
    }

    return(
        <div class="area">
        <div className="container">
          <form onSubmit={sendEmail}>
            <div className="mb-3">
              <label for="employeeId" className="form-label">
                Employee Id :
              </label>
              <input
                type="text"
                className="form-control"
                name="employeeid"
            //     onChange={(e)=>{
            //       setId(e.target.value);
            //   }}
                value={employeeId}
                // disabled
              />
            </div>
  
            <div className="mb-3">
              <label for="labourHr" className="form-label">
                Employee Name
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
            //     onChange={(e)=>{
            //   setLabourHr(e.target.value);
            //   }}
            //     value={name}
              ></input>
            </div>
            <div className="mb-3">
              <label for="labourHr" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                name="subject"
            //     onChange={(e)=>{
            //   setLabourHr(e.target.value);
            //   }}
            //     value={name}
              ></input>
            </div>
            <button
              type="submit"
              className="btn btn-success"
              style={{ margin: "5px" }}
            >
              Confirm
            </button>
            <button type="button" class="btn btn-primary " onClick={cl}>
            Cancel
          </button>
          </form>
        </div>
      </div>
    )
}