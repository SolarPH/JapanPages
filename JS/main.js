import TableCSV from "./TableCSV.js";

const tableRoot = document.querySelector("#csvRoot");
const csvFileInput = document.querySelector("#csvFileInput");
const tableCsv = new TableCSV(tableRoot);

csvFileInput.addEventListener("change", e => {
  console.log(csvFileInput.files[0]);
  
  Papa.parse(csvFileInput.files[0], {
    delimiter: ",",
    skipEmptyLines: true,
    complete: results => {
      console.log(results);
    }
  });
});
