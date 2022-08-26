addEventListener("DOMContentLoaded", () => {
    const btnmenu = document.querySelector("#btnmenu")
    if (btnmenu) {
        btnmenu.addEventListener("click", () => {
            const deploymenu = document.querySelector(".deployable-menu")
            deploymenu.classList.toggle("mostrar")
        })
    }
})