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
    if (desserts[dessertIndex] > 0) {
      desserts[dessertIndex].quantity -= 1;
    }
  }

  function printDesserts() {
    console.log(desserts);
  }

  return {
    saveDesserts,
    printDesserts,
    setQauntity,
    increaseQauntity,
    decreaseQauntity,
  };
})();
