import React, { useState } from "react";
import ShopsExample from "../shopsExample";
import { useHistory } from "react-router-dom";

function ItemIcon(props) {
  var History = useHistory();
  var data = { name: props.name, category: props.category, price: props.price };
  function InsideShop() {
    for (var i = 0; i < ShopsExample.length; i++) {
      // look for the entry with a matching `code` value
      if (ShopsExample[i].name === props.name) {
        sessionStorage.setItem("itemname", props.name);
        sessionStorage.setItem("itemcategory", props.category);
        sessionStorage.setItem("itemprice", props.price);
        sessionStorage.setItem("itemdiscription", ShopsExample[i].discription);
        History.push("/Item");
      }
    }
  }
  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full" onClick={InsideShop}>
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://dummyimage.com/420x260"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {props.category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {props.name}
        </h2>
        <p className="mt-1">${props.price}</p>

        <p></p>
      </div>
    </div>
  );
}

export default ItemIcon;
