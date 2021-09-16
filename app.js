const menu = document.quertySelector('#mobile-menu')
const menuLinks = documents.quertySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
});