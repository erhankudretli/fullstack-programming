/*
--User interaction--
    - Excel dosyasinda yeni bir sayfa acilacak ve oraya data.js icindeki datalar yazilacak
--Technical Details --
    - kullanilacak paket tanimlanir 
    - Örnek dataya erisisim saglanir. ORNEK DATAYA ERISIM SAGLAYAMADIM DOLAYISIYLA O DATAYI ANA SAYFAYA CEKIP O SEKILDE YAPTIM
    - calisacak excel dosyasina ulasilir 
    - örnek data yapisi excel formatina cevrilir.
    - excel icinde yeni bir sayfa olusturulur ve sheet formatindaki data buraya gönderilir.
    - excel dosyasi kayit edilir.
*/

//import XLSX from 'xlsx'
 const XLSX = require("xlsx");
 //import db from  './data'
const db=require("./data")
console.log(db) //
// const data=require("./data.js")
// const Sdata=require(`./data`) // sample data 


const workbook = XLSX.readFile("./Ornek.xlsx"); // excell dosyasi

const SdataJson = XLSX.utils.json_to_sheet(db) // sample data excel formatina cevrildi

XLSX.utils.book_append_sheet(workbook, SdataJson, "Yenidosya2") // workbook dosyasinda NewSheet isminde bir sayfa olustu ve Sdata Json buraya eklendi
XLSX.writeFile(workbook, './Ornek.xlsx') // eklenen ve olusturuan bilgiler kaydedildi. 