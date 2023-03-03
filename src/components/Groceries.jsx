import React from "react";

function Groceries({ groceries, shoppingCartItems, setShoppingCartItems }) {
  function addGroceryToCart(groceryId) {
    const grocery = groceries.find((item) => item.id === groceryId);
    const groceryInCart = shoppingCartItems.find(
      (item) => item.id === groceryId
    );

    if (!grocery) return;

    if (!groceryInCart) {
      setShoppingCartItems([...shoppingCartItems, { ...grocery, quantity: 1 }]);
      return;
    }

    // Chequeo de Papel Higiénico y Alcohol en Gel:
    if (
      (groceryInCart.id === 20 || groceryInCart.id === 21) &&
      groceryInCart.quantity === 5
    ) {
      return;
    }

    setShoppingCartItems(
      shoppingCartItems.map((item) => {
        if (item.id !== groceryInCart.id) return item;
        return { ...item, quantity: item.quantity + 1 };
      })
    );

    /**
     * Otra versión:
     * Pero esto NO es correcto porque se modifica el estado previo.
     *
     * groceryInCart.quantity++;
     * setShoppingCartItems([...shoppingCartItems]);
     */
  }

  return (
    <>
      <h2>Productos disponibles</h2>
      <ul className="list-group">
        {groceries.map((grocery) => {
          return (
            <li
              className="list-group-item"
              key={grocery.id}
              onClick={() => addGroceryToCart(grocery.id)}
            >
              <span className="material-icons">add_circle_outline</span>
              <strong>{grocery.name}</strong>&nbsp;(${grocery.unitPrice} c/u)
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Groceries;
