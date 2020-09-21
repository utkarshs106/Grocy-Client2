import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import { useHistory } from "react-router-dom";

function Homepage() {
  var history = useHistory();
  var [email, setemail] = useState();
  var [password, setPassword] = useState();
  var [authen, setauthen] = useState(false);
  var passwordVisible = false;

  function authenticate() {
    setauthen(true);
  }
  function emailchange(e) {
    setemail(e.target.value);
  }

  function passwordchange(e) {
    setPassword(e.target.value);
  }

  function viewPassword() {
    const passwordField = document.getElementById("password");
    if (passwordVisible === false) {
      passwordField.setAttribute("type", "text");
      passwordVisible = true;
    } else {
      passwordField.setAttribute("type", "password");
      passwordVisible = false;
    }
  }

  const url = "https://ytezo.sse.codesandbox.io/login";
  var data = { email: email, password: password };

  useEffect(() => {
    if (authen === true) {
      console.log("running");

      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data[0].name);
          sessionStorage.setItem("name", data[0].name);
          sessionStorage.setItem("email", data[0].email);
          sessionStorage.setItem("phone", data[0].phone);
          history.push("/itemList");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  });

  return (
    <div>
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />

      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      />
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Grocy</title>
      <header className="text-gray-700 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl">Grocy</span>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <form>
              <a href="https://t7go3.csb.app/Signup">Signup</a>
            </form>
          </nav>
          <form>
            <input
              type="Text"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={emailchange}
              required
            />
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={passwordchange}
              required
            />
            <input
              type="button"
              defaultValue="View Password"
              onClick={viewPassword}
            />
            <input type="button" defaultValue="Login" onClick={authenticate} />
          </form>
        </div>
      </header>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Sell Your Productes online
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Buy and Sell Hardware , Electrical Appliance , Grocerry ,
              Pharmaceuticals , and everything from any store
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Hardware Items
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Hardware Items such as PVC items and metal parts are available
              </p>
              <div className="text-indigo-500 inline-flex items-center">
                See items
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Grocerry Items
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Purchase the fresh fruits and vegetables from nearest store at
                wholesale price
              </p>
              <div className="text-indigo-500 inline-flex items-center">
                See items
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Medecines
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Purchase essential medecines from your local vendor anytime
              </p>
              <div className="text-indigo-500 inline-flex items-center">
                See items
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200">
              <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">
                Electronics items
              </h2>
              <p className="leading-relaxed text-base mb-4">
                Purchase electronics items from local shops and get a discount
              </p>
              <div className="text-indigo-500 inline-flex items-center">
                See items
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Button
          </button>
        </div>
      </section>
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
              OUR TEAM
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              This is a team of passionate and professional people working to
              create a online platform for local shopkeeper to sell more earn
              more
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="/images/tapan.jpg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Tapan Yadav
                  </h2>
                  <h3 className="text-gray-500 mb-3">Android Developer</h3>
                  <p className="mb-4">
                    He is the most passionate coder with awsome skills
                  </p>
                  <span className="inline-flex">
                    <div className="text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </div>
                    <div className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </div>
                    <div className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="/images/gupta.jpg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Utkarsh Gupta
                  </h2>
                  <h3 className="text-gray-500 mb-3">Marketing Lead</h3>
                  <p className="mb-4">Hardcore developer inclined to learn</p>
                  <span className="inline-flex">
                    <div className="text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </div>
                    <div className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </div>
                    <div className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="/images/me.jpg"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Utkarsh
                  </h2>
                  <h3 className="text-gray-500 mb-3">Web Developer</h3>
                  <p className="mb-4">Technology Passionate</p>
                  <span className="inline-flex">
                    <div className="text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </div>
                    <div className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </div>
                    <div className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                  src="/images/chotu2.png"
                />
                <div className="w-full">
                  <h2 className="title-font font-medium text-lg text-gray-900">
                    Prashant Kumar Bharadwaj
                  </h2>
                  <h3 className="text-gray-500 mb-3">Database Manager</h3>
                  <p className="mb-4">Android &amp; web developer</p>
                  <span className="inline-flex">
                    <div className="text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </div>
                    <div className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </div>
                    <div className="ml-2 text-gray-500">
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <div className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="ml-3 text-xl">Grocy</span>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Indian online platform for local shopkeeper so they can reach to
              more costomers and sell more hence earn more
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <div className="text-gray-600 hover:text-gray-800">
                    First Link
                  </div>
                </li>
                <li>
                  <div className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </div>
                </li>
                <li>
                  <div className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </div>
                </li>
                <li>
                  <div className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </div>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <div className="text-gray-600 hover:text-gray-800">
                    First Link
                  </div>
                </li>
                <li>
                  <div className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </div>
                </li>
                <li>
                  <div className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </div>
                </li>
                <li>
                  <div className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </div>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <div className="text-gray-600 hover:text-gray-800">
                    First Link
                  </div>
                </li>
                <li>
                  <div className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </div>
                </li>
                <li>
                  <div className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </div>
                </li>
                <li>
                  <div className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </div>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <div className="text-gray-600 hover:text-gray-800">
                    First Link
                  </div>
                </li>
                <li>
                  <div className="text-gray-600 hover:text-gray-800">
                    Second Link
                  </div>
                </li>
                <li>
                  <div className="text-gray-600 hover:text-gray-800">
                    Third Link
                  </div>
                </li>
                <li>
                  <div className="text-gray-600 hover:text-gray-800">
                    Fourth Link
                  </div>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                {" "}
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <div className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </div>
              <div className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </div>
              <div className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </div>
              <div className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </div>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
