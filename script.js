let desserts;

fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // desserts = data;
    populateDom(data);
  });

function populateDom(elements) {
  const breakpoints = {
    mobile: 576,
    tablet: 768,
    desktop: 992,
  };

  const dessertsGrid = document.querySelector(".desserts-grid");

  elements.forEach((element) => {
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
    price.textContent = `$${element.price}`;
    dessertBody.appendChild(price);

    dessertsGrid.appendChild(dessertContainer);
  });
}
