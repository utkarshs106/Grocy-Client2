import React, { useState, useEffect } from "react";
import AddItemToShop from "./addItemToShop";
import { useHistory } from "react-router-dom";
import CreateShop from "./createShop";

function ShopList() {
  var [getShop, setgetShop] = useState(true);
  var [listOfShopId, setListOfShopId] = useState([]);
  function generateShops(SHOP) {
    return <CreateShop key={SHOP} name={SHOP} />;
  }
  var History = useHistory();
  function itemlist() {
    History.push("/itemlist");
  }

  useEffect(() => {
    if (getShop === true) {
      var data = { email: sessionStorage.getItem("email") };
      var url = "https://ytezo.sse.codesandbox.io/goToShopList";

      fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.Shops);
          setListOfShopId(data.Shops);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      setgetShop(false);
    }
  });

  function addShop() {
    console.log("Add Shop trigerred");
    History.push("/AddShop");
  }

  return (
    <section className="text-gray-700 body-font">
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
            <span className="ml-3 text-xl">Shop List</span>
          </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <div className="mr-5 hover:text-gray-900">
              <button type="Button" onClick={addShop}>
                Add Shop
              </button>
            </div>
          </nav>
          <button
            onClick={itemlist}
            className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
          >
            Item List
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

      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {listOfShopId.map(generateShops)}
        </div>
      </div>
    </section>
  );
}

export default ShopList;
