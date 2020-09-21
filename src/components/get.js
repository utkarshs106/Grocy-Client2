import React from "react";

function Get() {
  const apiUrl = "https://ytezo.sse.codesandbox.io/home";
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => console.log("This is your data", data));
  return <h1> did page come</h1>;
}

export default Get;
