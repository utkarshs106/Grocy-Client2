import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function AddShop() {
  var History = useHistory();
  var [submitit, setsubmitit] = useState(false);
  var [shop, shopchange] = useState();
  var [typeofshop, setshoptype] = useState();
  var [addressofShop, setshopaddress] = useState();
  var [ownerOfShop, setshopowner] = useState();
  var [phoneOfShop, setShopPhone] = useState();
  var [zipOfShop, setShopZip] = useState();

  function shopname(e) {
    shopchange(e.target.value);
  }
  function shoptype(e) {
    setshoptype(e.target.value);
  }
  function shopaddress(e) {
    setshopaddress(e.target.value);
  }
  function shopowner(e) {
    setshopowner(e.target.value);
  }
  function shopPhone(e) {
    setShopPhone(e.target.value);
  }
  function zipcode(e) {
    setShopZip(e.target.value);
  }
  function summit() {
    setsubmitit(true);
    console.log(sessionStorage);
  }

  useEffect(() => {
    if (submitit === true) {
      const url = "https://ytezo.sse.codesandbox.io/addShop";
      var data = {
        shop: shop,
        typeofshop: typeofshop,
        phoneOfShop: phoneOfShop,
        ownerOfShop: ownerOfShop,
        addressofShop: addressofShop,
        zipOfShop: zipOfShop,
        email: sessionStorage.getItem("email")
      };
      fetch(url, {
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
          History.push("/shoplist");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  });
  return (
    <div id="ShopBluePrint">
      <center>
        <h2>Add New Shop</h2>
        <br />
      </center>
      <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0">
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
        <input
          className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
          placeholder="Shop Name"
          onChange={shopname}
          type="text"
        />
        <input
          className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
          placeholder="Shop Type"
          onChange={shoptype}
          type="text"
        />
      </div>
      <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0">
        <input
          className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
          placeholder="Shop Address Name"
          onChange={shopaddress}
          type="text"
        />
        <input
          className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
          placeholder="Shop Owner Name"
          onChange={shopowner}
          type="text"
        />
      </div>
      <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0">
        <input
          className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
          placeholder="Shop Phone Number"
          onChange={shopPhone}
          type="Number"
        />
        <input
          className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
          placeholder="ZipCode"
          onChange={zipcode}
          type="Number"
        />
      </div>
      <center>
        <button
          className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={summit}
        >
          Button
        </button>
      </center>
    </div>
  );
}

export default AddShop;
