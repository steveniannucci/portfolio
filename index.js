document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(e) {
            e.preventDefault();

            const target = this.getAttribute('data-target');
            const targetPage = document.querySelector('.' + target);

            pages.forEach(function(page) {
                page.classList.remove('active');
            });

            targetPage.classList.add('active');
        });
    });
});