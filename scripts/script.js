// scripts/script.js
document.querySelector("#personal-link").addEventListener("click", () => {
    document.querySelector("#personal-projects").style.display = "block"
    document.querySelector("#professional-projects").style.display = "none"
})

document.querySelector("#professional-link").addEventListener("click", () => {
    document.querySelector("#personal-projects").style.display = "none"
    document.querySelector("#professional-projects").style.display = "block"
})