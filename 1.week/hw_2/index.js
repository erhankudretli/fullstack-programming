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

console.log(miladiYil+"'i HICRI yila cevirirsek "+HicriyeCevir(miladiYil)+" olur." );
console.log(hicriYil+"'i MILADI yila cevirirsek "+MiladiyeCevir(hicriYil) +" olur.");