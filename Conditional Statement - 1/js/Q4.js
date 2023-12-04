let lan = document.getElementById("in").value 



switch(lan){
    case 'English' : document.getElementById("ans").innerHTML = "Hello"

    break;

    case 'Spanish' : document.getElementById("ans").innerHTML = "Hola"
    break;

    case 'French' : document.getElementById("ans").innerHTML = "Bonjour"
    break;

    default : document.getElementById("ans").innerHTML = "Language Not suppoted"

}