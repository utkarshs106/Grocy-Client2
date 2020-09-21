import React, { useState } from "react";
var cors = require("cors");

function Login() {
  var [valueEmail, changeValueEmail] = useState();
  var [valuePassword, changeValuePassword] = useState();

  function emailchange(data) {
    changeValueEmail(data.target.value);
  }
  function passwordchange(data) {
    changeValuePassword(data.target.value);
  }

  function authentication() {
    const data = { email: valueEmail, password: valuePassword };
    console.log(valueEmail);
    console.log(valuePassword);

    fetch("https://ytezo.sse.codesandbox.io/login", {
      mode: "cors",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div>
      <input
        type="text"
        name="email"
        placeholder="Username"
        required
        onChange={emailchange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        required
        onChange={passwordchange}
      />
      <input type="button" value="Login" onClick={authentication} />
    </div>
  );
}

export default Login;
