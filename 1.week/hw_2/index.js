/*
 --user interaction--
 -Bir user interface olmadigi ve konsoldan bir rakam girilmesini istemedigim icin burada girilmesi
  gereken degerleri ben kendim programda girmis olacagim.
 -


 -- technical details--
 - Hicri takvimi miladi takvime ve miladi takvimi hicri takvime ceviren 2 ayri fonksiyonum var, (sinavdan)
 - Modülarize calismak icin önce bu fonkiyonlarin oldugu sayfalarda export edecegim ardindan index sayfamda
 import edecegim    
*/

const MiladiyeCevir=require("./src/miladi-converter");
const HicriyeCevir=require("./src/hicri-converter");
const miladiYil=2021;
const hicriYil=1453;

console.log("Miladi " +miladiYil+  " hicri olarak " +HicriyeCevir(miladiYil)+" olur." );
console.log("Hicri  "+hicriYil+ " hicri olarak " +  +MiladiyeCevir(hicriYil)+  " olur.");