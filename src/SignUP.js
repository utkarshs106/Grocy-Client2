import React, { useState, useEffect } from "react";

function Signup() {
  var [name, namechange] = useState();
  var [email, emailchange] = useState();
  var [phone, phonechange] = useState();
  var [password, passwordchange] = useState();
  var [password2, password2change] = useState();
  var [flagRegister, setFlagRegister] = useState(false);

  function changeName(e) {
    namechange(e.target.value);
  }

  function changeEmail(e) {
    emailchange(e.target.value);
  }

  function changePhone(e) {
    phonechange(e.target.value);
  }

  function changePassword(e) {
    passwordchange(e.target.value);
  }

  function changePassword2(e) {
    password2change(e.target.value);
  }
  function register() {
    setFlagRegister(true);
  }

  useEffect(() => {
    if (flagRegister === true) {
      const url = "https://ytezo.sse.codesandbox.io/register";
      var data = { name: name, email: email, phone: phone, password: password };
      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then((response) => response.json)
        .then((data) => {
          alert("SignUP Sucessfull");
        });
    }
  });

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      <div id="login-box">
        <div className="left">
          <h1>Sign up</h1>
          <input
            type="text"
            name="name"
            onChange={changeName}
            placeholder="Name"
            id="name"
          />
          <input
            type="text"
            name="email"
            onChange={changeEmail}
            placeholder="E-mail"
            id="email"
          />
          <input
            type="text"
            name="Phone"
            onChange={changePhone}
            placeholder="Phone"
            id="Phone"
          />
          <input
            type="password"
            name="password"
            onChange={changePassword}
            placeholder="Password"
            id="password"
          />
          <input
            type="password"
            name="password2"
            onChange={changePassword2}
            placeholder="Retype password"
            id="re_password"
          />
          <input
            type="submit"
            name="signup_submit"
            defaultValue="Sign me up"
            onClick={register}
            id="submit"
          />
        </div>
        <div className="right">
          <span className="loginwith">
            Sign in with
            <br />
            social network
          </span>
          <button className="social-signin facebook">
            Log in with facebook
          </button>
          <button className="social-signin twitter">Log in with Twitter</button>
          <button className="social-signin google">Log in with Google+</button>
        </div>
        <div className="or">OR</div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n          @import url(https://fonts.googleapis.com/css?family=Roboto:400,300,500);\n*:focus {\n  outline: none;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: #DDD;\n  font-size: 16px;\n  color: #222;\n  font-family: \'Roboto\', sans-serif;\n  font-weight: 300;\n}\n\n#login-box {\n  position: relative;\n  margin: 5% auto;\n  width: 600px;\n  height: 400px;\n  background: #FFF;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n}\n\n.left {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  padding: 40px;\n  width: 300px;\n  height: 400px;\n}\n\nh1 {\n  margin: 0 0 20px 0;\n  font-weight: 300;\n  font-size: 28px;\n}\n\ninput[type="text"],\ninput[type="password"] {\n  display: block;\n  box-sizing: border-box;\n  margin-bottom: 20px;\n  padding: 4px;\n  width: 220px;\n  height: 32px;\n  border: none;\n  border-bottom: 1px solid #AAA;\n  font-family: \'Roboto\', sans-serif;\n  font-weight: 400;\n  font-size: 15px;\n  transition: 0.2s ease;\n}\n\ninput[type="text"]:focus,\ninput[type="password"]:focus {\n  border-bottom: 2px solid #16a085;\n  color: #16a085;\n  transition: 0.2s ease;\n}\n\ninput[type="submit"] {\n  margin-top: 28px;\n  width: 120px;\n  height: 32px;\n  background: #16a085;\n  border: none;\n  border-radius: 2px;\n  color: #FFF;\n  font-family: \'Roboto\', sans-serif;\n  font-weight: 500;\n  text-transform: uppercase;\n  transition: 0.1s ease;\n  cursor: pointer;\n}\n\ninput[type="submit"]:hover,\ninput[type="submit"]:focus {\n  opacity: 0.8;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n  transition: 0.1s ease;\n}\n\ninput[type="submit"]:active {\n  opacity: 1;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n  transition: 0.1s ease;\n}\n\n.or {\n  position: absolute;\n  top: 180px;\n  left: 280px;\n  width: 40px;\n  height: 40px;\n  background: #DDD;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n  line-height: 40px;\n  text-align: center;\n}\n\n.right {\n  position: absolute;\n  top: 0;\n  right: 0;\n  box-sizing: border-box;\n  padding: 40px;\n  width: 300px;\n  height: 400px;\n  background: url(\'https://goo.gl/YbktSj\');\n  background-size: cover;\n  background-position: center;\n  border-radius: 0 2px 2px 0;\n}\n\n.right .loginwith {\n  display: block;\n  margin-bottom: 40px;\n  font-size: 28px;\n  color: #FFF;\n  text-align: center;\n}\n\nbutton.social-signin {\n  margin-bottom: 20px;\n  width: 220px;\n  height: 36px;\n  border: none;\n  border-radius: 2px;\n  color: #FFF;\n  font-family: \'Roboto\', sans-serif;\n  font-weight: 500;\n  transition: 0.2s ease;\n  cursor: pointer;\n}\n\nbutton.social-signin:hover,\nbutton.social-signin:focus {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n  transition: 0.2s ease;\n}\n\nbutton.social-signin:active {\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n  transition: 0.2s ease;\n}\n\nbutton.social-signin.facebook {\n  background: #32508E;\n}\n\nbutton.social-signin.twitter {\n  background: #55ACEE;\n}\n\nbutton.social-signin.google {\n  background: #DD4B39;\n}\n'
        }}
      />
    </div>
  );
}

export default Signup;
