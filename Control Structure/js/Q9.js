let a = document.getElementById("inp-1").value
let b = document.getElementById("inp-2").value
let c = document.getElementById("inp-3").value

let d = +a + +b + +c;
console.log(d)

if(d == 180)
{
    document.getElementById("ans").innerHTML = "It's Tringle"
    if(a == b && b == c && c == a)
    {
        document.getElementById("ans").innerHTML = "Equilateral"
    }
    else if(a != b && b != c && c != a)
    {
        document.getElementById("ans").innerHTML = "Scalene"
    }
    else
    {
        document.getElementById("ans").innerHTML = "Isoceles"
    }
}