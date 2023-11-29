let a = document.getElementById("val").value
if(a==""){
    document.getElementById("ans").innerHTML="enter any number"
}
else{

    if(a%2==0){
        document.getElementById("ans").innerHTML="This is a even number"
    }
    else {
        document.getElementById("ans").innerHTML="This is a odd number"
    }
    
}
