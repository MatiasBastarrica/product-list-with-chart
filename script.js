import { displayController } from "./display.js";
import { DessertsInfo } from "./desserts.js";

fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    displayController.populateDessertsGrid(data);
    DessertsInfo.saveDesserts(data);
    // DessertsInfo.printDesserts();
  });

// console.log(DessertsInfo);
