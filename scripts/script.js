// scripts/script.js

// Looks for the element with the class 'hamburger'.
const hamburger = document.querySelector('.hamburger');
// Looks for the <nav> element.
const nav = document.querySelector('nav');

// Adds a click event listener to the hamburger button.
hamburger.addEventListener('click', function() {
    nav.classList.toggle('active');
    const isExpanded = nav.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isExpanded);
    hamburger.classList.toggle('active');
});