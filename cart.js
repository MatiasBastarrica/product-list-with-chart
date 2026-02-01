import { DessertsInfo } from "./desserts.js";
export const Cart = (function () {
  const cartItems = [];

  function addItem(name, quantity, totalPrice, cartItem, total) {
    cartItems.push({
      name,
      quantity,
      totalPrice,
      cartItem,
      total,
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

  function getTotal() {
    const total = cartItems.reduce(function (acc, current) {
      return acc + Number(current.total);
    }, 0);

    return Number(total).toFixed(2);
  }

  function updateTotal(name, newTotal) {
    getItem(name).total = newTotal;
  }

  return {
    addItem,
    getItem,
    removeItem,
    getTotal,
    updateTotal,
  };
})();
