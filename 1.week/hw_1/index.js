/*
-user interaction 
4 islemi barindiran bir ek modul yazacagim.
- technical details
4 islem icin 4 fonksiyon yazacagim, toplama,cikarma,carpma ve bölme
function.js te module exports objesi olusturacagim
index.js te require ile fonksiyonlarin import edecegim.*/

const {collect, subs, mult, divise} = require("./function"); 

collect(12,3);
subs(12,3);
divise(12,3);
mult(12,3);


