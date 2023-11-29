let a = document.getElementById("inp-1").value

    if(a == "")
    {
        document.getElementById("ans").innerText = ""
    }
    else
    {
        if( a == 'local')
        {
            document.getElementById("ans").innerText = "$5 + $1 per pound"
        }
        else if( a == 'national')
        {
            document.getElementById("ans").innerText = "$10 + $2 per pound"
        }
        if( a == 'international')
        {
            document.getElementById("ans").innerText = "$20 + $5 per pound"
        }
    }