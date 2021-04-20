/*
Objetivo: Escribir una función llamada contrasena 
que reciba un string y retorne otro string realizando 
los siguientes cambios sobre el string de entrada:

Remplaza las mayúsculas por minúsculas.
Elimina los espacios en blanco.
Remplaza el caracter "a" por "4".
Remplaza el caracter "e" por "3".
Remplaza el caracter "i" por "1".
Remplaza el carater "o" por "0".
*/
function generatePassword (string){
    let password = ""

    for (let i=0; i<string.length; i++){
        let char= string[i].toLowerCase();

        if (char=== " "){
            char = ""
        }else if (char=== "a"){
            char= "4"
        }else if (char === "e"){        
            char = "3"
        }else if (char === "i"){
            char = "1"
        }else if (char === "o"){
            char = "0"
        }
        password += char
    }   
    return password
}
console.log (generatePassword("Hola"))
console.log(generatePassword("esta es una prueba"))