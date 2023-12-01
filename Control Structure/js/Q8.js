let a = document.getElementById("val").value
if(a==""){
    document.getElementById("ans").innerHTML="enter any number"
}
else{

    if(a > 0){
        document.getElementById("ans").innerHTML="This value is positive"
    }
    else if( a< 0){
        document.getElementById("ans").innerHTML="This value is negative"
    }
    else if(a==0){
        document.getElementById("ans").innerHTML="This is zero"
    }
}