import { DessertsDisplay } from "./desserts-display.js";
import { DessertsInfo } from "./desserts.js";

fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const dessertsGrid = document.querySelector(".desserts-grid");
    DessertsDisplay.populateDessertsGrid(data, dessertsGrid);
    DessertsInfo.saveDesserts(data);
    DessertsInfo.saveOgDesserts(data);
    // DessertsInfo.printDesserts();
  });

// console.log(DessertsInfo);
