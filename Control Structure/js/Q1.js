var totalunits = prompt("Enter the number of units consumed:");
var rate1 = 1;  
var rate2 = 2; 
var rate3 = 3; 
var totalBill = 0;

if (totalunits <= 100) {
    totalBill = totalunits * rate1;
} else if (totalunits <= 200) {
    totalBill = 100 * rate1 + (totalunits - 100) * rate2;
} else {
    totalBill = 100 * rate1 + 100 * rate2 + (totalunits - 200) * rate3;
}

document.getElementById("ans").innerHTML = totalBill;


