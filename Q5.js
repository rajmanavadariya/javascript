let a = document.getElementById("int").value

if(a == ""){
    document.write("")
}else{
   if(a == 366){
   document.getElementById("ans").innerHTML = "This is A leap Year"
   }else if(a == 365){
    document.getElementById("ans").innerHTML = "This is A Not leap Year"
   }
}