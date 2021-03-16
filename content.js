

function codeAddress() {

   console.log(document.getElementById("question").innerHTML.replaceAll("×","*").replaceAll("÷","/"))
   var x = (eval(document.getElementById("question").innerHTML.replaceAll("×","*").replaceAll("÷","/")));
   document.getElementById("calculator-display").value = ""+x;
   setTimeout(codeAddress, 200);

 }
    


 window.onload = function(){
   setTimeout(codeAddress, 1500);

 }