const body = document.querySelector("body")
const red = document.querySelector("#red")
const green = document.querySelector("#green")
const blue = document.querySelector("#blue")

function cambiarColorFondo(color){
    body.style.backgroundColor = (color)
}

red.addEventListener("click", function(){
    cambiarColorFondo("rgb(255, 0, 0)")
})
green.addEventListener("click", function(){
    cambiarColorFondo("rgb(0, 255, 0)")
})
blue.addEventListener("click", function(){
    cambiarColorFondo("rgb(0, 0, 255)")
})