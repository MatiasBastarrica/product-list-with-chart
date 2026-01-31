import { DessertsInfo } from "./desserts.js";
export const Cart = (function () {
  const cartItems = [];

  function addItem(name, quantity, totalPrice, dessertIndex, price) {
    cartItems.push({
      name,
      quantity,
      totalPrice,
    });
  }

  function getItem(name) {
    const currentItem = cartItems.filter(function (item) {
      return item.name === name;
    });

    return currentItem[0];
  }

  function updateItem(name) {
    // search for the item and update its quantity and totalPrice
    const currentItem = cartItems.filter(function (item) {
      return (item.name = name);
    });

    const quantity = DessertsInfo.getQauntity(dessertIndex);

    currentItem.quantity.textContent = `${quantity}x`;

    currentItem.totalPrice.textContent = `\$${(quantity * currentItemprice).toFixed(2)}`;
  }

  return {
    addItem,
    updateItem,
    getItem,
  };
})();
