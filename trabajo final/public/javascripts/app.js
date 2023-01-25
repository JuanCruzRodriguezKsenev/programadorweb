const preloader = document.querySelector(".preloader")
const body = document.querySelector("body")

window.onload = function(){
    preloader.style.display = 'none'
    body.classList.remove('hidden')
}