function ConvertMiladi(hicriYil){
    let turnMiladi=(hicriYil -(hicriYil/33)+ 622).toFixed(0);
   return turnMiladi
}
module.exports=ConvertMiladi