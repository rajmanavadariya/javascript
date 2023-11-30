 let h = document.getElementById("in1").value
    let w = document.getElementById("in2").value
    let bmi = w/(h*h)
if(h == "" && w == ""){
    document.getElementById("ans").innerHTML=""
}else{
    if(bmi<=18.5){
        document.getElementById("ans").innerHTML="Underweight" 
    }
    else if(bmi>18.5 && bmi<24.9){
        document.getElementById("ans").innerHTML="Normal weight"
    }
    else if(bmi>25 && bmi<29.9){
        document.getElementById("ans").innerHTML="Overweight"  
    }
    else{
        document.getElementById("ans").innerHTML="Obese"  
    }
}