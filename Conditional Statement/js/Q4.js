  let number = prompt("Enter Year")

if(number == ""){
    document.getElementById("ans").innerHTML = ""
}else{
        if(number % 4 == 0){
            document.getElementById("ans").innerHTML = "Leap Year"

        }else{
            document.getElementById("ans").innerHTML = "Not a Leap Year"
        }
}