let op = document.getElementById("op").value 
let num1 = document.getElementById("num1").value
let num2 = document.getElementById("num2").value

let ans 

switch(op){
    case "+" : ans = +num1 + +num2
    console.log("Number 1 + Number 2 =")
    console.log(ans)
    break

    case "-" : ans = +num1 - +num2
    console.log("Number 1 - Number 2 = ")
    console.log(ans)
    break

    case "*" : ans= +num1 * +num2
    console.log("Number 1 * Number 2 = ")
    console.log(ans)
    break

    case "/" : ans = +num1 / +num2
    console.log("Number 1 / Number 2 = ")
    console.log(ans)
    break

    default : console.log("Invalid operator")
}