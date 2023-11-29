let a = document.getElementById("inp").value

if(a == ""){
    document.getElementById("ans").innerHTML = ""
}else{
   if(a >= 0 && a <= 12){
    document.getElementById("ans").innerHTML = "Price: $8";
   }else if(a >=13 && a < 64){
    document.getElementById("ans").innerHTML = "Price: $15";
   }else if(a >= 65 ){
    document.getElementById("ans").innerHTML = "Price: $10";
   }else{
    document.getElementById("ans").innerHTML = "Something Went Wrong"
   }
}