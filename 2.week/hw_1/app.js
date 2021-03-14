
/*
-user interaction 
    -npm kütüphanesi yardimiyla bir dosya okunacak.
- technical details
    -Okunacak dosya olusturulur. 
    -uygun npm paketi bulunup indirilir
    -o pakete uygun olusturulan yapi ile okunacak dosyaya erisilir.
    -Sonuc ekrana bastirilir
*/

const fs = require('fs');

fs.readFile('OrnekDosya.txt', 'utf-8', function (err, data) {

  if (err) throw err;

  console.log(data);

});
