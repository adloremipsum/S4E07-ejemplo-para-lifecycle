import React from "react";
import _ from "lodash";
import ItemCart from "./ItemCart";

function ShoppingCart({ shoppingCartItems, setShoppingCartItems }) {
  function toManyItems() {
    const items = shoppingCartItems.filter(
      (item) => (item.id === 20 || item.id === 21) && item.quantity === 5
    );
    return items.length > 0;
  }
  return (
    <div className="shoppingCart">
      <h2>Carrito de compras</h2>
      {shoppingCartItems.length > 0 && (
        <ul className="list-group">
          {shoppingCartItems.map((item) => {
            return (
              <ItemCart
                key={item.id}
                item={item}
                shoppingCartItems={shoppingCartItems}
                setShoppingCartItems={setShoppingCartItems}
              />
            );
          })}
        </ul>
      )}
      {shoppingCartItems.length === 0 && (
        <p>
          Por favor, seleccione uno o más productos para agregar al carrito.
        </p>
      )}
      {shoppingCartItems.length > 0 && (
        <div className="alert alert-success mt-4">
          <strong>Precio total</strong>: $
          {_.round(
            shoppingCartItems.reduce(
              (acc, item) => acc + item.unitPrice * item.quantity,
              0
            ),
            2
          )}
        </div>
      )}
      {toManyItems() && (
        <p className="mt-4 text-danger">
          <span role="img" aria-label="Alert">
            ⚠️
          </span>{" "}
          Lo sentimos. No es posible comprar más unidades. Otras familias
          también necesitan abastecerse.
        </p>
      )}
    </div>
  );
}

export default ShoppingCart;
