import React, { useState, useEffect } from "react";

function Validate() {
  const data = { name: "Rahul biro", class: "Smart Boy" };

  const url = "https://ytezo.sse.codesandbox.io/testAPI";
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  return <>hii this is validate</>;
}
export default Validate;
