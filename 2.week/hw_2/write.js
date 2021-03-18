const XLSX = require("xlsx");
const Sdata=require(`./data.js`) // sample data

const workbook = XLSX.readFile("./Ornek.xlsx"); // excell dosyasi

const SdataJson = XLSX.utils.json_to_sheet(Sdata) // sample data excel formatina cevrildi

XLSX.utils.book_append_sheet(workbook,SdataJson,"NewSheet") // workbook dosyasinda NewSheet isminde bir sayfa olustu ve Sdata Json buraya eklendi
XLSX.writeFile(workbook,'Ornek.xlsx') // eklenen ve olusturuan bilgiler kaydedildi. 