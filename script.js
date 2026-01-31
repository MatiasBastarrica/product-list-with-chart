import { DessertsDisplay } from "./desserts-display.js";
import { DessertsInfo } from "./desserts.js";

fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    DessertsDisplay.populateDessertsGrid(data);
    DessertsInfo.saveDesserts(data);
    // DessertsInfo.printDesserts();
  });

// console.log(DessertsInfo);
