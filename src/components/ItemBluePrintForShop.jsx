import React, { useState, useEffect } from "react";

function ItemBluePrintForShop(props) {
  var [checked, setChecked] = useState(0);

  function pushToParent() {
    for (var i = 0; i < props.deleteArray.length; i++) {
      if (props.deleteArray[i] === props.itemId) {
        console.log("got the matching one");
        //props.deleteArray.splice(i,1)
        props.deleteArray.splice(i, 1);

        checked = 1;

        break;
      }
    }

    console.log("this is checked" + checked);
    if (checked === 0) {
      console.log("element added");
      props.setDeleteArray(props.deleteArray.concat(props.itemId));
    }
    console.log("This is delete array" + props.deleteArray);
  }

  function deleteItems() {
    var data = {
      email: sessionStorage.getItem("email"),
      itemId: props.itemId,
      shopId: props.shopId
    };

    var url = "https://ytezo.sse.codesandbox.io/deleteItemsFromShop";

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
      });
  }

  return (
    <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0">
      <input type="checkbox" onChange={pushToParent} checked={checked} />
      <input
        className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
        placeholder="Item Name"
        defaultValue={props.itemName}
        type="text"
      />

      <input
        className="flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
        placeholder="Item Price"
        defaultValue={props.itemPrice}
        type="text"
      />
      <input type="Button" defaultValue="delete" onClick={deleteItems} />
    </div>
  );
}

export default ItemBluePrintForShop;
