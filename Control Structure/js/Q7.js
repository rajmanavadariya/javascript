let a = document.getElementById("inp-1").value
let b = document.getElementById("inp-2").value
let c = document.getElementById("inp-3").value
let d = document.getElementById("inp-4").value
let e = document.getElementById("inp-5").value

if(a == "" && b == "" && c == "" && d == "" && e == "")
{
    document.getElementById("ans").innerHTML = ""
}
else
{
    if(a > b)
    {
        if(a > c)
        {
             if(a > d)
             {
                if(a > e)
                {
                    document.getElementById("ans").innerHTML = "A is bigger"
                }
             }
        }
    }
    else if(b > c)
    {
        if(b > d)
        {
            if(b > e)
            {
                document.getElementById("ans").innerHTML = "B is bigger"
            }
        }
    }
    else if(c > d)
    {
        if(c > e)
        {
            document.getElementById("ans").innerHTML = "C is bigger"
        }
    }
    else if(d > e)
    {
        document.getElementById("ans").innerHTML = "D is bigger"
    }
    else
    {
        document.getElementById("ans").innerHTML = "E is bigger"
    }
}