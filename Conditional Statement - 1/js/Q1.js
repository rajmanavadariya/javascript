let days = document.getElementById("in").value 
let dayname

switch(parseInt(days)){
    case 1 : dayname = "Monday"
    dayname += "It's the start of the workweek."
    break;

    case 2 : dayname = "Tuesday"
    break;

    case 3 : dayname = "Wednesday"
    break;

    case 4 : dayname = "Thursday"
    break;

    case 5 : dayname = "Friday "
    dayname += "It's almost the weekend!"
    break;

    case 6 : dayname = "Saturday"
    dayname += "It's the weekend!"
    break;

    case 7 : dayname = "Sunday "
    dayname += "It's Holiday"
    break;

    default : console.log("It s some other day")

}

console.log(dayname)