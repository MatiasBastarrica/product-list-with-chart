import { DessertsInfo } from "./desserts.js";
import { Cart } from "./cart.js";
import { DessertsDisplay } from "./desserts-display.js";

export const CartDisplay = (function () {
  const cartTotal = document.querySelector(".cart-total");
  const cartTotalNum = document.querySelector(".cart-total-num");
  const empyCart = document.querySelector(".empty-cart");
  const fullCart = document.querySelector(".full-cart");
  const cartList = document.querySelector(".cart-list");
  const cartConfirmBtn = document.querySelector(".confirm-order-btn");

  function populateCartItem(element, index) {
    // if (!empyCart.classList.contains("hidden")) {
    //   empyCart.classList.add("hidden");
    // }

    const cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");

    const cartItemBody = document.createElement("div");
    cartItemBody.classList.add("cart-item-body");
    cartItem.appendChild(cartItemBody);

    const itemTitle = document.createElement("h3");
    itemTitle.textContent = `${element.name}`;
    itemTitle.classList.add("cart-item__title");
    cartItemBody.appendChild(itemTitle);

    const cartItemNumbers = document.createElement("div");
    cartItemNumbers.classList.add("cart-item-numbers");
    cartItemBody.appendChild(cartItemNumbers);

    const itemQauntity = document.createElement("span");
    itemQauntity.classList.add("cart-item-quantity");
    itemQauntity.textContent = `${DessertsInfo.getQauntity(index)}x`;
    cartItemNumbers.appendChild(itemQauntity);

    const itemPrice = document.createElement("span");
    itemPrice.classList.add("cart-item-price");
    itemPrice.textContent = `@ \$${element.price.toFixed(2)}`;
    cartItemNumbers.appendChild(itemPrice);

    const itemTotalPrice = document.createElement("span");
    itemTotalPrice.classList.add("cart-total-price");
    let total = (element.price * DessertsInfo.getQauntity(index)).toFixed(2);
    itemTotalPrice.textContent = `\$${total}`;
    cartItemNumbers.appendChild(itemTotalPrice);

    const removeIcon = document.createElement("img");
    removeIcon.src = "./assets/images/icon-remove-item.svg";
    cartItem.appendChild(removeIcon);
    removeIcon.addEventListener("click", function (e) {
      removeCartItem(element.name);
      DessertsDisplay.resetBtnState(
        DessertsInfo.getDessertBtn("btnStateZero", index),
        DessertsInfo.getDessertBtn("btnStateOne", index),
      );
      updateTotal();
      Cart.checkEmptyCart();
      // toggleTotal();
    });

    cartList.appendChild(cartItem);

    Cart.addItem(element.name, itemQauntity, itemTotalPrice, cartItem, total);
  }

  function updateTotal() {
    cartTotalNum.textContent = `\$${Cart.getTotal()}`;
  }

  function updateCarItem(quantity, currentItem, price) {
    currentItem.quantity.textContent = `${quantity}x`;

    let total = (quantity * price).toFixed(2);
    currentItem.totalPrice.textContent = `\$${total}`;
    Cart.updateTotal(currentItem.name, total);
  }

  function removeCartItem(name) {
    cartList.removeChild(Cart.getItem(name).cartItem);

    Cart.removeItem(name);
  }

  function toggleFullCart() {
    fullCart.classList.toggle("hidden");
  }

  function toggleEmptyCart() {
    empyCart.classList.toggle("hidden");
  }

  return {
    populateCartItem,
    updateCarItem,
    removeCartItem,
    updateTotal,
    toggleFullCart,
    toggleEmptyCart,
  };
})();
