// scripts/script.js

// function getCopyrightInfo() {
//     return `&copy; ${new Date().getFullYear()} All rights reserved. Made by Steven Albert Iannucci`
// }

// function render() {
//     document.querySelector("#footer").innerHTML += `<p>${getCopyrightInfo()}</p>`
// }

// render()

const copyright = document.createElement("p")
copyright.textContent = `&copy; ${new Date().getFullYear()} All rights reserved. Made by Steven Albert Iannucci`;
copyright.appendChild(document.querySelector("footer"))