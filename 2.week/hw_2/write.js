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


const XLSX = require("xlsx");
// const Sdata=require(`./data`) // sample data 
let Sdata = [{
        ISIM: 'Cabbar',
        SOYISIM: 'Mikail',
        YAS: 22,
        'ALDIGI MAAS': 6000,
        CINSIYETI: 'ERKEK'
    },
    {
        ISIM: 'Hans',
        SOYISIM: 'Joe',
        YAS: 39,
        'ALDIGI MAAS': 16000,
        CINSIYETI: 'ERKEK'
    },
    {
        ISIM: 'Murtaza',
        SOYISIM: 'Kaya',
        YAS: 49,
        'ALDIGI MAAS': 6000,
        CINSIYETI: 'ERKEK'
    },
    {
        ISIM: 'Marion',
        SOYISIM: 'Minna',
        YAS: 55,
        'ALDIGI MAAS': 9000,
        CINSIYETI: 'KADIN'
    },
    {
        ISIM: 'Murat',
        SOYISIM: 'Burhan',
        YAS: 40,
        'ALDIGI MAAS': 10000,
        CINSIYETI: 'ERKEK'
    },
    {
        ISIM: 'Abdurrezzak',
        SOYISIM: 'Adigüzel',
        YAS: 22,
        'ALDIGI MAAS': 6000,
        CINSIYETI: 'ERKEK'
    },
    {
        ISIM: 'Mehmet',
        SOYISIM: 'Sökmen',
        YAS: 33,
        'ALDIGI MAAS': 12000,
        CINSIYETI: 'ERKEK'
    },

]

const workbook = XLSX.readFile("./Ornek.xlsx"); // excell dosyasi

const SdataJson = XLSX.utils.json_to_sheet(Sdata) // sample data excel formatina cevrildi

XLSX.utils.book_append_sheet(workbook, SdataJson, "NewSheet") // workbook dosyasinda NewSheet isminde bir sayfa olustu ve Sdata Json buraya eklendi
XLSX.writeFile(workbook, './Ornek.xlsx') // eklenen ve olusturuan bilgiler kaydedildi. 