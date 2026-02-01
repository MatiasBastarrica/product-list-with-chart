import { DessertsInfo } from "./desserts.js";
import { Cart } from "./cart.js";
import { DessertsDisplay } from "./desserts-display.js";

export const CartDisplay = (function () {
  const empyCart = document.querySelector(".empty-cart");
  const cartList = document.querySelector(".cart-list");

  function populateCartItem(element, index) {
    if (!empyCart.classList.contains("hidden")) {
      empyCart.classList.add("hidden");
    }

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
    itemTotalPrice.textContent = `\$${(element.price * DessertsInfo.getQauntity(index)).toFixed(2)}`;
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
    });

    cartList.appendChild(cartItem);

    Cart.addItem(element.name, itemQauntity, itemTotalPrice, cartItem);
  }

  function updateCarItem(quantity, currentItem, price) {
    currentItem.quantity.textContent = `${quantity}x`;

    currentItem.totalPrice.textContent = `\$${(quantity * price).toFixed(2)}`;
  }

  function removeCartItem(name) {
    cartList.removeChild(Cart.getItem(name).cartItem);

    Cart.removeItem(name);
  }

  return {
    populateCartItem,
    updateCarItem,
  };
})();
