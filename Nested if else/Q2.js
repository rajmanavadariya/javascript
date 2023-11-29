let score = document.getElementById("inp-1").value
let Price
let finalprice

if(score == "")
{
    document.getElementById("ans").innerText = ""
}
else
{
    if(score>0 && score<=10000)
    {
        Price = (score*5)/100;
        finalprice = score - Price
        document.getElementById("ans").innerText = +finalprice
    }
    else if(score>=10001 && score<20000)
    {
        Price = (score*10)/100;
        finalprice = score - Price
        document.getElementById("ans").innerText = +finalprice
    }
    else if(score>=20001 && score<30000)
    {
        Price = (score*15)/100;
        finalprice = score - Price
        document.getElementById("ans").innerText = +finalprice
    }
    else if(score>=30001 && score<40000)
    {
        Price = (score*20)/100;
        finalprice = score - Price
        document.getElementById("ans").innerText = +finalprice
    }
    else
    {
        Price = (score*25)/100;
        finalprice = score - Price
        document.getElementById("ans").innerText = +finalprice
    }
}