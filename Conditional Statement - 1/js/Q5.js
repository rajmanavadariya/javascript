let a = document.getElementById('in').value

switch(a){
case 'A' : document.getElementById("ans").innerText="Excellent! You got an A."
break;
case 'B' : document.getElementById("ans").innerText="Well done! You got a B"
break;
case 'C' : document.getElementById("ans").innerText="Good job! You got a C"
break;
case 'D' : document.getElementById("ans").innerText="You got a D. Keep working hard!"
break;
case 'F' : document.getElementById("ans").innerText="Unfortunately, you failed."
break;
default : document.getElementById("ans").innerText="Invalid grade"

}