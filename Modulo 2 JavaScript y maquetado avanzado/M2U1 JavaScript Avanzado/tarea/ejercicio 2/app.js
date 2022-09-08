/*no entiendo pq esto no funciona si está acá, pero si funciona si esta en el script dentro de html
var texto = document.getElementById('texto')
var contar = document.getElementById('contar')

texto.addEventListener('keyup', function(){
    contar.innerText = texto.length
})
*/

let texto = document.getElementById("texto")
let contar = document.getElementById("contar")

if (texto == null)
    console.log("abc")

if (texto != null)
    console.log("abcd")

//como es null la consola no lo lee y tampoco me deja poner addeventlistener

texto.addEventListener("keyup", function(){
    console.log("abcde")
})

//tira este error: Uncaught TypeError: Cannot read properties of null (reading 'addEventListener') at app.js:21:7
//probé con textarea, input text y pasa lo mismo
//pero si escribo exactamente lo mismo dentro de html funciona
//intente ponerle un value al input, pero tampoco funciona