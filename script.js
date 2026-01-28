import { displayController } from "./display.js";

fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    displayController.populateDessertsGrid(data);
  });
