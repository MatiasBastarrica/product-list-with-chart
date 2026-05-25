const dialog = document.querySelector("dialog");
const list = document.querySelector(".selected-desserts-list");

export function openDialog() {
  dialog.showModal();
}

export function populateList(cartData, totalOrder) {
  console.log(cartData);

  cartData.forEach((cartItem) => {
    const listItem = document.createElement("li");
    listItem.classList.add("dialog-item");
    list.appendChild(listItem);

    const listItemBody = document.createElement("div");
    listItemBody.classList.add("list-item-body");
    listItem.appendChild(listItemBody);

    const listItemImg = document.createElement("div");
    listItemImg.classList.add("list-item-img");
    listItemBody.appendChild(listItemImg);

    const thumbnail = document.createElement("img");
    thumbnail.src = cartItem.previewImg;
    listItemImg.appendChild(thumbnail);

    const listItemContent = document.createElement("div");
    listItemContent.classList.add("list-item-content");
    listItemBody.appendChild(listItemContent);

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    listItemContent.appendChild(wrapper);

    const itemTitle = document.createElement("h3");
    itemTitle.textContent = `${cartItem.name}`;
    itemTitle.classList.add("list-item__title");
    wrapper.appendChild(itemTitle);

    const listItemNumbers = document.createElement("div");
    listItemNumbers.classList.add("list-item-numbers");
    wrapper.appendChild(listItemNumbers);

    const itemQauntity = document.createElement("span");
    itemQauntity.classList.add("list-item-quantity");
    itemQauntity.textContent = `${cartItem.quantity.innerText}`;
    listItemNumbers.appendChild(itemQauntity);

    const itemPrice = document.createElement("span");
    itemPrice.classList.add("list-item-price");
    itemPrice.textContent = `@ \$${cartItem.price.toFixed(2)}`;
    listItemNumbers.appendChild(itemPrice);

    const itemTotalPrice = document.createElement("span");
    itemTotalPrice.classList.add("list-total-price");
    let total = cartItem.totalPrice.innerText;
    itemTotalPrice.textContent = `${total}`;
    listItemContent.appendChild(itemTotalPrice);
  });

  const total = document.createElement("div");
  total.classList.add("dialog-total");
  list.appendChild(total);

  const totalText = document.createElement("span");
  totalText.classList.add("dialog-total-text");
  total.appendChild(totalText);
  totalText.textContent = "Order total";

  const totalNum = document.createElement("span");
  totalNum.classList.add("dialog-total-num");
  total.appendChild(totalNum);
  totalNum.textContent = totalOrder;
}
