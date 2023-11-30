let number = prompt("Enter Number")

if(number == ""){
    document.getElementById("ans").innerHTML = ""
}else{
        if(number % 2 == 0){
            document.getElementById("ans").innerHTML = "Even"

        }else{
            document.getElementById("ans").innerHTML = "Odd"
        }
}