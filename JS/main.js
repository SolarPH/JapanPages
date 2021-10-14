import TableCSV from "./TableCSV.js";

const tableRoot = document.querySelector("#csvRoot");
const tableCsv = new TableCSV(tableRoot);

tableCsv.setHeader(["ID", "Name", "Age"])
