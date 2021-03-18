/*
--User interaction--
    - Excel dosyasindaki veriler okunacak
--Technical Details --
    - kullanilacak paket tanimlanir 
    - calisacak excel dosyasina ulasilir 
    - cekmek istedigimiz sayfa tanimlanir.
    - sayfa icerisindeki veriler json formatina cevrilir ve ekrana bastirilir.
*/


const XLSX = require("xlsx"); // node package
const workbook = XLSX.readFile("./Ornek.xlsx"); // üzerinde islem yapacagimiz dosya

let ws=workbook.Sheets["Sheet1"]; // dosya icerisindeki sayfa secilir
let ReadData=XLSX.utils.sheet_to_json(ws); // json a cevirilir
console.log(ReadData);

