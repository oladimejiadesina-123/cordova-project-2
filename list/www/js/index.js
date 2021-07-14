const menu = document.querySelector('#mobile-menu');
const navbarMenu = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    navbarMenu.classList.toggle('active')
})