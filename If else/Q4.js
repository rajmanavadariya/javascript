let char = document.getElementById("char").value
if(char=="")
{
    document.write("")
}
else{
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ||char === "A" || char === "E" || char === "I" || char === "O" || char === "U"     ){
        document.write("Vowel") 
    }
    else{
        document.write("Not a Vowel")
    }
    
}