import { DessertsInfo } from "./desserts.js";
export const Cart = (function () {
  const cartItems = [];

  function addItem(name, quantity, totalPrice) {
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

  return {
    addItem,
    getItem,
  };
})();
