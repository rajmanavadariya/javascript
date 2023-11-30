let time = document.getElementById("inp").value 

if(ans == ""){
    document.getElementById("ans").innerHTML = ""
}else{
    if(time >= 0 && time <= 12){
        document.getElementById("ans").innerHTML = "Good Morning"
    }else if(time >= 12 && time <= 18){
        document.getElementById("ans").innerHTML = "Good Afternoon"
    }else{
        document.getElementById("ans").innerHTML = "Good Evening"
    }
}


