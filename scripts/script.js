// scripts/script.js
document.querySelector("#personal-link").addEventListener("click", () => {
    document.querySelector("#personal-projects").style.display = "block"
    document.querySelector("#professional-projects").style.display = "none"
})


const copyright = document.querySelector("#copyright")
copyright.textContent = `© ${new Date().getFullYear()} All rights reserved. Made by Steven Albert Iannucci`;