import { DessertsInfo } from "./desserts.js";
export const Cart = (function () {
  const cartItems = [];

  function addItem(name, quantity, totalPrice, cartItem) {
    cartItems.push({
      name,
      quantity,
      totalPrice,
      cartItem,
    });
  }

  function getItem(name) {
    const currentItem = cartItems.filter(function (item) {
      return item.name === name;
    });

    return currentItem[0];
  }

  function removeItem(name) {
    const item = getItem(name);
    const index = cartItems.indexOf(item);
    cartItems.splice(index, 1);
  }

  return {
    addItem,
    getItem,
    removeItem,
  };
})();
