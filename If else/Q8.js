let age = document.getElementById("age").value
if(age=="")
{
    document.write("")
}
else{
    if(age < 18){
        document.write("You May Pay $8") 
    }
    else if(age < 65){
        document.write("You May Pay $12")
    }
    else{
        document.write("You May Pay $6")
    }
}