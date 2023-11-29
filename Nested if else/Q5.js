let a = document.getElementById("inp-1").value

    if(a == "")
    {
        document.getElementById("ans").innerText = ""
    }
    else
    {
        if( a == 'Electronics')
        {
            document.getElementById("ans").innerText = "10% off for 2 or more items"
        }
        else if( a == 'Clothing')
        {
            document.getElementById("ans").innerText = "Buy 1 get 1 50% off"
        }
        if( a == 'Ongoing promotions')
        {
            document.getElementById("ans").innerText = "Additional discounts based on specific products or time-limited offers"
        }
    }