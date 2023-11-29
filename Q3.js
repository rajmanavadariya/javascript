let a = document.getElementById("int").value

if(a == ""){
    document.write("")
}else{
   if(a > 0){
    document.write("This value Positive")
   }else if(a < 0){
     document.write("this is nagative")
   }else if(a==0){
    document.write("this is zero")
   }
}