let a = document.getElementById("int").value

if(a == ""){
    document.write("")
}else{
   if(a < 18){
    document.write("Minor")
   }else if(a < 65){
     document.write("Adult")
   }else{
    document.write("Senior")
   }
}