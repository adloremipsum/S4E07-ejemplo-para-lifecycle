import { useEffect } from "react";

function ItemCart({ item, shoppingCartItems, setShoppingCartItems }) {
  function removeItemFromCart(itemId) {
    const itemInCart = shoppingCartItems.find((item) => item.id === itemId);
    if (itemInCart.quantity - 1 === 0) {
      return setShoppingCartItems(
        shoppingCartItems.filter((item) => item.id !== itemInCart.id)
      );
    }
    setShoppingCartItems(
      shoppingCartItems.map((item) => {
        if (item.id !== itemInCart.id) return item;
        return { ...item, quantity: item.quantity - 1 };
      })
    );
  }

  // useEffect

  return (
    <li
      className="list-group-item"
      key={item.id}
      onClick={() => removeItemFromCart(item.id)}
    >
      <span className="material-icons">remove_circle_outline</span>
      <strong>{item.name}</strong>&nbsp;(Cant: {item.quantity}
      )&nbsp;(${item.unitPrice} c/u)
    </li>
  );
}

export default ItemCart;
