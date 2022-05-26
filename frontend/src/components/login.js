import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function LoginUser() {
  let history = useHistory();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState([]);

  function checkUser(e) {
    //function checks the availbilty of the admin within the system
    e.preventDefault();
    //pass the username and password and if exact user exsits will be directed to dashbord else it will display error for unavailable user
    axios
      .get(
        `http://localhost:8070/login/get/${username}/${password}`
      )
      .then((response) => {
        console.log(response.data);
        setLogin(response.data.login);
        if (response.data.login === null) {
          alert("User not available");
        } else {
          alert("User available");
          if (response.data.login.username == "CM001") {
    //         "username" : "CM001",
    //          "password" : "home"
            history.push("/home");
          } else if (response.data.login.username == "TD002") {
            // "username" : "TD002",
            // "password" : "lalithya"
            history.push("/dashT");
          } else if (response.data.login.username == "ED003") {
            // "username" : "ED003",
            // "password" : "isurae"
            history.push("/adde");
          } else if (response.data.login.username == "ET004") {
            // "username" : "ET004",
            // "password" : "thinithi"
            history.push("/addDressmaking");
          } else if (response.data.login.username == "IM005") {
            // "username" : "IM005",
            // "password" : "udana"
            history.push("/view");
          } else if (response.data.login.username == "OD006") {
            // "username" : "OD006",
            // "password" : "ashini"
            history.push("/DashboardT");
          } else if (response.data.login.username == "FM007") {
            // "username" : "FM007",
            // "password" : "devin"
            history.push("/ViewFinancial");
          } else if (response.data.login.username == "SD008") {
            // "username" : "SD008",
            // "password" : "dimuth"

            history.push("");
          }
        }
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <br />
      <div className="container">
        <div className="row px-3">
          <div className="col-lg-10 col-xl-9 card flex-row mx-auto px-0">
            <div className="img-left d-none d-md-flex"></div>
            <div className="card-body">
              <h4 className="title text-center mt-4">Login</h4>
              <form className="form-box px-3" onSubmit={checkUser}>
                <div className="form-input">
                  <span>
                    <i class="fa-solid fa-user"></i>
                  </span>
                  <input
                    type="text"
                    name=""
                    placeholder="Username"
                    tabIndex="10"
                    required
                    onChange={(event) => {
                      setUserName(event.target.value);
                    }}
                  />
                </div>
                <div className="form-input">
                  <span>
                    <i class="fa-solid fa-key"></i>
                  </span>
                  <input
                    type="password"
                    name=""
                    placeholder="Password"
                    tabIndex="10"
                    required
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                  />
                </div>
                {/* <div className="mb-3">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" id="cb1"/>{" "}
                            <label className="custom-control-label" for="cb1">Remember me</label>
                        </div>
                    </div> */}
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-block text-uppercase"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
