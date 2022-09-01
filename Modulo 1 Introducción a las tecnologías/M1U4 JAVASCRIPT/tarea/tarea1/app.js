/*
0 >= pie <= 1000
1000 > bicicleta <= 10000
10000 > colectivo <= 30000
30000 > auto <= 100000
100000 > avión
*/
let Medio = "a"
const metros = prompt("ingrese la cantidad de metros: ", "")
if(metros >= 0 && metros <= 1000)
    Medio = "pie"
    else if(metros > 1000 && metros <= 10000)
        Medio = "bicicleta"
    else if(metros > 10000 && metros <= 30000)
        Medio = "colectivo"
    else if(metros > 30000 && metros <= 100000)
        Medio = "auto"
    else if(metros > 100000)
        Medio = "avión"
document.getElementById("medio").innerHTML = Medio
document.getElementById("distancia").innerHTML = metros