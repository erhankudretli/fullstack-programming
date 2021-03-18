const XLSX = require("xlsx");
const workbook = XLSX.readFile("./Ornek.xlsx");

let ws=workbook.Sheets["Sheet1"];
let ReadData=XLSX.utils.sheet_to_json(ws);
console.log(ReadData);

