import React, { useState, useEffect } from "react";
import ItemIcon from "./components/itemIcon";
import ShopsExample from "./shopsExample";
import { useHistory } from "react-router-dom";

function Shopdata() {
  var [shopList, setShopList] = useState(false);
  var History = useHistory();
  function logout() {
    localStorage.clear();
    sessionStorage.clear();
    History.push("/");
  }

  function createmanyshops(ShopsExample) {
    return (
      <ItemIcon
        key={ShopsExample.key}
        category={ShopsExample.category}
        price={ShopsExample.price}
        name={ShopsExample.name}
      />
    );
  }

  function goToMyShopList() {
    History.push("/shopList");
  }

  return (
    <section className="text-gray-700 body-font">
      <header className="text-gray-700 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">
              {sessionStorage.getItem("name")}
            </span>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <button
              className="mr-5 hover:text-gray-900"
              onClick={goToMyShopList}
            >
              My Shop
            </button>
            <div className="mr-5 hover:text-gray-900">Second Link</div>
            <div className="mr-5 hover:text-gray-900">Third Link</div>
            <div className="mr-5 hover:text-gray-900">Fourth Link</div>
          </nav>
          <button
            onClick={logout}
            className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
          >
            Logout
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

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
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {ShopsExample.map(createmanyshops)}
        </div>
      </div>
    </section>
  );
}

export default Shopdata;
