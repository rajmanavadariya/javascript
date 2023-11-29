let a = document.getElementById("inp").value

if(a == ""){
    document.getElementById("ans").innerHTML = ""
}else{
   if(a >= 90 && a <= 100){
    document.getElementById("ans").innerHTML = "A";
   }else if(a >=80 && a < 90){
    document.getElementById("ans").innerHTML = "B";
   }else if(a >=70 && a < 80){
    document.getElementById("ans").innerHTML = "C";
   }else if(a >=60 && a < 70){
    document.getElementById("ans").innerHTML = "D";
   }else{
    document.getElementById("ans").innerHTML = "FAIL"
   }
}