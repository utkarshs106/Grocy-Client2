import React from "react";
import { useHistory } from "react-router-dom";

function CreateShop(props) {
  var History = useHistory();
  function openShop() {
    sessionStorage.setItem("shopid", props.name);
    History.push("/insideShop");
  }
  return (
    <div onClick={openShop} id="l1" className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <div className="block relative h-48 rounded overflow-hidden">
        <img
          alt="ecommerce"
          className="object-cover object-center w-full h-full block"
          src="https://dummyimage.com/420x260"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {props.name}
        </h2>
        <p></p>
      </div>
    </div>
  );
}
export default CreateShop;
