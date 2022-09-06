const Num1 = parseInt(prompt('Ingrese primer número:', ''))
const Num2 = parseInt(prompt('Ingrese segundo número:', ''))
const Num3 = parseInt(prompt('Ingrese tercer número:', ''))
const Num4 = parseInt(prompt('Ingrese cuarto número:', ''))
let Numeros = [Num1, Num2, Num3, Num4]
let NumMax = 0
let UltNumExt = 0
for( let i = 0; i < Numeros.length; i++){
    UltNumExt = Numeros[i]
    if(UltNumExt > NumMax)
        NumMax = UltNumExt
}
document.getElementById("max").innerHTML = NumMax
document.getElementById("1").innerHTML = Num1
document.getElementById("2").innerHTML = Num2
document.getElementById("3").innerHTML = Num3
document.getElementById("4").innerHTML = Num4