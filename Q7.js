let num = document.getElementById("num").value
if(num=="")
{
    document.write("")
}
else if(num % 5 == 0 && num % 7 == 0){
    document.write("Divisible by both 5 and 7") 
}
else{
    document.write("Not Divisible by both 5 and 7")    
}