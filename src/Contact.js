import React from "react";

function Contact() {
  return (
    <div>
      <p>hellow World</p>
      <h1>Contact...</h1>
      <p> {sessionStorage.getItem("name")} </p>
    </div>
  );
}

export default Contact;
