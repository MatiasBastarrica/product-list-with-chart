import { DessertsDisplay } from "./desserts-display.js";

export const DessertsInfo = (function () {
  let desserts;
  let ogDesserts;

  function saveDesserts(data) {
    desserts = { ...data };
  }

  function saveOgDesserts(data) {
    ogDesserts = data;
  }

  function reset() {
    desserts = { ...ogDesserts };
    DessertsDisplay.resetGrid();
    const dessertsGrid = document.querySelector(".desserts-grid");
    DessertsDisplay.populateDessertsGrid(ogDesserts, dessertsGrid);
  }

  function setQauntity(dessertIndex, amount) {
    desserts[dessertIndex].quantity = amount;
  }

  function increaseQauntity(dessertIndex) {
    desserts[dessertIndex].quantity += 1;
  }

  function decreaseQauntity(dessertIndex) {
    if (desserts[dessertIndex].quantity > 0) {
      desserts[dessertIndex].quantity -= 1;
    }
  }

  function getQauntity(dessertIndex) {
    return desserts[dessertIndex].quantity;
  }

  function printDesserts() {
    console.log(desserts);
  }

  function saveDessertBtns(dessertIndex, btnZero, btnOne) {
    desserts[dessertIndex].btnStateZero = btnZero;
    desserts[dessertIndex].btnStateOne = btnOne;
  }

  function getDessertBtn(dessertBtn, dessertIndex) {
    return desserts[dessertIndex][dessertBtn];
  }

  return {
    saveDesserts,
    saveOgDesserts,
    reset,
    printDesserts,
    setQauntity,
    increaseQauntity,
    decreaseQauntity,
    getQauntity,
    saveDessertBtns,
    getDessertBtn,
  };
})();
