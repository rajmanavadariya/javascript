let savepass = "12345"
let enterpass = document.getElementById("inp").value 

if(enterpass == ""){
    document.getElementById("ans").innerHTML = ""
}else{
    if(savepass === enterpass){
        alert("Logged In !")
    }else{
        let newpass = prompt("Forgot Password ? Create A New Password")
        if(newpass.length >= 6){
            document.getElementById("ans").innerHTML = "Password Changed !"

        }else{
            document.getElementById("ans").innerHTML = "Minimum 6 character Required"
        }
    }
}