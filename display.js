import { DessertsInfo } from "./desserts.js";

export const displayController = (function displayController() {
  const dessertsGrid = document.querySelector(".desserts-grid");
  const empyCart = document.querySelector(".empty-cart");
  const cartList = document.querySelector(".cart-list");

  function populateDessertsGrid(elements) {
    const breakpoints = {
      mobile: 576,
      tablet: 768,
      desktop: 992,
    };

    elements.forEach((element, index) => {
      const dessertContainer = document.createElement("div");
      dessertContainer.classList.add("dessert");

      const picture = document.createElement("picture");
      dessertContainer.appendChild(picture);

      const source1 = document.createElement("source");
      source1.srcset = `${element.image.desktop}`;
      source1.media = `(width >= ${breakpoints.desktop}px`;
      picture.appendChild(source1);

      const source2 = document.createElement("source");
      source2.srcset = `${element.image.tablet}`;
      source2.media = `(width >= ${breakpoints.tablet}px`;
      picture.appendChild(source2);

      const source3 = document.createElement("source");
      source3.srcset = `${element.image.mobile}`;
      source3.media = `(width >= ${breakpoints.mobile}px`;
      picture.appendChild(source3);

      const img = document.createElement("img");
      img.src = `${element.image.thumbnail}`;
      picture.appendChild(img);

      const dessertBody = document.createElement("div");
      dessertBody.classList.add("dessert-body");
      dessertContainer.appendChild(dessertBody);

      const category = document.createElement("p");
      category.classList.add("dessert-category");
      category.textContent = `${element.category}`;
      dessertBody.appendChild(category);

      const name = document.createElement("h2");
      name.classList.add("dessert-name");
      name.textContent = `${element.name}`;
      dessertBody.appendChild(name);

      const price = document.createElement("p");
      price.classList.add("dessert-price");
      price.textContent = `$${element.price.toFixed(2)}`;
      dessertBody.appendChild(price);

      const cart = document.createElement("button");
      cart.classList.add("cart-btn-container");
      cart.setAttribute("data-dessert-index", `${index}`);

      const cartStateZero = document.createElement("div");
      cartStateZero.classList.add("cart-state-0");
      cart.appendChild(cartStateZero);
      const cartStateZeroWrapper = document.createElement("div");
      cartStateZeroWrapper.classList.add("wrapper");
      cartStateZero.appendChild(cartStateZeroWrapper);

      const cartSvg = document.createElement("img");
      cartSvg.src = "./assets/images/icon-add-to-cart.svg";
      cartStateZeroWrapper.appendChild(cartSvg);

      const cartBtnText = document.createElement("span");
      cartBtnText.textContent = "Add to Cart";
      cartStateZeroWrapper.appendChild(cartBtnText);

      const cartStateOne = document.createElement("div");
      cartStateOne.classList.add("cart-state-1", "hidden");
      cart.appendChild(cartStateOne);
      const cartStateOneWrapper = document.createElement("div");
      cartStateOneWrapper.classList.add("wrapper");
      cartStateOne.appendChild(cartStateOneWrapper);

      const incrementIcon = document.createElement("img");
      incrementIcon.src = "./assets/images/icon-increment-quantity.svg";
      incrementIcon.setAttribute("data-dessert-index", `${index}`);
      cartStateOneWrapper.appendChild(incrementIcon);

      incrementIcon.addEventListener("click", function (e) {
        e.stopPropagation();
        let dessertIndexClicked = e.currentTarget.dataset.dessertIndex;
        DessertsInfo.increaseQauntity(dessertIndexClicked);
        quantityNumber.textContent = `${DessertsInfo.getQauntity(dessertIndexClicked)}`;
      });

      const quantityNumber = document.createElement("span");
      quantityNumber.classList.add("quantity-number");
      cartStateOneWrapper.appendChild(quantityNumber);

      const decrementIcon = document.createElement("img");
      decrementIcon.src = "./assets/images/icon-decrement-quantity.svg";
      decrementIcon.setAttribute("data-dessert-index", `${index}`);
      cartStateOneWrapper.appendChild(decrementIcon);

      decrementIcon.addEventListener("click", function (e) {
        e.stopPropagation();
        let dessertIndexClicked = e.currentTarget.dataset.dessertIndex;
        DessertsInfo.decreaseQauntity(dessertIndexClicked);
        quantityNumber.textContent = `${DessertsInfo.getQauntity(dessertIndexClicked)}`;
      });

      cart.addEventListener("click", function (e) {
        cartStateZero.classList.add("hidden");
        cartStateOne.classList.remove("hidden");

        let dessertIndexClicked = e.currentTarget.dataset.dessertIndex;

        DessertsInfo.setQauntity(dessertIndexClicked, 1);
        quantityNumber.textContent =
          DessertsInfo.getQauntity(dessertIndexClicked);
      });
      dessertBody.appendChild(cart);

      dessertsGrid.appendChild(dessertContainer);
    });
  }

  function populateCartDisplay(elements, index) {
    if (empyCart.classList.contains("hidden")) {
      empyCart.classList.add("hidden");
    }

    const cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");

    const cartItemBody = document.createElement("div");
    cartItemBody.classList.add("cart-item-body");

    const itemTitle = document.createElement("h3");
    itemTitle.textContent = `${elements[index].name}`;
    itemTitle.classList.add("cart-item__title");
    cartItemBody.appendChild(itemTitle);

    const cartItemNumbers = document.createElement("div");
    cartItemNumbers.classList.add("cart-item-numbers");

    const itemQauntity = document.createElement("span");
    itemQauntity.classList.add("cart-item-numbers");
    // itemQauntity.textContent = `${}`;
  }

  return {
    populateDessertsGrid,
  };
})();
