import React from "react";
import "./styles.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Contact from "./Contact";
import Homepage from "./homepage";
import Signup from "./SignUP";
import ItemList from "./itemList";
import Items from "./components/item";
import Validate from "./components/Validate";
import ShopList from "./components/shoplist";
import AddItemToShop from "./components/addItemToShop";
import AddShop from "./components/AddShops";
import InsideShop from "./InsideShop";
function App() {
  return (
    <Router>
      <Route path="/" exact component={Homepage} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Signup" component={Signup} />
      <Route path="/itemList" component={ItemList} />
      <Route path="/Item" component={Items} />
      <Route path="/shopList" component={ShopList} />
      <Route path="/addItemToShop" component={AddItemToShop} />
      <Route path="/AddShop" component={AddShop} />
      <Route path="/InsideShop" component={InsideShop} />
    </Router>
    // <Validate />
  );
}
export default App;
