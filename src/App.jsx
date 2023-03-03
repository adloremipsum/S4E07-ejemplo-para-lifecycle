import React, { useState, useEffect } from "react";
import "./App.css";
import Groceries from "./components/Groceries";
import ShoppingCart from "./components/ShoppingCart";
import groceries from "./data/groceries";

function App() {
  const [shoppingCartItems, setShoppingCartItems] = useState([]);

  // useEffect

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Groceries
            groceries={groceries}
            shoppingCartItems={shoppingCartItems}
            setShoppingCartItems={setShoppingCartItems}
          />
        </div>
        <div className="col">
          <ShoppingCart
            shoppingCartItems={shoppingCartItems}
            setShoppingCartItems={setShoppingCartItems}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
