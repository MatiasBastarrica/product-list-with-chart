export const DessertsInfo = (function () {
  let desserts;

  function saveDesserts(data) {
    desserts = { ...data };
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
    printDesserts,
    setQauntity,
    increaseQauntity,
    decreaseQauntity,
    getQauntity,
    saveDessertBtns,
    getDessertBtn,
  };
})();
