/*
-user interaction 
4 islemi barindiran bir ek modul yazmamiz istendi.
- technical details
4 islem icin 4 fonksiyon yazilir.
function.js te module exports objesi olusturulur.
index.js te require ile fonksiyonlarin adresi belirtilir.*/

const {collect, subs, mult, divise} = require("./function"); 

collect(12,3);
subs(12,3);
divise(12,3);
mult(12,3);


