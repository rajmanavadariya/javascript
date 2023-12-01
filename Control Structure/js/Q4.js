let a = document.getElementById("inp-1").value
let b = document.getElementById("inp-2").value
let c = document.getElementById("inp-3").value

if(a == "" && b == "" && c == "")
{
    document.getElementById("ans").innerHTML = ""
}
else
{
    if(a < b)
    {
        if(a < c){
            document.getElementById("ans").innerHTML = "A is smaller"
        }
    }
    else if(b < c)
    {
        document.getElementById("ans").innerHTML = "B is smaller"
    }
    else
    {
        document.getElementById("ans").innerHTML = "C is smaller"
    }
}