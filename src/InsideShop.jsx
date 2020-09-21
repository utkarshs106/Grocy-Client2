import React, { useState, useEffect } from "react";
import ItemBluePrintForShop from "./components/ItemBluePrintForShop";
import { useHistory } from "react-router-dom";
import CreateShop from "./components/createShop";

function InsideShop() {
  var History = useHistory();
  var [itemName, setItemName] = useState();
  var [itemPrice, setItemPrice] = useState();
  var [itemArray, setItemArray] = useState([]);
  var [shopId, setShopId] = useState();
  var [doRefresh, setDoRefresh] = useState(false);
  var [insert, setInsert] = useState(false);
  var [deleteElement, setDeleteElement] = useState();
  var [deleteArray, setDeleteArray] = useState([]);
  var [blockView, setBlockView] = useState(0);

  function Refresh() {
    if (doRefresh === true) {
      setDoRefresh(false);
    } else {
      setDoRefresh(true);
    }
  }

  function itemList() {
    History.push("/itemList");
  }

  function changeItemName(e) {
    setItemName(e.target.value);
  }
  function changeItemPrice(e) {
    setItemPrice(e.target.value);
  }
  function addItem() {
    setInsert(true);
  }
  function pop() {
    console.log(itemArray);

    Refresh();
  }
  function deleteItem() {
    var data = {
      deleteArray: deleteArray,
      shopId: sessionStorage.getItem("shopid")
    };
    console.log(data);
    var url = "https://ytezo.sse.codesandbox.io/deleteItemsFromShops";
    fetch(url, {
      mode: "cors",
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    })
      .then((data) => {
        if (data === "sucess") {
          Refresh();
        }
        console.log(data);
        Refresh();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  useEffect(() => {
    if (insert === true) {
      if (itemName.length > 0 && itemPrice.length > 0) {
        var data = {
          itemName: itemName,
          itemPrice: itemPrice,
          shopId: sessionStorage.getItem("shopid")
        };
        var url = "https://ytezo.sse.codesandbox.io/addItemToShop";
        //  setItemArray((itemArray) => [...itemArray, [itemName, itemPrice]]);
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
            console.log(data);
            Refresh();
          })
          .catch((error) => {
            console.error("Error:", error);
          });

        setItemName("");
        setItemPrice("");
      }
    }
    setInsert(false);
  });

  useEffect(() => {
    var data = { shopid: sessionStorage.getItem("shopid") };
    var url = "https://ytezo.sse.codesandbox.io/retrieveItemListFromShopList";
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
        setShopId(data[0]._id);
        var a1 = data[0].shopItems;

        setItemArray([]);
        for (var i = 0; i < a1.length; i++) {
          var firstValue = a1[i].itemName;
          var secondValue = a1[i].itemPrice;
          var thirdValue = a1[i]._id;
          setItemArray((itemArray) => [
            ...itemArray,
            [firstValue, secondValue, thirdValue]
          ]);
          //console.log(itemArray)
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [doRefresh]);

  function goToShopList() {
    History.push("/shopList");
  }

  function GenerateItems(data) {
    return (
      <ItemBluePrintForShop
        setDeleteElement={setDeleteElement}
        key={data[2]}
        itemName={data[0]}
        itemPrice={data[1]}
        itemId={data[2]}
        shopId={shopId}
        deleteArray={deleteArray}
        setDeleteArray={setDeleteArray}
      />
    );
  }

  function CreateBlockView(data) {
    return <CreateShop name={data[0]} key={data[2]} />;
  }
  function SwapViews() {
    if (blockView === 0) {
      setBlockView(1);
      return itemArray.map(GenerateItems);
    }
    if (blockView === 1) {
      setBlockView(0);
      return itemArray.map(CreateBlockView);
    }
  }

  function seeList() {
    console.log(deleteElement);
    //   setDeleteArray((deleteArray) => [...deleteArray, [deleteElement]]);
    console.log(deleteArray);
  }
  return (
    <div>
      <input
        type="button"
        defaultValue="see delete elements"
        onClick={seeList}
      />
      <button type="button" onClick={SwapViews}>
        Change View
      </button>
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

      <header name="text-gray-700 body-font">
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
            <span className="ml-3 text-xl">tailblocks</span>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <div className="mr-5 hover:text-gray-900">
              <button
                onClick={pop}
                className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
              >
                Pop it
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

              <button
                onClick={Refresh}
                className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
              >
                Refresh Item List
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
            <div className="mr-5 hover:text-gray-900">
              <button
                onClick={goToShopList}
                className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
              >
                return to shop list
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
          </nav>
          <button
            onClick={itemList}
            className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
          >
            ItemList
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

      <section name="text-gray-700 body-font">
        <div className="container px-5 py-60 mx-auto">
          <div className="flex flex-col text-center w-full mb-12"></div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:px-0">
            <button
              onClick={deleteItem}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-300 rounded text-lg"
            >
              Delete
            </button>
            <input
              className="itemname flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
              placeholder="Item Name"
              onChange={changeItemName}
              value={itemName}
              type="text"
            />
            <input
              className="itemprice flex-grow w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mr-4 mb-4 sm:mb-0"
              placeholder="Item Price"
              onChange={changeItemPrice}
              value={itemPrice}
              type="text"
            />
            <button
              onClick={addItem}
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-300 rounded text-lg"
            >
              Add
            </button>
          </div>
        </div>
      </section>
      {/* <div>{itemArray.map(GenerateItems)}</div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {itemArray.map(CreateBlockView)}
        </div>
      </div> */}

      <div id="changeItemViews">{SwapViews}</div>
    </div>
  );
}

export default InsideShop;
